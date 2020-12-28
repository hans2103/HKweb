// components/meta.js

import Head from 'next/head';
import { HOME_OG_IMAGE_URL, SITE_URL, SITE_DESCRIPTION, SITE_TITLE } from '../../lib/constants';

export default function Meta() {
    return (
        <Head>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
            <link rel="manifest" href="/favicon/site.webmanifest" />
            <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="msapplication-TileColor" content="#5bbad5" />
            <meta name="theme-color" content="#5bbad5" />
            <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
            <meta key="description" name="description" content={SITE_DESCRIPTION} />
            <meta key="og:image" property="og:image" content={HOME_OG_IMAGE_URL} />
            <link key="canonical" rel="canonical" href={SITE_URL} />
            <meta key="og:url" property="og:url" content={SITE_URL} />
            <meta key="og:title" property="og:title" content={SITE_TITLE} />
            <meta key="og:description" property="og:description" content={SITE_DESCRIPTION} />
            <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
            <meta key="twitter:title" name="twitter:title" content={SITE_TITLE} />
            <meta key="twitter:creator" name="twitter:creator" content="@hans2103" />
            <meta key="twitter:description" name="twitter:description" content={SITE_DESCRIPTION} />
            <meta key="twitter:image" name="twitter:image" content={HOME_OG_IMAGE_URL} />
        </Head>
    );
}
