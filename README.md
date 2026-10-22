# hkweb.nl

Personal site of Hans Kuijpers / HKweb, live at <https://hkweb.nl>.

Astro 7 + plain modern CSS + TypeScript, deployed on Vercel as static files. The site ships
**no client-side JavaScript** and **no web fonts**: every page is static HTML + one small CSS file,
in light and dark mode.

## Getting started

```bash
nvm use        # Node 24 + npm 11
npm ci
npm run dev    # http://localhost:4321
```

| Command                           | What it does                                                                       |
| --------------------------------- | ---------------------------------------------------------------------------------- |
| `npm run dev`                     | Dev server                                                                         |
| `npm run build`                   | `astro check` (types) + static build into `dist/`                                  |
| `npm run preview`                 | Serve `dist/` locally                                                              |
| `npm test`                        | Builds, then checks the built pages (zero JS, CSP, a11y, SEO) and colour contrast |
| `npm run lint` / `npm run format` | ESLint (with `--fix`) / Prettier                                                   |
| `npm run images`                  | Regenerate the AVIF/WebP/JPEG variants (screenshots, avatar, share image)          |

## Adding a project

1. Save a 16:10 screenshot of the site's homepage as `images/werk/<slug>.jpg` and run
   `npm run images`.
2. Add `src/content/werk/<slug>.md` with the frontmatter from `src/content.config.ts`.
3. For a case page, set `case: true` and write the case in the Markdown body; it is published at
   `/werk/<slug>` and listed in the sitemap and `llms.txt` automatically.

## Yearly maintenance

- `public/.well-known/security.txt`: bump `Expires` before it lapses (a scheduled reminder opens a
  PR in September 2027).

More architecture notes (CSS, CSP, SEO, a11y conventions) live in [`CLAUDE.md`](CLAUDE.md).
