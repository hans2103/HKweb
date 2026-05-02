/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.hkweb.nl',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    robotsTxtOptions: {
        policies: [{ userAgent: '*', allow: '/' }]
    }
};
