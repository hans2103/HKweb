import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./vitest.setup.ts'],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'html'],
            exclude: ['**/*.config.{js,ts,mjs,cjs}', 'next-env.d.ts', '.next/**', 'src/**/*.d.ts']
        }
    }
});
