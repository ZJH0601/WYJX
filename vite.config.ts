import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  base: './',
  server: {
    port: 7897,
  },
  build: {
    sourcemap: false,
    /** 代码分割优化 */
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react', 'zustand'],
          'search-vendor': ['fuse.js'],
        },
      },
    },
  },
  plugins: [
    react(),
    tsconfigPaths()
  ],
})
