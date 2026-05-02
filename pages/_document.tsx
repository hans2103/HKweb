import { Head, Html, Main, NextScript } from 'next/document';

import { switzera } from '../src/fonts';

const Document = () => (
    <Html lang="nl" data-scroll-behavior="smooth" className={switzera.variable}>
        <Head />
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
);

export default Document;
