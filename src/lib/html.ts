/** Strips the single wrapping <div> of the legal texts in src/content/legal/. */
export const unwrap = (html: string) =>
    html
        .trim()
        .replace(/^<div>/, '')
        .replace(/<\/div>$/, '');
