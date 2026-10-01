import fs from 'node:fs/promises'
import fssync from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const NOTES_SRC = 'notes'
const NOTES_OUT = path.join('public', 'notes-data')

async function syncNotes(root) {
  const srcDir = path.join(root, NOTES_SRC)
  const outDir = path.join(root, NOTES_OUT)

  if (!fssync.existsSync(srcDir)) {
    return
  }

  await fs.rm(outDir, { recursive: true, force: true })
  await fs.mkdir(outDir, { recursive: true })

  const slugs = (await fs.readdir(srcDir, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)

  const posts = []

  for (const slug of slugs) {
    const postSrcDir = path.join(srcDir, slug)
    const indexPath = path.join(postSrcDir, 'index.md')

    if (!fssync.existsSync(indexPath)) {
      continue
    }

    await fs.cp(postSrcDir, path.join(outDir, slug), { recursive: true })

    const raw = await fs.readFile(indexPath, 'utf-8')
    const { data } = matter(raw)

    const date = data.date instanceof Date
      ? data.date.toISOString().slice(0, 10)
      : data.date ? String(data.date) : ''

    posts.push({
      slug,
      title: data.title || slug,
      date,
      tags: Array.isArray(data.tags) ? data.tags : [],
    })
  }

  posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))

  await fs.writeFile(path.join(outDir, 'manifest.json'), JSON.stringify(posts, null, 2))
}

export default function notesPlugin() {
  let root = process.cwd()
  // Chain runs so syncs never overlap (one run's rm would race another's cp)
  let queue = Promise.resolve()
  const enqueueSync = () => {
    queue = queue.catch(() => {}).then(() => syncNotes(root))
    return queue
  }

  return {
    name: 'notes-sync',
    configResolved(config) {
      root = config.root || process.cwd()
    },
    async buildStart() {
      await enqueueSync()
    },
    configureServer(server) {
      const notesDir = path.join(root, NOTES_SRC)
      // Debounce bursts of watcher events into a single sync
      let timer = null
      const resync = () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
          enqueueSync().catch((err) => console.error('[notes-sync]', err))
        }, 100)
      }
      server.watcher.add(notesDir)
      server.watcher.on('add', (file) => file.startsWith(notesDir) && resync())
      server.watcher.on('change', (file) => file.startsWith(notesDir) && resync())
      server.watcher.on('unlink', (file) => file.startsWith(notesDir) && resync())
      server.watcher.on('unlinkDir', (file) => file.startsWith(notesDir) && resync())
    },
  }
}
