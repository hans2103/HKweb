import { describe, expect, it } from 'vitest';

import { pagePath } from './url';

describe('pagePath', () => {
    it.each([
        ['/', '/'],
        ['/index.html', '/'],
        ['/index', '/'],
        ['/algemene-voorwaarden.html', '/algemene-voorwaarden'],
        ['/algemene-voorwaarden/', '/algemene-voorwaarden'],
        ['/werk/oeteldonk-org.html', '/werk/oeteldonk-org']
    ])('%s → %s', (pathname, expected) => {
        expect(pagePath(new URL(pathname, 'https://hkweb.nl'))).toBe(expected);
    });
});
