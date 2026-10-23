# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev`: Astro dev server on http://localhost:4321
- `npm run build`: `astro check` (TypeScript + `.astro` diagnostics) then `astro build` into `dist/`
- `npm run preview`: serve `dist/` (Astro 7 starts it in the background: `astro preview stop`)
- `npm test`: `pretest` builds, then Vitest checks the built `dist/`; `npm run test:watch` / `test:coverage`
- `npm run lint`: ESLint flat config with `--fix`
- `npm run format`: Prettier (with `prettier-plugin-astro`)
- `npm run images`: regenerate image variants (`scripts/generate-images.mjs`, sharp)

Node **24.x** (`engines.node`, `.nvmrc`) with npm 11; run `nvm use` first. `eslint-plugin-astro` needs Node ≥ 24.16, so keep the local 24 current (`nvm install 24`). Husky 9 (`.husky/pre-commit` runs `lint-staged`: `eslint --fix` on staged JS/TS/Astro; `.husky/commit-msg` runs commitlint). `package.json` is `"type": "module"`, so config files are ESM.

CI: `.github/workflows/ci.yml` (job `build`) runs install, lint, build, `npx vitest run`, then Lighthouse CI (`@lhci/cli autorun`, config in `lighthouserc.json`: the home, case and legal page must score 100 in all four categories; 3 runs per page and the best counts, because a single run on a cold, shared CI runner can dip to ~90 on performance) on PRs and pushes to `main`. Vercel builds a preview per PR and deploys `main` to production; Vercel runs `npm run build` but not the tests. Lighthouse on a Vercel preview URL scores SEO ~69: previews send `X-Robots-Tag: noindex`, production doesn't.

The default branch is `main` (renamed from `master` in October 2026; GitHub redirects old links). It is protected by a repository ruleset on `~DEFAULT_BRANCH`: changes go through a PR (no approvals required), the `build` check must pass, force-push and branch deletion are blocked. Work on a branch and open a PR.

Vercel used Checkly for Deployment Checks; when Checkly fails (e.g. out of credits) Vercel builds production but doesn't promote it to hkweb.nl. The Lighthouse step in CI replaces it; remove Checkly under Vercel › Settings › Deployment Checks. A stuck production build can be promoted by hand in the Vercel dashboard.

Dependabot (`.github/dependabot.yml`) opens weekly npm PRs + monthly Actions bumps. The `astro`, `eslint` and `vitest` families each have a routine group (minor/patch) and a separate `*-major` group. Packages that must move together (exact peer pins, like `vitest` + `@vitest/coverage-v8`) need to share a group. TypeScript majors are ignored: `typescript-eslint` supports TypeScript < 6.1 only; remove the ignore once typescript-eslint/typescript-eslint#10940 is resolved. `@types/node` majors are ignored too: they follow the Node major in `.nvmrc`/`engines.node` (24.x, the newest Vercel offers) and move with it. `eslint-plugin-jsx-a11y` was dropped because it has no ESLint 10 support; accessibility is covered by the tests and Lighthouse.

## Architecture

Personal site of Hans Kuijpers (hkweb.nl): **Astro 7 (static output) + plain CSS + TypeScript (strict)**. Site language is Dutch (`<html lang="nl">`). The design is "richting C" from the HKweb homepage redesign canvas.

- `src/pages/`: `index.astro` (homepage), `werk/[id].astro` (case pages), `algemene-voorwaarden.astro`, `privacy-backups.astro`, `404.astro`, and endpoints `sitemap.xml.ts`, `robots.txt.ts`, `llms.txt.ts`.
- `src/layouts/Base.astro`: `<head>` (meta, Open Graph, JSON-LD), skip link, `Header`, `<main id="main">`, `Footer`.
- `src/components/`: `Header`, `Footer`, `WerkCard`, `Picture` (AVIF/WebP/JPEG `<picture>` for the static variants).
- `src/content/werk/*.md`: one file per project, schema in `src/content.config.ts`. `case: true` creates `/werk/<id>` from the Markdown body; `featured: true` is the large card on the homepage.
- `src/content/legal/*.html`: the legal texts, rendered with `set:html` (copied verbatim from the old Next.js build).
- `src/data/site.ts`: site-wide data (URL, e-mail, address, social profiles, skills, other clients, talks, fixed pages).
- `src/lib/`: `pages.ts` (all indexable pages, feeds sitemap and llms.txt), `url.ts` (`pagePath`: public path without `.html`/`index`), `images.ts`, `html.ts`.

URLs: `build.format: 'file'` writes `werk/x.html`; `vercel.json` (`cleanUrls`, `trailingSlash: false`) serves it at `/werk/x`, matching the old Next.js URLs.

### CSS

Plain CSS in `src/styles/`, imported once in `Base.astro` and bundled into one file (`build.inlineStylesheets: 'never'`, so no `<style>` in the HTML).

- Cascade layers: `reset, tokens, base, layout, components` (declared at the top of `tokens.css`).
- `tokens.css`: colours as `light-dark(<light>, <dark>)` with `color-scheme: light dark`, so dark mode follows the system setting (no toggle: that would need JavaScript). Keep colours six-digit hex: `src/__tests__/contrast.test.ts` parses them and checks every text/background pair against WCAG AA in both schemes.
- Fluid type and spacing (`--step-*`, `--space-section`, `--gutter`) between a 360px and 1440px viewport: `clamp()` fallback, overridden with `progress()` inside `@supports`.
- Fonts: `system-ui` stack, no web fonts.
- Also used: native nesting, container queries (work grid, featured card), `:has()` (card hover/focus), logical properties, `color-mix()`, `text-wrap: balance|pretty`, cross-document view transitions (`@view-transition`, reduced motion respected).
- `astro.config.mjs` sets `vite.build.cssTarget` to browsers with `light-dark()`; lower targets make Lightning CSS rewrite it into a large fallback.
- Never use a `style` attribute (the CSP forbids inline styles); the tests fail on one.

### Zero client-side JavaScript

No framework islands, no `<script>` (except JSON-LD data blocks with `is:inline`), no Astro client router, `prefetch: false`. `src/__tests__/pages.test.ts` fails if a built page contains any other script, a `style` attribute or `<style>` element, an inline event handler, or loads anything from another host.

### Images

- Project screenshots: 16:10 JPEG sources in `images/werk/<slug>.jpg` → `public/images/werk/<slug>-{480,960}.{avif,webp,jpg}`.
- Avatar and share image: from `public/images/Hans-2020.jpg` → `public/images/avatar/` and `public/images/og/hans-2020-1200x630.jpg`.
- All generated by `npm run images`; widths must match `src/lib/images.ts`. Every `<img>` has `width`/`height` (no layout shift).
- The logo is `src/assets/logo-hkweb.svg`, imported as an Astro SVG component (inline `<svg>`, `fill: currentColor`).

### Security headers / CSP

`vercel.json` sets on every route: `Content-Security-Policy` with `default-src`, `script-src`, `style-src`, `img-src`, `font-src`, `connect-src`, `base-uri`, `form-action` all `'self'`, `frame-ancestors 'none'`, `object-src 'none'`; HSTS (2 years, preload), COOP/CORP `same-origin`, `X-Frame-Options: DENY`, `nosniff`, `Referrer-Policy`, `Permissions-Policy`. `/_astro/*` is cached immutable; `/images/*` and `/favicon/*` for a week. Favicon root paths are rewrites to `/favicon/*`.

### SEO and AI

- `Base.astro` props: `title`, `description`, `noindex`, `ogType`, `jsonLd`. Canonical and `og:url` come from `SITE_URL` + `pagePath()`; `noindex` pages get no canonical.
- JSON-LD: homepage `@graph` (`ProfilePage` → `Person` with `workExample` per project, `WebSite`, `ProfessionalService`); case pages a `WebPage` with breadcrumb and the project as `about`.
- `sitemap.xml` emits only `<loc>` for every indexable page. `robots.txt` lists AI search (`AI_SEARCH_BOTS`) and AI training (`AI_TRAINING_BOTS`) crawlers, all allowed; to opt out of training give `AI_TRAINING_BOTS` their own `Disallow: /` group. `llms.txt` is generated from the same data as the pages. A new non-collection page must be added to `PAGES` in `src/data/site.ts`; `src/__tests__/discovery.test.ts` fails otherwise.
- Contact is by e-mail only: no phone number on the site or in JSON-LD (Hans prefers e-mail). The street address is only in JSON-LD.
- `public/.well-known/security.txt` has an `Expires` date (2028-10-01): bump it yearly.

## a11y

- One `<h1>` per page and sequential heading levels (tested).
- Skip link `Naar hoofdinhoud`, visible on focus; `:focus-visible` outline in the accent colour.
- Touch targets ≥ 44px (`--tap`) for nav, footer links and buttons.
- Work cards are fully clickable via the title link's `::after`; card screenshots are decorative (`alt=""`), the case-page image has alt text.
- Contrast: WCAG AA for every token pair in light and dark (tested).

## Tests

Vitest, in `src/**/*.test.ts`. `src/__tests__/` reads the built `dist/` (`dist.ts` helpers): `pages.test.ts` (zero JS, CSP, lang/title/description/h1, image dimensions, skip link, heading order, canonical, JSON-LD), `discovery.test.ts` (sitemap, robots, llms.txt), `contrast.test.ts` (tokens). `src/lib/url.test.ts` is a unit test.

## Conventions

- Prettier: 4-space indent, single quotes, semicolons, `printWidth: 100`, no trailing commas.
- ESLint flat config (`eslint.config.mjs`): `@eslint/js`, `typescript-eslint`, `eslint-plugin-astro`, `simple-import-sort`.
- commitlint enforces only `header-min-length` (5) + `header-max-length` (100), plus a `body-leading-blank` warning; gitmoji-style commits stay valid.
- Copy is Dutch; use U+2011 (non-breaking hyphen) in `’s‑Hertogenbosch` so it doesn't wrap after `’s-`.
