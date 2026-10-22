import type { APIRoute } from 'astro';

import { SITE_URL } from '../data/site';

// AI crawlers that fetch pages to answer or cite in search results. Allowing
// them keeps hkweb.nl quotable in ChatGPT, Claude, Perplexity etc.
export const AI_SEARCH_BOTS = [
    'OAI-SearchBot',
    'ChatGPT-User',
    'Claude-SearchBot',
    'Claude-User',
    'PerplexityBot'
];

// AI crawlers that collect training data. Currently allowed (same as `*`);
// give them their own `Disallow: /` group to opt out of model training.
export const AI_TRAINING_BOTS = [
    'GPTBot',
    'ClaudeBot',
    'Google-Extended',
    'Applebot-Extended',
    'CCBot'
];

export const GET: APIRoute = () => {
    const groups = ['*', ...AI_SEARCH_BOTS, ...AI_TRAINING_BOTS]
        .map((agent) => `User-agent: ${agent}\nAllow: /`)
        .join('\n\n');

    return new Response(`${groups}\n\nSitemap: ${SITE_URL}/sitemap.xml\n`, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
};
