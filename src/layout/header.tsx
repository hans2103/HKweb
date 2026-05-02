// src/layout/header.tsx

import { css } from '../../panda/css';
import { Box, Flex } from '../../panda/jsx';
import Logo from '../../public/images/logo--hkweb.svg';
import Link from '../components/link';
import SocialLinks from '../components/social-icons';

const logoClass = css({ fill: 'base' });

const Header = () => (
    <Flex as="header" p="m">
        <Box>
            <Link
                href="https://hkweb.nl"
                name="HKweb"
                hidden={true}
                title="to the homepage of HKweb.nl">
                <Logo width="3rem" className={logoClass} />
            </Link>
        </Box>
        <Box mx="auto" />
        <SocialLinks type="follow" />
    </Flex>
);

export default Header;
