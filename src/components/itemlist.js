// components/itemlist.js

import Flex from './flex';
import Text from './text';
import Link from './link';
import styled from 'styled-components';

const ItemList = ({ items, justifyContent, ...props }) => {
    return (
        <Flex as='ul' m='0' listStyle='none' justifyContent={justifyContent}>
            {items.map(item => (
                <Item as='li' key={item.link}>
                    <Link href={item.link}>{item.title}</Link>
                </Item>
            ))}
        </Flex>
    );
};

const Item = styled(Text)`
    margin-bottom: ${(props) => props.theme.space.s};
    @media (min-width: ${(props) => props.theme.breakpoints[0]}) {
        display: inline;
        margin-bottom: 0;
        & + &::before {
            /* Draw a bullet with CSS because pseudo content */
            /* is read by screen readers */
            content: '';
            display: inline-block;
            vertical-align: middle;
            margin: 0 1ch;
            width: 3px;
            height: 3px;
            border-radius: 50%;
            background-color: currentColor;
        }
    }
`;

export default ItemList;

