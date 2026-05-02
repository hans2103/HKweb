// src/components/box.tsx

import type { ElementType, HTMLAttributes } from 'react';
import styled from 'styled-components';
import {
    border,
    type BorderProps,
    color,
    type ColorProps,
    flexbox,
    type FlexboxProps,
    grid,
    type GridProps,
    layout,
    type LayoutProps,
    position,
    type PositionProps,
    space,
    type SpaceProps,
    system
} from 'styled-system';

const gap = system({
    gap: { property: 'gap', scale: 'space' },
    rowGap: { property: 'rowGap', scale: 'space' },
    columnGap: { property: 'columnGap', scale: 'space' }
});

type ResponsiveSpace = string | number | (string | number)[];

type GapProps = {
    gap?: ResponsiveSpace;
    rowGap?: ResponsiveSpace;
    columnGap?: ResponsiveSpace;
};

export type BoxProps = SpaceProps &
    ColorProps &
    BorderProps &
    LayoutProps &
    FlexboxProps &
    GridProps &
    PositionProps &
    GapProps &
    HTMLAttributes<HTMLElement> & {
        as?: ElementType;
    };

const Box = styled.div<BoxProps>(
    {
        boxSizing: 'border-box'
    },
    space,
    color,
    border,
    layout,
    flexbox,
    grid,
    position,
    gap
);

export default Box;
