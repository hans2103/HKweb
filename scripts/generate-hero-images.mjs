// scripts/generate-hero-images.mjs
//
// Generates the responsive hero variants (AVIF, WebP, JPEG) from the original
// photo into public/images/hero/. Run after replacing the source photo:
//
//   node scripts/generate-hero-images.mjs
//
// Widths and file naming must stay in sync with src/layout/hero.tsx. The files
// are served with `immutable` caching (next.config.js), so a new photo needs a
// new file name prefix, not an overwrite of hans-2020-*.

import { mkdir } from 'node:fs/promises';

import sharp from 'sharp';

const SOURCE = 'public/images/Hans-2020.jpg';
const OUT_DIR = 'public/images/hero';
const WIDTHS = [640, 750, 828, 1080, 1200, 1920, 2048];
// Qualities tuned so SSIM against the original matches what ImageKit served
// (AVIF ends up ~28% smaller than ImageKit's WebP at the same quality).
const FORMATS = {
    avif: (img) => img.avif({ quality: 60, effort: 9 }),
    webp: (img) => img.webp({ quality: 82, effort: 6 }),
    jpg: (img) => img.jpeg({ quality: 86, mozjpeg: true, progressive: true })
};

await mkdir(OUT_DIR, { recursive: true });

for (const width of WIDTHS) {
    for (const [ext, encode] of Object.entries(FORMATS)) {
        const file = `${OUT_DIR}/hans-2020-${width}.${ext}`;
        const { size } = await encode(sharp(SOURCE).resize({ width })).toFile(file);
        console.log(`${file.padEnd(40)} ${(size / 1024).toFixed(1).padStart(7)} KiB`);
    }
}
