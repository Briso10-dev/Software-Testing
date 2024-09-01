import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    setupFiles: ['dotenv/config'],
    include: ['src/**/*.test.ts'],
    hookTimeout: 60000,
    testTimeout: 30000,
  },
});