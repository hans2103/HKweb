const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
    reactStrictMode: true,
    compiler: {
        styledComponents: true
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
