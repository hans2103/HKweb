// src/components/itemlist.tsx

import styled from 'styled-components';

import Flex from './flex';
import Link from './link';
import Text, { type TextProps } from './text';

type Item = {
    link: string;
    title: string;
};

type ItemListProps = {
    items: Item[];
    justifyContent?: string;
    alignItems?: string;
};

const ItemList = ({ items, justifyContent, alignItems }: ItemListProps) => (
    <Flex
        as="ul"
        m="0"
        style={{ listStyle: 'none' }}
        alignItems={alignItems}
        justifyContent={justifyContent}>
        {items.map((item) => (
            <ListItem as="li" key={item.link}>
                <Link href={item.link} name={item.title} />
            </ListItem>
        ))}
    </Flex>
);

const ListItem = styled(Text)<TextProps>`
    margin-bottom: ${(props) => props.theme.space.s};

    @media (min-width: ${(props) => props.theme.breakpoints[0]}) {
        display: inline;
        margin-bottom: 0;
        & + &::before {
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
