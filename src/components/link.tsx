// src/components/link.tsx

import css from '@styled-system/css';
import NextLink, { type LinkProps as NextLinkProps } from 'next/link';
import type { ReactNode } from 'react';
import styled from 'styled-components';

import Hidden from './hidden';

const StyledNextLink = styled(NextLink)(
    css({
        '&, &:link, &:visited': {
            padding: 0,
            background: 'none',
            border: 0,
            font: 'inherit',
            textDecoration: 'underline',
            color: 'primary'
        },
        '&:hover, &:active, &:focus-visible': {
            color: 'accent',
            cursor: 'pointer'
        },
        '&:focus-visible': {
            outline: '2px solid',
            outlineOffset: 2
        }
    })
);

type NameProps = {
    hidden?: boolean;
    name: string;
};

const Name = ({ hidden, name }: NameProps) =>
    hidden ? <Hidden>{name}</Hidden> : <>{name}</>;

type LinkComponentProps = Omit<NextLinkProps, 'as'> & {
    name: string;
    hidden?: boolean;
    children?: ReactNode;
    title?: string;
};

const Link = ({ href, name, hidden, children, ...rest }: LinkComponentProps) => (
    <StyledNextLink href={href} {...rest}>
        <Name hidden={hidden} name={name} />
        {children}
    </StyledNextLink>
);

export default Link;
