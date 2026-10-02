const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
    reactStrictMode: true,
    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js'
            }
        }
    },
    // Browsers and iOS request these at the root regardless of <link> tags.
    async rewrites() {
        return [
            { source: '/favicon.ico', destination: '/favicon/favicon.ico' },
            { source: '/apple-touch-icon.png', destination: '/favicon/apple-touch-icon.png' },
            {
                source: '/apple-touch-icon-precomposed.png',
                destination: '/favicon/apple-touch-icon.png'
            }
        ];
    },
    async headers() {
        return [
            {
                // Hero variants never change in place: a new photo gets a new
                // file name (see scripts/generate-hero-images.mjs).
                source: '/images/hero/:file*',
                headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }]
            },
            // Favicons, manifest and share image rarely change; revalidate weekly
            // instead of on every visit.
            ...[
                '/favicon/:file*',
                '/favicon.ico',
                '/apple-touch-icon.png',
                '/images/og/:file*'
            ].map((source) => ({
                source,
                headers: [{ key: 'Cache-Control', value: 'public, max-age=604800' }]
            })),
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: [
                            "default-src 'self'",
                            // No inline styles anywhere: Panda emits static CSS files and
                            // the hero uses a plain <picture> instead of next/image.
                            "style-src 'self'",
                            "font-src 'self'",
                            "img-src 'self'",
                            "script-src 'self'",
                            "connect-src 'self'",
                            "base-uri 'self'",
                            "form-action 'self'",
                            "frame-ancestors 'none'",
                            "object-src 'none'"
                        ].join('; ')
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload'
                    },
                    { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
                    { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin'
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()'
                    }
                ]
            }
        ];
    }
});
