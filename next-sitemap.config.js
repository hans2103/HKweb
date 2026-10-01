/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://hkweb.nl',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    robotsTxtOptions: {
        policies: [{ userAgent: '*', allow: '/' }]
    }
};
