// pages/index.js

import Flex from '../src/components/flex';
import Heading from '../src/components/heading';
import Layout from '../src/layout/layout';

const Home = () => {
    return (
        <Layout>
            <Flex flexDirection="column">
                <Heading level={1}>My page</Heading>
            </Flex>
        </Layout>
    );
}

/** @component */
export default Home
