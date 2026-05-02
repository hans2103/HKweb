// src/layout/footer.tsx

import css from '@styled-system/css';
import styled from 'styled-components';

import Link from '../components/link';
import Stack, { type StackProps } from '../components/stack';
import Text from '../components/text';

const Component = styled(Stack)<StackProps>(
    css({
        borderTop: 'focus',
        borderColor: 'base'
    })
);

const Footer = () => (
    <Component
        as="footer"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        p="m">
        <Text>
            <Link href="./algemene-voorwaarden" name="Algemene voorwaarden" />
        </Text>
        <Text ml="auto">Copyright &copy; {new Date().getFullYear() + ' '} Hans Kuijpers</Text>
    </Component>
);

export default Footer;
