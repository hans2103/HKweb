// scripts/generate-hero-images.mjs
//
// Generates the responsive hero variants (AVIF, WebP, JPEG) from the original
// photo into public/images/hero/, plus the 1200×630 share image (og:image) in
// public/images/og/. Run after replacing the source photo:
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
const WIDTHS = [640, 750, 828, 1080, 1200, 1440, 1600, 1920, 2048];
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

// Share image for og:image / twitter:image. Social platforms expect 1.91:1;
// 'attention' crops around the face instead of the geometric centre.
const OG_FILE = 'public/images/og/hans-2020-1200x630.jpg';
await mkdir('public/images/og', { recursive: true });
const { size } = await sharp(SOURCE)
    .resize({ width: 1200, height: 630, fit: 'cover', position: sharp.strategy.attention })
    .jpeg({ quality: 82, mozjpeg: true, progressive: true })
    .toFile(OG_FILE);
console.log(`${OG_FILE.padEnd(40)} ${(size / 1024).toFixed(1).padStart(7)} KiB`);
