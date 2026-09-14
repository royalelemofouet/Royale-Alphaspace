import path from "path"
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Royale-Alphaspace/', // Uniquement le nom du dépôt avec les slashes
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})