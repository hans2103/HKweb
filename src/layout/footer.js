// componentes/layout/Footer.js

import Box from '../components/box';
import ItemList from '../components/itemlist';
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
        <Component as='footer' display='flex' flexDirection='column' justifyContent='flex-end' gap='m' p='m'>
            <ItemList mr={3}
                      justifyContent='flex-end'
                      items={[
                          {
                              link: 'https://github.com/hans2103',
                              title: 'GitHub'
                          },
                          {
                              link: 'https://instagram.com/hans2103',
                              title: 'Instagram'
                          },
                          {
                              link: 'https://twitter.com/hans2103',
                              title: 'Twitter'
                          }
                      ]}
            />
            <Box ml='auto'>
                <Text>
                    Copyright &copy; {new Date().getFullYear() + ' '} Hans Kuijpers
                </Text>
            </Box>
        </Component>
    );
};

export default Footer;