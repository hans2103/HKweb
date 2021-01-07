// componentes/layout/Footer.js

import Box from '../components/box';
import Stack from '../components/stack';
import Text from '../components/text';
import styled from 'styled-components';
import css from '@styled-system/css';

const Component = styled(Stack)(
    css({
        borderTop: 'focus',
        borderColor: 'base'
    })
);

const Footer = () => {
    return (
        <Component
            as="footer"
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            gap="m"
            p="m">
            <Box ml="auto">
                <Text>Copyright &copy; {new Date().getFullYear() + ' '} Hans Kuijpers</Text>
            </Box>
        </Component>
    );
};

/** @component */
export default Footer;
