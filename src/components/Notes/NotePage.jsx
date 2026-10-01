import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import oneDark from 'react-syntax-highlighter/dist/esm/styles/prism/one-dark'
import Mermaid from './Mermaid'
import './NotePage.css'

const FRONTMATTER_RE = /^---\n[\s\S]*?\n---\n?/

function stripFrontmatter(raw) {
  return raw.replace(FRONTMATTER_RE, '')
}

export default function NotePage() {
  const { slug } = useParams()
  const [meta, setMeta] = useState(null)
  const [content, setContent] = useState(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    setMeta(null)
    setContent(null)
    setNotFound(false)

    fetch('/notes-data/manifest.json')
      .then((res) => res.json())
      .then((posts) => {
        const post = posts.find((p) => p.slug === slug)
        if (!post) {
          setNotFound(true)
          return
        }
        setMeta(post)
      })
      .catch(() => setNotFound(true))

    fetch(`/notes-data/${slug}/index.md`)
      .then((res) => {
        if (!res.ok) throw new Error('not found')
        return res.text()
      })
      .then((raw) => setContent(stripFrontmatter(raw)))
      .catch(() => setNotFound(true))
  }, [slug])

  if (notFound) {
    return (
      <div className="note-page">
        <p>Note not found.</p>
        <Link to="/">&larr; Back to notes</Link>
      </div>
    )
  }

  return (
    <div className="note-page">
      <Link className="note-back" to="/">&larr; Back to notes</Link>
      {meta && (
        <div className="note-header">
          <h2 className="note-title">{meta.title}</h2>
          <div className="notes-item-meta">
            {meta.date && <span className="notes-item-date">{meta.date}</span>}
            {meta.tags.map((tag) => (
              <span className="notes-item-tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      )}
      {content && (
        <div className="note-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                const text = String(children).replace(/\n$/, '')

                if (!match) {
                  return <code className={className} {...props}>{children}</code>
                }

                if (match[1] === 'mermaid') {
                  return <Mermaid chart={text} />
                }

                return (
                  <SyntaxHighlighter language={match[1]} style={oneDark} PreTag="div">
                    {text}
                  </SyntaxHighlighter>
                )
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      )}
    </div>
  )
}
