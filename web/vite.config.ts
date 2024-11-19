import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
dotenv.config()

export default defineConfig({
  plugins: [react()],
  css: { preprocessorOptions: { sass: { api: 'modern-compiler' } } },
  define: {
    'process.env.API_URL':      JSON.stringify(process.env.API_URL),
    'process.env.ICON_URL':     JSON.stringify(process.env.ICON_URL),
    'process.env.ICON_API_KEY': JSON.stringify(process.env.ICON_API_KEY)
  },
  server: {
    proxy: {
      '/iconsApi': {
        target: process.env.ICON_URL,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/iconsApi/, ''),
      },
    },
  },
})
