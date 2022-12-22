import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig } from 'vite'
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';

// https://vitejs.dev/config/

const viteConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    setupFiles: './jest-setup.js',
    threads: true,
    isolate: true,
    coverage: {
      reporter: ["text", "html"],
      provider: "istanbul"
    },
    exclude: [
      './src/Constants/**',
      './src/Enums/**',
      './src/Interfaces/**',
      './node_modules/**',
      './.storybook/**'
    ]
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@Assets': path.resolve(__dirname, './src/Assets'),
      '@Components': path.resolve(__dirname, './src/Components'),
      '@Constants': path.resolve(__dirname, './src/Constants'),
      '@Hooks': path.resolve(__dirname, './src/Hooks'),
      '@Interfaces': path.resolve(__dirname, './src/Interfaces'),
      '@Utilities': path.resolve(__dirname, './src/Utilities'),
      '@Strings': path.resolve(__dirname, './src/Strings')
    },
  },
}

export default defineConfig({
  test: viteConfig.test,
  plugins: viteConfig.plugins,
  resolve: viteConfig.resolve
})
