/**
 * Public path of the page being rendered. With build.format 'file' Astro sees
 * /index.html and /werk/x.html; the site serves / and /werk/x (cleanUrls).
 */
export const pagePath = (url: URL) =>
    url.pathname
        .replace(/\.html$/, '')
        .replace(/(^|\/)index$/, '/')
        .replace(/(.)\/$/, '$1') || '/';
