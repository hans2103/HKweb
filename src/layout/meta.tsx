// src/layout/meta.tsx

import Head from 'next/head';
import { useRouter } from 'next/router';

import {
    OG_IMAGE,
    SITE_DESCRIPTION,
    SITE_NAME,
    SITE_SKILLS,
    SITE_SUBTITLE,
    SITE_TITLE,
    SITE_URL
} from '../../lib/constants';

export type MetaProps = {
    /** Full document title; defaults to the homepage title. */
    title?: string;
    description?: string;
    noindex?: boolean;
};

const Meta = ({
    title = `${SITE_TITLE}, ${SITE_SUBTITLE} | ${SITE_SKILLS}`,
    description = SITE_DESCRIPTION,
    noindex = false
}: MetaProps) => {
    const { asPath } = useRouter();
    const pageUrl = SITE_URL + asPath.split(/[?#]/)[0];

    return (
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{title}</title>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
            <link rel="manifest" href="/favicon/site.webmanifest" />
            <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#515f6c" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            {noindex && <meta name="robots" content="noindex" />}
            <meta key="description" name="description" content={description} />
            <link key="canonical" rel="canonical" href={pageUrl} />
            <meta key="og:type" property="og:type" content="website" />
            <meta key="og:locale" property="og:locale" content="nl_NL" />
            <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />
            <meta key="og:url" property="og:url" content={pageUrl} />
            <meta key="og:title" property="og:title" content={title} />
            <meta key="og:description" property="og:description" content={description} />
            <meta key="og:image" property="og:image" content={OG_IMAGE.url} />
            <meta property="og:image:width" content={String(OG_IMAGE.width)} />
            <meta property="og:image:height" content={String(OG_IMAGE.height)} />
            <meta property="og:image:alt" content={OG_IMAGE.alt} />
            <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
            <meta key="twitter:title" name="twitter:title" content={title} />
            <meta key="twitter:description" name="twitter:description" content={description} />
            <meta key="twitter:image" name="twitter:image" content={OG_IMAGE.url} />
            <meta name="twitter:image:alt" content={OG_IMAGE.alt} />
        </Head>
    );
};

export default Meta;
