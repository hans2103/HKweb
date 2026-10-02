// pages/404.tsx

import type { PageConfig } from 'next';

import Flex from '../src/components/flex';
import Heading from '../src/components/heading';
import Link from '../src/components/link';
import Text from '../src/components/text';
import Layout from '../src/layout/layout';

const NotFound = () => {
    return (
        <Layout title="Pagina niet gevonden | HKweb" noindex>
            <Flex
                gap="xl"
                p="l"
                pl="pageInline"
                ml="auto"
                mr="auto"
                maxWidth="bodyMaxWidth"
                flexDirection="column">
                <Heading level={1}>Pagina niet gevonden</Heading>
                <Text>
                    De pagina die je zoekt bestaat niet (meer) of is verplaatst. Ga terug naar de{' '}
                    <Link href="/" name="homepage" />.
                </Text>
            </Flex>
        </Layout>
    );
};

// Static content, no interactivity: ship zero client-side JavaScript.
export const config: PageConfig = { unstable_runtimeJS: false };

/** @component */
export default NotFound;
