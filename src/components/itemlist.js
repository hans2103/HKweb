// components/itemlist.js

import PropTypes from 'prop-types';
import Flex from './flex';
import Text from './text';
import Link from './link';
import styled from 'styled-components';

const ItemList = ({ items, justifyContent, alignItems }) => {
    return (
        <Flex
            as="ul"
            m="0"
            listStyle="none"
            alignItems={alignItems}
            justifyContent={justifyContent}>
            {items.map((item) => (
                <Item as="li" key={item.link}>
                    <Link href={item.link} name={item.title} />
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

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    justifyContent: PropTypes.string,
    alignItems: PropTypes.string
};

/** @component */
export default ItemList;
