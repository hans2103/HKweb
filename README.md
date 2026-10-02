# hkweb.nl

Personal site of Hans Kuijpers / HKweb, live at <https://hkweb.nl>.

Next.js 16 (Pages Router) + React 19 + Panda CSS + TypeScript, deployed on Vercel. The site ships
**no client-side JavaScript**: every page is static HTML + one small CSS file.

## Getting started

```bash
nvm use        # Node 24 + npm 11 (npm 10 crashes on this lockfile)
npm ci
npm run dev    # http://localhost:3000
```

| Command                           | What it does                                                                                           |
| --------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `npm run dev`                     | Dev server (Turbopack). Note: dev mode still hydrates; test "no JS" behaviour with a production build. |
| `npm run build && npm start`      | Production build (also writes sitemap + robots.txt) and server                                         |
| `npm test`                        | Vitest — includes a guard that every page ships zero JS and uses no inline styles                      |
| `npm run lint` / `npm run format` | ESLint (with `--fix`) / Prettier                                                                       |

## Adding a page

1. Create `pages/<slug>.tsx` and wrap it in `<Layout title="… | HKweb" description="…">`.
2. Export `export const config: PageConfig = { unstable_runtimeJS: false };`.
3. Style with Panda style props / `css()` — never a `style={…}` prop (CSP is `style-src 'self'`).

## Hero and share images

The hero photo is served as static AVIF/WebP/JPEG variants from `public/images/hero/`, and the
1200×630 share image from `public/images/og/`. Both are generated from
`public/images/Hans-2020.jpg`:

```bash
node scripts/generate-hero-images.mjs
```

Hero files are cached as `immutable`, so a new photo needs a new file name prefix (update the
script and `src/layout/hero.tsx`).

## Yearly maintenance

- `public/.well-known/security.txt` — bump `Expires` before it lapses (a scheduled reminder opens a
  PR in September 2027).

More architecture notes (styling, CSP, SEO, a11y conventions) live in [`CLAUDE.md`](CLAUDE.md).
