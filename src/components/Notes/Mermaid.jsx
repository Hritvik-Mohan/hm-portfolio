import { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'

mermaid.initialize({
  startOnLoad: false,
  theme: document.documentElement.getAttribute('data-theme') === 'light' ? 'default' : 'dark',
})

let idCounter = 0

export default function Mermaid({ chart }) {
  const ref = useRef(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    const id = `mermaid-${idCounter++}`

    mermaid.render(id, chart)
      .then(({ svg }) => {
        if (!cancelled && ref.current) ref.current.innerHTML = svg
      })
      .catch((err) => {
        if (!cancelled) setError(err.message)
      })

    return () => { cancelled = true }
  }, [chart])

  if (error) {
    return <pre className="mermaid-error">Failed to render diagram: {error}</pre>
  }

  return <div className="mermaid-diagram" ref={ref} />
}
