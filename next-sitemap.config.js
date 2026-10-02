// AI crawlers that fetch pages to answer or cite in search results.
// Allowing them keeps hkweb.nl quotable in ChatGPT, Claude, Perplexity etc.
const AI_SEARCH_BOTS = [
    'OAI-SearchBot',
    'ChatGPT-User',
    'Claude-SearchBot',
    'Claude-User',
    'PerplexityBot'
];

// AI crawlers that collect training data. Currently allowed (same as `*`);
// switch to `disallow: '/'` to opt out of model training.
const AI_TRAINING_BOTS = ['GPTBot', 'ClaudeBot', 'Google-Extended', 'Applebot-Extended', 'CCBot'];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://hkweb.nl',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    // Google ignores changefreq/priority, and a lastmod that changes on every
    // build teaches it to ignore lastmod too: emit only <loc>.
    transform: async (_, loc) => ({ loc }),
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
            ...[...AI_SEARCH_BOTS, ...AI_TRAINING_BOTS].map((userAgent) => ({
                userAgent,
                allow: '/'
            }))
        ],
        // `Host:` is a Yandex-only directive that next-sitemap always appends.
        transformRobotsTxt: async (_, robotsTxt) => robotsTxt.replace(/# Host\nHost: .*\n\n?/, '')
    }
};
