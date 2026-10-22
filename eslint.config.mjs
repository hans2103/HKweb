import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import astro from 'eslint-plugin-astro';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
    { ignores: ['dist/**', '.astro/**', 'node_modules/**', 'coverage/**', 'public/**'] },
    js.configs.recommended,
    tseslint.configs.recommended,
    astro.configs.recommended,
    {
        languageOptions: { globals: { ...globals.node } },
        plugins: { 'simple-import-sort': simpleImportSort },
        rules: {
            'simple-import-sort/imports': 'warn',
            'simple-import-sort/exports': 'warn'
        }
    }
);
