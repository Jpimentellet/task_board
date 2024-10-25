import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
dotenv.config()

export default defineConfig({
  plugins: [react()],
  css: { preprocessorOptions: { sass: { api: 'modern-compiler' } } },
  define: {
    'process.env.ICON_URL': JSON.stringify(process.env.ICON_URL)
  }
})
