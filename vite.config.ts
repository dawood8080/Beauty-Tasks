import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@Assets': path.resolve(__dirname, './src/Assets'),
      '@Components': path.resolve(__dirname, './src/Components'),
      '@Constants': path.resolve(__dirname, './src/Constants'),
      '@Enums': path.resolve(__dirname, './src/Enums'),
      '@Hooks': path.resolve(__dirname, './src/Hooks'),
      '@Interfaces': path.resolve(__dirname, './src/Interfaces'),
      '@Utilities': path.resolve(__dirname, './src/Utilities')
    },
  },
})
