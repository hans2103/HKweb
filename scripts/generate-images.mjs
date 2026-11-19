// scripts/generate-images.mjs
//
// Generates every responsive image variant the site serves (AVIF, WebP, JPEG):
//
//   - project screenshots: images/werk/<slug>.jpg  → public/images/werk/<slug>-<w>.<ext>
//   - before/after shots:  images/werk/screens/<name>-<desktop|mobiel>.jpg
//                          → public/images/werk/screens/<name>-<desktop|mobiel>-<w>.<ext>
//   - portrait:            public/images/Hans-2020.jpg → public/images/portret/hans-2020-<w>.<ext>
//   - share image:         public/images/Hans-2020.jpg → public/images/og/hans-2020-1200x630.jpg
//   - favicons:            images/logo/hkweb-icon.svg → public/favicon/*.png + favicon.ico
//
// Run after adding or replacing a source image:
//
//   npm run images
//
// Widths must stay in sync with src/lib/images.ts. A replaced screenshot keeps
// its file name; /images/* is cached for a week (vercel.json), not immutable.

import { mkdir, readdir, writeFile } from 'node:fs/promises';
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

// Before/after screenshots for a case (frontmatter `compare`). Sources are cropped
// beforehand (desktop 16:10, mobile 390:845), so these only scale down.
const SCREEN_WIDTHS = { desktop: [480, 960], mobiel: [240, 480] };
for (const file of (await readdir('images/werk/screens')).filter((f) => f.endsWith('.jpg'))) {
    const name = basename(file, '.jpg');
    const device = name.endsWith('-mobiel') ? 'mobiel' : 'desktop';
    await variants(
        `images/werk/screens/${file}`,
        'public/images/werk/screens',
        name,
        SCREEN_WIDTHS[device],
        (width) => ({ width })
    );
}

// Portrait for the homepage intro: a 4:5 crop of the landscape photo, centred on
// the face (about 55% across), shown at most ~20rem wide.
const PORTRAIT_CROP = { left: 952, top: 0, width: 1792, height: 2240 };
await mkdir('public/images/portret', { recursive: true });
for (const width of [320, 480, 640]) {
    for (const [ext, encode] of Object.entries(FORMATS)) {
        const file = `public/images/portret/hans-2020-${width}.${ext}`;
        const { size } = await encode(sharp(PHOTO).extract(PORTRAIT_CROP).resize({ width })).toFile(
            file
        );
        log(file, size);
    }
}

// Share image for og:image / twitter:image (1.91:1).
const OG_FILE = 'public/images/og/hans-2020-1200x630.jpg';
await mkdir('public/images/og', { recursive: true });
const { size } = await sharp(PHOTO)
    .resize({ width: 1200, height: 630, fit: 'cover', position: sharp.strategy.attention })
    .jpeg({ quality: 82, mozjpeg: true, progressive: true })
    .toFile(OG_FILE);
log(OG_FILE, size);

// Favicons: the blue logo tile with the white signature (images/logo/hkweb-icon.svg;
// the full logo with wordmark and tagline is images/logo/hkweb-logo.svg).
const ICON = 'images/logo/hkweb-icon.svg';
const png = (size) => sharp(ICON, { density: 384 }).resize(size).png().toBuffer();
for (const [name, size] of [
    ['favicon-16x16', 16],
    ['favicon-32x32', 32],
    ['apple-touch-icon', 180],
    ['android-chrome-192x192', 192],
    ['android-chrome-512x512', 512]
]) {
    const file = `public/favicon/${name}.png`;
    const buffer = await png(size);
    await writeFile(file, buffer);
    log(file, buffer.length);
}

// favicon.ico with PNG-encoded 16, 32 and 48 px images.
const icoSizes = [16, 32, 48];
const icoImages = await Promise.all(icoSizes.map(png));
const header = Buffer.alloc(6 + 16 * icoSizes.length);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(icoSizes.length, 4);
let offset = header.length;
icoSizes.forEach((size, i) => {
    const entry = 6 + 16 * i;
    header.writeUInt8(size, entry);
    header.writeUInt8(size, entry + 1);
    header.writeUInt16LE(1, entry + 4);
    header.writeUInt16LE(32, entry + 6);
    header.writeUInt32LE(icoImages[i].length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += icoImages[i].length;
});
const ico = Buffer.concat([header, ...icoImages]);
await writeFile('public/favicon/favicon.ico', ico);
log('public/favicon/favicon.ico', ico.length);
