import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    include: ['**/__tests__/**/*.spec.[tj]s'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      './playground/**/*.*',
      './playground-temp/**/*.*',
    ],
    testTimeout: 200000,
  },
  esbuild: {
    target: 'node18',
  },
})
