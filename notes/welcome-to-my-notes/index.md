---
title: Welcome to my notes
date: 2026-10-01
tags:
  - meta
---

This is the first post in my notes section. Notes live in `notes/<slug>/index.md` in the repo,
each in its own folder so images, diagrams, or any other media can sit right next to the post
that uses them.

## Code blocks get syntax highlighting

```js
function greet(name) {
  return `Hello, ${name}!`
}
```

## Diagrams

Fenced ` ```mermaid ` blocks render as actual diagrams instead of raw text:

```mermaid
flowchart LR
    A[Write a note] --> B[Drop it in notes/<slug>/index.md]
    B --> C[Vite plugin syncs it]
    C --> D[Shows up on /notes]
```

That's the whole pipeline - write markdown, save the file, see it live.
