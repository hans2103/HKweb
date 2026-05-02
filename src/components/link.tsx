// src/components/link.tsx

import NextLink, { type LinkProps as NextLinkProps } from 'next/link';
import type { ReactNode } from 'react';

import { link } from '../../panda/recipes';
import Hidden from './hidden';

type LinkComponentProps = Omit<NextLinkProps, 'as'> & {
    name: string;
    hidden?: boolean;
    children?: ReactNode;
    title?: string;
    className?: string;
};

const Link = ({ href, name, hidden, children, className, ...rest }: LinkComponentProps) => (
    <NextLink
        href={href}
        className={[link(), className].filter(Boolean).join(' ')}
        {...rest}>
        {hidden ? <Hidden>{name}</Hidden> : name}
        {children}
    </NextLink>
);

export default Link;
