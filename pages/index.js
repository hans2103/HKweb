// pages/index.js

import Flex from '../src/components/flex';
import Grid from '../src/components/grid';
import Heading from '../src/components/heading';
import Layout from '../src/layout/layout';
import Box from '../src/components/box';
import Text from '../src/components/text';

const Home = () => {
    return (
        <Layout>
            <Flex flexDirection='column'>
                <Heading level={1}>My page</Heading>

                <Box as='section' aria-labelledby='Mijn-Presentaties'>
                    <Heading level={2} id='Mijn-Presentaties'>Mijn presentaties</Heading>
                    <Text>
                        Hier komt een lijst van gegeven presentaties.
                    </Text>
                </Box>

            </Flex>
        </Layout>
    );
};

/** @component */
export default Home;
