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
            <Link href="/" name="HKweb, naar de homepage" hidden={true} title="Naar de homepage">
                <Logo width="3rem" className={logoClass} aria-hidden="true" focusable="false" />
            </Link>
        </Box>
        <Box mx="auto" />
        <SocialLinks />
    </Flex>
);

export default Header;
