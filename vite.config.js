import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import notes from './vite-plugins/notes.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), notes()],
})
