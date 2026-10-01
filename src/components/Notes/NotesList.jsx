import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './NotesList.css'

export default function NotesList() {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    fetch('/notes-data/manifest.json')
      .then((res) => res.json())
      .then(setPosts)
      .catch(() => setPosts([]))
  }, [])

  if (posts === null) {
    return <div className="notes-list" id="notes"><h2 className="tabs-heading">Notes</h2></div>
  }

  return (
    <div className="notes-list" id="notes">
      <h2 className="tabs-heading">Notes</h2>
      {posts.length === 0 && <p className="notes-empty">No notes yet.</p>}
      <div className="notes-items">
        {posts.map((post) => (
          <Link className="notes-item" to={`/notes/${post.slug}`} key={post.slug}>
            <h3 className="notes-item-title">{post.title}</h3>
            <div className="notes-item-meta">
              {post.date && <span className="notes-item-date">{post.date}</span>}
              {post.tags.map((tag) => (
                <span className="notes-item-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
