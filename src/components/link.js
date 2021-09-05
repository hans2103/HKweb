// src/components/link.js

import PropTypes from 'prop-types';
import NextLink from 'next/link';
import styled from 'styled-components';
import css from '@styled-system/css';
import Hidden from './hidden';

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

const Name = (props) => {
    if (props.hidden) {
        return <Hidden>{props.name}</Hidden>;
    } else {
        return <>{props.name}</>;
    }
};

const Link = ({ href, name, hidden, children }) => {
    return (
        <NextLink href={href} passHref>
            <Component>
                <Name hidden={hidden} name={name} />
                {children}
            </Component>
        </NextLink>
    );
};

Link.propTypes = {
    href: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    hidden: PropTypes.bool,
    children: PropTypes.node
};

/** @component */
export default Link;
