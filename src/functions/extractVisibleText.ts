import { ReactNode } from 'react';

/**
 * Zet een ReactNode of HTML-string om naar platte zichtbare tekst.
 */
export function extractVisibleText(input: ReactNode | string): string {
    // 1. Als het een string is, check of het HTML bevat
    if (typeof input === 'string') {
        const trimmed = input.trim();
        const looksLikeHtml = /<\/?[a-z][\s\S]*>/i.test(trimmed);

        if (looksLikeHtml) {
            // Probeer HTML te parsen in de browser
            if (typeof window !== 'undefined') {
                const div = document.createElement('div');
                div.innerHTML = trimmed;
                return div.textContent || '';
            }

            // Fallback voor SSR
            return trimmed.replace(/<[^>]+>/g, '');
        }

        return trimmed;
    }

    // 2. Als het een ReactNode is (JSX/fragment/array)
    if (typeof input === 'number') {
        return input.toString();
    }

    if (Array.isArray(input)) {
        return input.map(extractVisibleText).join('');
    }

    if (typeof input === 'object' && input !== null && 'props' in input) {
        return extractVisibleText((input as any).props.children);
    }

    return '';
}
