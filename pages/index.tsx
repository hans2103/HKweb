// pages/index.js

import type { PageConfig } from 'next';
import Head from 'next/head';

import {
    OG_IMAGE,
    SITE_ADDRESS,
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
// One @graph with @id references, so search engines and AI assistants see the
// page, the person and the business as linked entities.
const HOME_URL = `${SITE_URL}/`;
const PERSON_ID = `${HOME_URL}#person`;
const ORGANIZATION_ID = `${HOME_URL}#organization`;
const WEBSITE_ID = `${HOME_URL}#website`;

const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'ProfilePage',
            '@id': `${HOME_URL}#profilepage`,
            url: HOME_URL,
            name: `${SITE_TITLE} – frontend developer | ${SITE_NAME}`,
            inLanguage: 'nl-NL',
            isPartOf: { '@id': WEBSITE_ID },
            mainEntity: { '@id': PERSON_ID }
        },
        {
            '@type': 'WebSite',
            '@id': WEBSITE_ID,
            url: HOME_URL,
            name: SITE_NAME,
            inLanguage: 'nl-NL',
            publisher: { '@id': ORGANIZATION_ID }
        },
        {
            '@type': 'Person',
            '@id': PERSON_ID,
            name: SITE_TITLE,
            jobTitle: 'Frontend developer',
            description: SITE_DESCRIPTION,
            url: HOME_URL,
            image: OG_IMAGE.url,
            email: `mailto:${SITE_EMAIL}`,
            telephone: SITE_PHONE,
            worksFor: { '@id': ORGANIZATION_ID },
            knowsAbout: ['Joomla', 'Magento', 'Craft CMS', 'Next.js', 'Toegankelijkheid'],
            sameAs: SOCIAL_PROFILES.map((profile) => profile.url)
        },
        {
            '@type': 'ProfessionalService',
            '@id': ORGANIZATION_ID,
            name: SITE_NAME,
            url: HOME_URL,
            logo: `${SITE_URL}/favicon/android-chrome-512x512.png`,
            image: OG_IMAGE.url,
            email: `mailto:${SITE_EMAIL}`,
            telephone: SITE_PHONE,
            address: { '@type': 'PostalAddress', ...SITE_ADDRESS },
            priceRange: '€€',
            founder: { '@id': PERSON_ID },
            areaServed: { '@type': 'Country', name: 'Nederland' }
        }
    ]
};

const Home = () => {
    return (
        <Layout ogType="profile">
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>
            <Hero />
            <Flex p="l" pl="pageInline" flexDirection="column">
                <Heading level={2}>HKweb</Heading>
                {/* Visible copy that search engines and AI assistants can quote. */}
                <Stack mt="m" maxWidth="bodyMaxWidth">
                    <Text>
                        Ik ben Hans Kuijpers, frontend developer bij HKweb. Ik bouw snelle,
                        toegankelijke websites en webshops die op elk scherm goed werken.
                    </Text>
                    <Text>
                        Daarvoor werk ik met Joomla, Magento, Craft CMS en Next.js. Op zoek naar
                        iemand die je website of webshop bouwt of verbetert? Neem gerust contact op.
                    </Text>
                </Stack>

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
