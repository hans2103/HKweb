// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://hkweb.nl',
    // `about.html` instead of `about/index.html`; Vercel serves it at /about
    // (cleanUrls + trailingSlash: false in vercel.json), matching the old URLs.
    trailingSlash: 'never',
    build: {
        format: 'file',
        // Never inline <style>: the CSP in vercel.json allows `style-src 'self'` only.
        inlineStylesheets: 'never'
    },
    // Plain links, no client router: the site ships zero JavaScript. Page
    // transitions come from CSS `@view-transition` instead.
    prefetch: false,
    devToolbar: { enabled: false },
    vite: {
        build: {
            // Browsers with light-dark(), nesting and :has(). Lower targets make
            // Lightning CSS rewrite light-dark() into a much larger fallback.
            cssTarget: ['chrome123', 'edge123', 'firefox120', 'safari17.5']
        }
    }
});
