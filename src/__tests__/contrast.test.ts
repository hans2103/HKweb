// Every text/background pair in src/styles/tokens.css must pass WCAG AA
// (4.5:1 for text), in light and in dark mode.

import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

const css = readFileSync(join(import.meta.dirname, '../styles/tokens.css'), 'utf8');

const tokens = Object.fromEntries(
    [...css.matchAll(/--(color-[\w-]+):\s*light-dark\((#[0-9a-f]{6}),\s*(#[0-9a-f]{6})\)/gi)].map(
        ([, name, light, dark]) => [name, { light, dark }]
    )
);

const luminance = (hex: string) => {
    const [r, g, b] = [1, 3, 5].map((i) => {
        const c = parseInt(hex.slice(i, i + 2), 16) / 255;
        return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const ratio = (a: string, b: string) => {
    const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
    return (hi + 0.05) / (lo + 0.05);
};

// [text, background]
const PAIRS = [
    ...[
        'color-text',
        'color-heading',
        'color-text-muted',
        'color-text-subtle',
        'color-accent'
    ].flatMap((text) => [
        [text, 'color-bg'],
        [text, 'color-surface']
    ]),
    ['color-accent-hover', 'color-bg'],
    ['color-accent-hover', 'color-surface'],
    ['color-inverse-text', 'color-inverse-bg'],
    ['color-inverse-muted', 'color-inverse-bg'],
    ['color-inverse-subtle', 'color-inverse-bg'],
    ['color-inverse-accent', 'color-inverse-bg'],
    ['color-inverse-accent-hover', 'color-inverse-bg'],
    ['color-button-text', 'color-button'],
    ['color-cta-text', 'color-cta']
];

describe('colour contrast', () => {
    it('reads the colour tokens', () => {
        expect(Object.keys(tokens).length).toBeGreaterThan(10);
    });

    describe.each(['light', 'dark'] as const)('%s mode', (scheme) => {
        it.each(PAIRS)('%s on %s is at least 4.5:1', (text, background) => {
            expect(tokens[text], text).toBeDefined();
            expect(tokens[background], background).toBeDefined();
            expect(ratio(tokens[text][scheme], tokens[background][scheme])).toBeGreaterThanOrEqual(
                4.5
            );
        });
    });
});
