import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' keeps asset paths relative, so the same build works on
// GitHub Pages (project sites live under /repo-name/) and on Vercel.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
