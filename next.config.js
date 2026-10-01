const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
    reactStrictMode: true,
    images: {
        // Next's default tops out at 3840w (~500 KB for the hero on retina desktops);
        // 2048w is plenty for a full-bleed photo and roughly a third of the bytes.
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048]
    },
    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js'
            }
        }
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: [
                            "default-src 'self'",
                            // 'unsafe-inline' required for inline `style=""` attrs that
                            // next/image emits in `fill` mode. All component CSS is in
                            // static files via Panda — no styled-components SSR blob.
                            "style-src 'self' 'unsafe-inline'",
                            "font-src 'self'",
                            "img-src 'self' ik.imagekit.io",
                            "script-src 'self'",
                            "connect-src 'self' vitals.vercel-insights.com",
                            "base-uri 'self'",
                            "form-action 'self'",
                            "frame-ancestors 'none'",
                            "object-src 'none'"
                        ].join('; ')
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains'
                    },
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
