// src/__tests__/pages-config.test.ts
//
// Guards the zero-JavaScript setup: a page without
// `config: PageConfig = { unstable_runtimeJS: false }` silently ships the
// ~145 KiB React/Next runtime again.

import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

const PAGES_DIR = join(__dirname, '../../pages');
const pages = readdirSync(PAGES_DIR).filter(
    (file) => /\.tsx?$/.test(file) && !file.startsWith('_')
);

describe('pages', () => {
    it('finds pages to check', () => {
        expect(pages.length).toBeGreaterThan(0);
    });

    it.each(pages)('%s ships no client-side JavaScript', (file) => {
        const source = readFileSync(join(PAGES_DIR, file), 'utf8');
        expect(source).toMatch(
            /export const config: PageConfig = \{\s*unstable_runtimeJS: false\s*\}/
        );
    });

    it.each(pages)('%s uses no inline style prop (CSP style-src is self only)', (file) => {
        const source = readFileSync(join(PAGES_DIR, file), 'utf8');
        expect(source).not.toMatch(/\sstyle=\{/);
    });
});
