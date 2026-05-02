// src/components/stack.tsx

import styled from 'styled-components';
import { system } from 'styled-system';

import Box, { type BoxProps } from './box';

export type StackProps = BoxProps & {
    gap?: string | number | (string | number)[];
};

const stackGap = system({
    gap: {
        // Apply margin to every child after the first one (lobotomized owl).
        // Cast: styled-system's `property` is typed as a CSS prop, but a selector works at runtime.
         
        property: '&& > * + *' as any,
        scale: 'space',
        transform: (value, scale) => ({ marginBlockStart: scale?.[value] })
    }
});

const Stack = styled(Box)<StackProps>(stackGap);

export default Stack;
