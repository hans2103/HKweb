import { defineConfig } from 'vitest/config';

// Most tests check the built site in dist/ (`npm test` builds first, see
// `pretest` in package.json): what ships is what gets tested.
export default defineConfig({
    test: {
        include: ['src/**/*.test.ts'],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'html'],
            include: ['src/lib/**']
        }
    }
});
