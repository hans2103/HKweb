// robots.txt, sitemap.xml and llms.txt: what search engines and AI assistants read.

import { describe, expect, it } from 'vitest';

import { AI_SEARCH_BOTS, AI_TRAINING_BOTS } from '../pages/robots.txt';
import { htmlPages, readDist } from './dist';

const indexable = htmlPages()
    .filter(([, html]) => !html.includes('content="noindex"'))
    .map(([, html]) => html.match(/rel="canonical" href="([^"]+)"/)?.[1]);

describe('sitemap.xml', () => {
    const sitemap = readDist('sitemap.xml');

    it('lists every indexable page, and only those', () => {
        const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
        expect(locs.sort()).toEqual(indexable.sort());
    });

    it('emits only <loc>', () => {
        expect(sitemap).not.toMatch(/<(lastmod|changefreq|priority)>/);
    });
});

describe('robots.txt', () => {
    const robots = readDist('robots.txt');

    it.each([...AI_SEARCH_BOTS, ...AI_TRAINING_BOTS])('names %s', (bot) => {
        expect(robots).toContain(`User-agent: ${bot}\nAllow: /`);
    });

    it('points to the sitemap and has no Host: line', () => {
        expect(robots).toContain('Sitemap: https://hkweb.nl/sitemap.xml');
        expect(robots).not.toMatch(/^Host:/m);
    });
});

describe('llms.txt', () => {
    const llms = readDist('llms.txt');

    it('starts with an H1 and a blockquote summary', () => {
        expect(llms).toMatch(/^# .+\n\n> .+/);
    });

    it.each(indexable)('links %s', (url) => {
        expect(llms).toContain(`(${url})`);
    });
});
