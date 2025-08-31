import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['**/*.vitest.{js,mjs,ts}'], // kun Vitest tests
    exclude: ['**/*.test.{js,mjs,ts}'],   // ignorer Jest tests
  },
})