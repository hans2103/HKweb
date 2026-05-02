# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Next.js dev server (Turbopack) on http://localhost:3000
- `npm run build` — production build (also generates sitemap via `postbuild`)
- `npm run build:analyze` — production build with `@next/bundle-analyzer` (`ANALYZE=true`)
- `npm start` — production server (`next start`)
- `npm test` / `npm run test:watch` / `npm run test:coverage` — Vitest + RTL
- `npm run lint` — ESLint flat-config with `--fix`
- `npm run format` — Prettier

Node **25.x** is required (`engines.node`, `.nvmrc`). Husky 9 (`.husky/pre-commit` runs `lint-staged`; `.husky/commit-msg` runs commitlint with a minimal config — see `commitlint.config.js`); `npm run prepare` reinstalls hooks.

CI: `.github/workflows/ci.yml` runs install + lint + test + build on PRs and pushes to `master`. Dependabot (`.github/dependabot.yml`) opens weekly grouped npm PRs (eslint, next, styled, react groups) plus monthly Actions bumps.

## Architecture

Small personal site for Hans Kuijpers (hkweb.nl), built on **Next.js 16 (pages router, Turbopack) + React 19 + styled-components 6 + styled-system 5 + TypeScript** (strict). Site language is Dutch (`<Html lang="nl">`).

### Design system (the central pattern)

Composable styled-system primitives in `src/components/` (`box`, `flex`, `grid`, `stack`, `heading`, `text`, `link`, `button`, `image`, `input`, `itemlist`, `hidden`). `Box` is the root primitive — `BoxProps` extends `SpaceProps & ColorProps & BorderProps & LayoutProps & FlexboxProps & GridProps & PositionProps & GapProps`. Most layout is done by passing styled-system props directly (`p`, `mt`, `flexDirection`, `gap`, etc.).

`gap`/`rowGap`/`columnGap` are added via a custom `system()` definition in `box.tsx` because styled-system v5's `flexbox` helper only includes legacy `gridGap`. `Stack` adds a separate `gap` prop that produces lobotomized-owl margins between children (different from CSS `gap`).

Theme tokens in `src/theme.ts`. `src/styled.d.ts` augments `styled-components` `DefaultTheme` so `theme.colors.primary`, `theme.space.m`, etc. are typed.

### TypeScript notes

- `tsconfig.json` is strict. Keep it that way.
- `@styled-system/css` has no upstream types — declared loosely in `src/styled-system-css.d.ts`.
- SVG-as-component imports are typed via `src/svg.d.ts`.
- When wrapping a styled component in another styled call (e.g. `styled(Box)(...)`, `styled(Stack)(...)`), pass the props type explicitly: `styled(Box)<BoxProps>(...)`. Without it, polymorphic `as` props produce "union type too complex" errors.
- `next/link`'s legacy `as` prop conflicts with styled-components' polymorphic `as`. In `src/components/link.tsx`, `LinkComponentProps = Omit<NextLinkProps, 'as'> & {...}`.

### styled-components / SWC

- No Babel — `next.config.js` has `compiler.styledComponents: true` (SWC handles displayNames + SSR metadata).
- `pages/_document.tsx` does manual `ServerStyleSheet` collection — required for the Pages Router to inject styles into the SSR HTML.
- Components default values use `styled.foo.attrs<Props>(props => ({ variant: props.variant ?? 'x' }))<Props>(...)`. React 19 removed `defaultProps` for function components.

### Pages and layout

- `pages/_document.tsx` — styled-components SSR collection.
- `pages/_app.tsx` — wires `GlobalStyle`, theme `Provider`, applies `--font-switzera` CSS variable.
- `src/layout/layout.tsx` — `Meta` + skip-to-content link + `Header` + `<main id="main">` + `Footer`.

### Fonts

- `src/fonts/SwitzeraADFRegular.woff` is the actual font binary; `src/fonts/index.ts` exposes it via `next/font/local` with `display: swap`.
- `theme.ts` references the font via `var(--font-switzera)`.

### SVG and images

- SVG-as-component is configured via Turbopack rule (`@svgr/webpack` loader in `next.config.js > turbopack.rules`). Only `src/layout/header.tsx` imports an SVG file directly (`logo--hkweb.svg`); other "icons" are SVG path strings in `lib/icons.ts` rendered by `src/components/icon.tsx`.
- `src/components/image.tsx` wraps `next/image` with a custom ImageKit `loader`. Use the modern API: `fill`, `sizes`, `style={{ objectFit: 'cover' }}`, `priority`.

### Security headers / CSP

`next.config.js` sets these headers on every route:

- `script-src 'self'` — no inline scripts, no third-party JS.
- `style-src 'self' 'unsafe-inline'` — `'unsafe-inline'` is structurally required by styled-components SSR for static pages. Cannot be removed via nonce (nonces need per-request context; this site is fully static). Removal would require switching to build-time CSS extraction (CSS Modules, Tailwind, vanilla-extract).
- `img-src 'self' ik.imagekit.io`
- `font-src 'self'` — fonts come from `/_next/static/media/`.
- `connect-src 'self' vitals.vercel-insights.com`
- `base-uri 'self'`, `form-action 'self'`, `frame-ancestors 'none'`, `object-src 'none'`.

### SEO

- `next-sitemap` runs in `postbuild` and writes `public/sitemap*.xml` + `public/robots.txt`. Both are gitignored.
- `src/layout/meta.tsx` provides static og:/twitter: meta and canonical URL.

## a11y

- All pages have an explicit `<h1>`.
- `src/layout/layout.tsx` has a Dutch skip-to-content link visually hidden until focused.
- `src/components/link.tsx` uses `:focus-visible` (not `:focus`) — outline only for keyboard users.

## Tests

- Vitest + jsdom + Testing Library (`vitest.config.ts`, `vitest.setup.ts`).
- Tests live in `src/**/__tests__/*.test.tsx`.
- Components that depend on the styled-components theme need a `<ThemeProvider theme={theme}>` wrapper — see `heading.test.tsx`.

## Conventions

- Prettier: 4-space indent, single quotes, semicolons, `printWidth: 100`, no trailing commas.
- ESLint flat config (`eslint.config.mjs`) extends `eslint-config-next/core-web-vitals` + `simple-import-sort`.
- commitlint enforces `header-min-length` (5) and `header-max-length` (100) only — gitmoji-style commits (`:sparkles: foo`) are allowed.
