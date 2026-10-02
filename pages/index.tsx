// pages/index.js

import type { PageConfig } from 'next';
import Head from 'next/head';

import {
    OG_IMAGE,
    SITE_DESCRIPTION,
    SITE_EMAIL,
    SITE_NAME,
    SITE_PHONE,
    SITE_TITLE,
    SITE_URL,
    SOCIAL_PROFILES
} from '../lib/constants';
import Flex from '../src/components/flex';
import Heading from '../src/components/heading';
import Link from '../src/components/link';
import Stack from '../src/components/stack';
import Text from '../src/components/text';
import Hero from '../src/layout/hero';
import Layout from '../src/layout/layout';

// Structured data for search engines. A JSON-LD data block is never executed,
// so it is not subject to CSP script-src and keeps the page JS-free.
const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_TITLE,
    jobTitle: 'Frontend developer',
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/`,
    image: OG_IMAGE.url,
    email: `mailto:${SITE_EMAIL}`,
    telephone: SITE_PHONE,
    worksFor: { '@type': 'Organization', name: SITE_NAME, url: `${SITE_URL}/` },
    knowsAbout: ['Joomla', 'Magento', 'Craft CMS', 'Next.js', 'Toegankelijkheid'],
    sameAs: SOCIAL_PROFILES.map((profile) => profile.url)
};

const Home = () => {
    return (
        <Layout>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>
            <Hero />
            <Flex p="l" pl="pageInline" flexDirection="column">
                <Heading level={2}>HKweb</Heading>

                <Stack as="section" mt="m" aria-labelledby="contact">
                    <Heading level={2} as="h3" id="contact">
                        Contact
                    </Heading>
                    <Text>
                        <Link href="mailto:info@hkweb.nl" name="e-mail: info@hkweb.nl" /> |{' '}
                        {/* Non-breaking spaces keep the number on one line. */}
                        <Link href="tel:+31654224518" name={'telefoon: 06\u00a05422\u00a04518'} />
                    </Text>
                </Stack>
            </Flex>
        </Layout>
    );
};

// Static content, no interactivity: ship zero client-side JavaScript.
export const config: PageConfig = { unstable_runtimeJS: false };

/** @component */
export default Home;
