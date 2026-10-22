// Helpers for tests that read the built site in dist/.

import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';

export const DIST = join(import.meta.dirname, '../../dist');

if (!existsSync(DIST)) {
    throw new Error('dist/ is missing: run `npm run build` (or `npm test`, which builds first).');
}

const walk = (dir: string): string[] =>
    readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
        entry.isDirectory() ? walk(join(dir, entry.name)) : [join(dir, entry.name)]
    );

/** Every generated HTML page, as [path relative to dist, contents]. */
export const htmlPages = (): [string, string][] =>
    walk(DIST)
        .filter((file) => file.endsWith('.html') && !file.includes('google'))
        .map((file) => [relative(DIST, file), readFileSync(file, 'utf8')]);

export const readDist = (path: string) => readFileSync(join(DIST, path), 'utf8');
