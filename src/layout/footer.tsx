// src/layout/footer.tsx

import { Flex } from '../../panda/jsx';
import Link from '../components/link';
import Text from '../components/text';

const Footer = () => (
    <Flex
        as="footer"
        direction="row"
        justifyContent="space-between"
        p="m"
        borderTop="focus"
        borderColor="base">
        <Text>
            <Link href="/algemene-voorwaarden" name="Algemene voorwaarden" />
        </Text>
        {/* End year is the build year, i.e. when the site was last published. */}
        <Text ml="auto">Copyright &copy; 2018–{new Date().getFullYear()} Hans Kuijpers</Text>
    </Flex>
);

export default Footer;
