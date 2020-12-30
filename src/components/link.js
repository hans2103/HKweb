// src/components/link.js

import NextLink from 'next/link';
import styled from 'styled-components';
import css from '@styled-system/css';

const Component = styled.a(
    css({
        '&, &:link, &:visited': {
            padding: 0,
            background: 'none',
            border: 0,
            font: 'inherit',
            textDecoration: 'underline',
            color: 'primary'
        },
        '&:hover, &:active, &:focus': {
            color: 'accent',
            cursor: 'pointer'
        },
        '&:focus': {
            outline: '1px dashed',
            outlineOffset: 1
        }
    })
);

const Link = ({ href, name }) => {
    return (
        <NextLink href={href} passHref>
            <Component>{name}</Component>
        </NextLink>
    );
};

/** @component */
export default Link;
