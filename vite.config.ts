import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import { VitePluginRadar } from 'vite-plugin-radar';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePluginRadar({ analytics: { id: "G-0SDL9ZF6SC" } })
  ],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  }
})
