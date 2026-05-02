// src/components/text.tsx

import type { ElementType, HTMLAttributes } from 'react';
import styled from 'styled-components';
import {
    color,
    type ColorProps,
    layout,
    type LayoutProps,
    space,
    type SpaceProps,
    typography,
    type TypographyProps,
    variant
} from 'styled-system';

const variants = {
    body: {
        fontFamily: 'base',
        fontSize: 'm',
        fontWeight: 'normal',
        lineHeight: 'base',
        color: 'base'
    },
    disclaimer: {
        fontFamily: 'base',
        fontSize: 's',
        fontWeight: 'normal',
        lineHeight: 'base',
        color: 'secondary'
    },
    error: {
        fontFamily: 'base',
        fontSize: 'm',
        fontWeight: 'normal',
        lineHeight: 'base',
        color: 'error'
    }
} as const;

export type TextProps = ColorProps &
    SpaceProps &
    LayoutProps &
    TypographyProps &
    HTMLAttributes<HTMLElement> & {
        as?: ElementType;
        variant?: keyof typeof variants;
    };

const Text = styled.p.attrs<TextProps>((props) => ({
    variant: props.variant ?? 'body'
}))<TextProps>(
    {
        margin: 0
    },
    variant({ variants }),
    color,
    typography,
    space,
    layout
);

export default Text;
