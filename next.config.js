module.exports = {
    reactStrictMode: true,
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value:
                            'default-src \'self\'; style-src \'unsafe-inline\'; font-src \'self\' data:; img-src \'self\' ik.imagekit.io; script-src \'self\''
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
                        value: 'camera=(); battery=(self); geolocation=(); microphone=()'
                    }
                ]
            }
        ];
    }
};
