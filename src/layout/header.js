// src/layout/header/js

import styled from 'styled-components';
import css from '@styled-system/css';

import Box from '../components/box';
import Flex from '../components/flex';
import Link from '../components/link';
import SocialLinks from '../components/social-icons';

import Logo from '../../public/images/logo--hkweb.svg';

const StyledLogo = styled(Logo)(
    css({
        fill: 'base'
    })
);

const Header = () => {
    return (
        <Flex as="header" p="m">
            <Box>
                <Link href="https://hkweb.nl" name="HKweb" hidden={true}>
                    <StyledLogo width="3rem" />
                </Link>
            </Box>
            <Box mx="auto" />
            <SocialLinks type="follow" alignItems="center" justifyContent="flex-end" />
        </Flex>
    );
};

/** @component */
export default Header;
