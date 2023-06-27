import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      styles: "/src/styles",
      assets: "/src/assets",
      data: "/src/data",
      components: "/src/components",
      ui: "src/components/ui",
    },
  },
})
