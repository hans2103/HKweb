// pages/index.js

import Box from '../src/components/box';
import Flex from '../src/components/flex';
import Heading from '../src/components/heading';
import Layout from '../src/layout/layout';
import Stack from '../src/components/stack';

export default function Home() {
    return (
        <Layout>
            <Flex flexDirection="column">
                <Heading level={1}>My page</Heading>
                <Stack gap={5}>
                    <Box color="white" backgroundColor="navy">
                        Tomato
                    </Box>
                    <Box color="white" backgroundColor="navy">
                        Tomato
                    </Box>
                </Stack>
            </Flex>
        </Layout>
    );
}
