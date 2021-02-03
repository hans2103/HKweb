// pages/index.js

import Flex from '../src/components/flex';
import Heading from '../src/components/heading';
import Hero from '../src/layout/hero';
import Layout from '../src/layout/layout';
import Link from '../src/components/link';
import Stack from '../src/components/stack';
import Text from '../src/components/text';

const Home = () => {
    return (
        <Layout>
            <Hero />
            <Flex p="2rem" pl="3vw" flexDirection="column">
                <Heading level={2}>HKweb</Heading>

                <Stack as="section" mt="1rem" aria-labelledby="contact">
                    <Heading level={2} id="contact">
                        Contact
                    </Heading>
                    <Text>
                        <Link href="mailto:info@hkweb.nl" name="e-mail: info@hkweb.nl" /> |{' '}
                        <Link href="tel:+31654224518" name="telefoon: 06 - 5422 4518" />
                    </Text>
                </Stack>
            </Flex>
        </Layout>
    );
};

/** @component */
export default Home;
