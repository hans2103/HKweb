// src/layout/header.tsx

import css from '@styled-system/css';
import styled from 'styled-components';

import Logo from '../../public/images/logo--hkweb.svg';
import Box from '../components/box';
import Flex from '../components/flex';
import Link from '../components/link';
import SocialLinks from '../components/social-icons';

const StyledLogo = styled(Logo)(
    css({
        fill: 'base'
    })
);

const Header = () => (
    <Flex as="header" p="m">
        <Box>
            <Link
                href="https://hkweb.nl"
                name="HKweb"
                hidden={true}
                title="to the homepage of HKweb.nl">
                <StyledLogo width="3rem" />
            </Link>
        </Box>
        <Box mx="auto" />
        <SocialLinks type="follow" alignItems="center" justifyContent="flex-end" />
    </Flex>
);

export default Header;
