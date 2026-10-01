// Pulls published pages from the Notion notes database into notes/<slug>/index.md.
// Only folders whose frontmatter has `source: notion` are managed here, so
// hand-written notes are never touched.
//
// Env: NOTION_TOKEN, NOTION_DATABASE_ID

import fs from 'node:fs/promises'
import fssync from 'node:fs'
import path from 'node:path'
import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'
import matter from 'gray-matter'

const NOTES_DIR = path.resolve('notes')
const SOURCE = 'notion'

const { NOTION_TOKEN, NOTION_DATABASE_ID } = process.env
if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
  console.error('Missing NOTION_TOKEN or NOTION_DATABASE_ID')
  process.exit(1)
}

const notion = new Client({ auth: NOTION_TOKEN })
const n2m = new NotionToMarkdown({ notionClient: notion })

function slugify(text) {
  return text
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function plainText(richText = []) {
  return richText.map((t) => t.plain_text).join('').trim()
}

async function fetchPublishedPages() {
  const db = await notion.databases.retrieve({ database_id: NOTION_DATABASE_ID })
  const dataSourceId = db.data_sources[0].id

  const pages = []
  let cursor
  do {
    const res = await notion.dataSources.query({
      data_source_id: dataSourceId,
      filter: { property: 'Status', select: { equals: 'Published' } },
      start_cursor: cursor,
    })
    pages.push(...res.results)
    cursor = res.has_more ? res.next_cursor : undefined
  } while (cursor)

  return pages
}

// Notion-hosted file URLs expire after about an hour, so images are
// downloaded into the note's folder. External image links are kept as-is.
let currentImages = null

n2m.setCustomTransformer('image', async (block) => {
  const { image } = block
  const caption = plainText(image.caption)

  if (image.type === 'external') {
    return `![${caption}](${image.external.url})`
  }

  const res = await fetch(image.file.url)
  if (!res.ok) throw new Error(`Image download failed (${res.status}) for block ${block.id}`)

  const ext = path.extname(new URL(image.file.url).pathname) || '.png'
  const fileName = `image-${currentImages.files.length + 1}${ext.toLowerCase()}`
  currentImages.files.push({ fileName, data: Buffer.from(await res.arrayBuffer()) })

  return `![${caption}](/notes-data/${currentImages.slug}/${fileName})`
})

function pageSlug(page) {
  const props = page.properties
  const text = plainText(props.Slug?.rich_text) || plainText(props.Title?.title)
  return slugify(text) || page.id.replace(/-/g, '')
}

async function convertPage(page, slug) {
  const props = page.properties
  const title = plainText(props.Title?.title) || 'Untitled'

  currentImages = { slug, files: [] }
  const mdBlocks = await n2m.pageToMarkdown(page.id)
  const body = n2m.toMarkdownString(mdBlocks).parent || ''

  const frontmatter = {
    title,
    date: props.Date?.date?.start?.slice(0, 10) || page.created_time.slice(0, 10),
    tags: (props.Tags?.multi_select || []).map((t) => t.name),
    source: SOURCE,
    notion_id: page.id,
  }

  return { slug, markdown: matter.stringify(body.trim() + '\n', frontmatter), images: currentImages.files }
}

async function readNoteSource(slug) {
  const indexPath = path.join(NOTES_DIR, slug, 'index.md')
  if (!fssync.existsSync(indexPath)) return null
  const { data } = matter(await fs.readFile(indexPath, 'utf-8'))
  return data.source || 'manual'
}

async function main() {
  const pages = await fetchPublishedPages()

  // Convert everything before touching the disk, so a Notion error
  // midway never leaves notes/ half-updated.
  const notes = []
  const seen = new Set()
  for (const page of pages) {
    let slug = pageSlug(page)
    if (seen.has(slug)) slug = `${slug}-${page.id.slice(0, 8)}`
    seen.add(slug)
    notes.push(await convertPage(page, slug))
  }

  await fs.mkdir(NOTES_DIR, { recursive: true })

  for (const note of notes) {
    const dir = path.join(NOTES_DIR, note.slug)
    const existing = await readNoteSource(note.slug)
    if (existing && existing !== SOURCE) {
      console.warn(`Skipping "${note.slug}": a hand-written note already uses this slug`)
      continue
    }

    await fs.rm(dir, { recursive: true, force: true })
    await fs.mkdir(dir, { recursive: true })
    await fs.writeFile(path.join(dir, 'index.md'), note.markdown)
    for (const img of note.images) {
      await fs.writeFile(path.join(dir, img.fileName), img.data)
    }
    console.log(`Synced ${note.slug}`)
  }

  // Remove Notion notes that were unpublished, deleted, or renamed
  const published = new Set(notes.map((n) => n.slug))
  const entries = await fs.readdir(NOTES_DIR, { withFileTypes: true })
  for (const entry of entries) {
    if (!entry.isDirectory() || published.has(entry.name)) continue
    if ((await readNoteSource(entry.name)) === SOURCE) {
      await fs.rm(path.join(NOTES_DIR, entry.name), { recursive: true, force: true })
      console.log(`Removed ${entry.name}`)
    }
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
