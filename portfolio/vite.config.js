import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio/',  // මෙන්න මේක /Portfolio/ විදියට වෙනස් කරන්න
  plugins: [react(), 
    tailwindcss()
  ],
})