// Guards what every built page must keep: zero client-side JavaScript, nothing
// the CSP would block, and the basics for accessibility and SEO.

import { describe, expect, it } from 'vitest';

import { htmlPages } from './dist';

const pages = htmlPages();

describe('built pages', () => {
    it('finds pages to check', () => {
        expect(pages.length).toBeGreaterThanOrEqual(5);
    });

    describe.each(pages)('%s', (_file, html) => {
        it('ships no JavaScript (JSON-LD data blocks only)', () => {
            const scripts = html.match(/<script\b[^>]*>/g) ?? [];
            expect(scripts.filter((tag) => !tag.includes('application/ld+json'))).toEqual([]);
        });

        it('has no inline styles or event handlers (CSP: self only)', () => {
            expect(html).not.toMatch(/\sstyle=/);
            expect(html).not.toMatch(/<style\b/);
            expect(html).not.toMatch(/\son[a-z]+=/);
        });

        it('loads nothing from other hosts', () => {
            const sources = html.match(/<(?:link|img|source|script)\b[^>]*>/g) ?? [];
            const external = sources.filter(
                (tag) =>
                    /\s(?:src|srcset|href)="https?:/.test(tag) &&
                    !/rel="(?:canonical|alternate)"/.test(tag) &&
                    !/property="og:/.test(tag)
            );
            expect(external).toEqual([]);
        });

        it('is Dutch, with a title, a description and exactly one h1', () => {
            expect(html).toMatch(/<html lang="nl"/);
            expect(html).toMatch(/<title>[^<]{10,70}<\/title>/);
            expect(html).toMatch(/<meta name="description" content="[^"]{50,}"/);
            expect(html.match(/<h1\b/g)).toHaveLength(1);
        });

        it('gives every image alt text and dimensions', () => {
            for (const img of html.match(/<img\b[^>]*>/g) ?? []) {
                // Astro writes an empty alt="" (decorative image) as a bare `alt`.
                expect(img).toMatch(/\salt(=|[\s>])/);
                expect(img).toMatch(/\swidth="\d+"/);
                expect(img).toMatch(/\sheight="\d+"/);
            }
        });

        it('has a skip link to the main content', () => {
            expect(html).toMatch(/<a class="skip-link" href="#main">/);
            expect(html).toMatch(/<main id="main"/);
        });

        it('keeps heading levels sequential', () => {
            const levels = [...html.matchAll(/<h([1-6])\b/g)].map((match) => Number(match[1]));
            levels.forEach((level, index) => {
                if (index > 0) expect(level - levels[index - 1]).toBeLessThanOrEqual(1);
            });
        });

        it('has a canonical URL without .html, unless noindex', () => {
            if (html.includes('name="robots" content="noindex"')) {
                expect(html).not.toMatch(/rel="canonical"/);
            } else {
                expect(html).toMatch(/<link rel="canonical" href="https:\/\/hkweb\.nl\/[^"]*"/);
                expect(html).not.toMatch(/rel="canonical" href="[^"]*(\.html|\/index)"/);
            }
        });

        it('has valid JSON-LD', () => {
            for (const [, json] of html.matchAll(
                /<script type="application\/ld\+json">(.*?)<\/script>/gs
            )) {
                expect(() => JSON.parse(json)).not.toThrow();
            }
        });
    });
});
