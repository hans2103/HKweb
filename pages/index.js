// pages/index.js

import Box from '../components/design-system/Box';
import Flex from '../components/design-system/Flex';
import Heading from '../components/design-system/Heading';
import Layout from '../components/layout/Layout';
import Stack from '../components/design-system/Stack';

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
