// scripts/generate-images.mjs
//
// Generates every responsive image variant the site serves (AVIF, WebP, JPEG):
//
//   - project screenshots: images/werk/<slug>.jpg  → public/images/werk/<slug>-<w>.<ext>
//   - avatar:              public/images/Hans-2020.jpg → public/images/avatar/hans-2020-<w>.<ext>
//   - share image:         public/images/Hans-2020.jpg → public/images/og/hans-2020-1200x630.jpg
//
// Run after adding or replacing a source image:
//
//   npm run images
//
// Widths must stay in sync with src/lib/images.ts. A replaced screenshot keeps
// its file name; /images/* is cached for a week (vercel.json), not immutable.

import { mkdir, readdir } from 'node:fs/promises';
import { basename } from 'node:path';

import sharp from 'sharp';

const PHOTO = 'public/images/Hans-2020.jpg';

const FORMATS = {
    avif: (img) => img.avif({ quality: 60, effort: 9 }),
    webp: (img) => img.webp({ quality: 82, effort: 6 }),
    jpg: (img) => img.jpeg({ quality: 84, mozjpeg: true, progressive: true })
};

const log = (file, size) =>
    console.log(`${file.padEnd(48)} ${(size / 1024).toFixed(1).padStart(7)} KiB`);

async function variants(source, outDir, name, widths, resize) {
    await mkdir(outDir, { recursive: true });
    for (const width of widths) {
        for (const [ext, encode] of Object.entries(FORMATS)) {
            const file = `${outDir}/${name}-${width}.${ext}`;
            const { size } = await encode(sharp(source).resize(resize(width))).toFile(file);
            log(file, size);
        }
    }
}

// Screenshots are 16:10 crops of each site's homepage; shown at most ~600px wide.
for (const file of (await readdir('images/werk')).filter((f) => f.endsWith('.jpg'))) {
    await variants(
        `images/werk/${file}`,
        'public/images/werk',
        basename(file, '.jpg'),
        [480, 960],
        (width) => ({
            width,
            height: Math.round((width * 10) / 16),
            fit: 'cover',
            position: 'top'
        })
    );
}

// Avatar: square crop around the face, shown at 64 CSS px (2x and 3x).
await variants(PHOTO, 'public/images/avatar', 'hans-2020', [128, 192], (width) => ({
    width,
    height: width,
    fit: 'cover',
    position: sharp.strategy.attention
}));

// Share image for og:image / twitter:image (1.91:1).
const OG_FILE = 'public/images/og/hans-2020-1200x630.jpg';
await mkdir('public/images/og', { recursive: true });
const { size } = await sharp(PHOTO)
    .resize({ width: 1200, height: 630, fit: 'cover', position: sharp.strategy.attention })
    .jpeg({ quality: 82, mozjpeg: true, progressive: true })
    .toFile(OG_FILE);
log(OG_FILE, size);
