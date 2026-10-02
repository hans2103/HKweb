// src/__tests__/llms-txt.test.ts
//
// Keeps public/llms.txt in sync with the site: every indexable page must be
// linked, so AI assistants get the full (small) map of hkweb.nl.

import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

import { SITE_URL } from '../../lib/constants';

const PAGES_DIR = join(__dirname, '../../pages');
const llmsTxt = readFileSync(join(__dirname, '../../public/llms.txt'), 'utf8');

const routes = readdirSync(PAGES_DIR)
    .filter((file) => /\.tsx?$/.test(file) && !file.startsWith('_') && !file.startsWith('404'))
    .map((file) => file.replace(/\.tsx?$/, ''))
    .map((slug) => (slug === 'index' ? '/' : `/${slug}`));

describe('public/llms.txt', () => {
    it('starts with an H1 and a blockquote summary', () => {
        expect(llmsTxt).toMatch(/^# .+\n\n> .+/);
    });

    it.each(routes)('links %s', (route) => {
        expect(llmsTxt).toContain(`(${SITE_URL}${route})`);
    });
});
