// src/components/hidden.tsx

import type { ReactNode } from 'react';
import styled from 'styled-components';

import Box, { type BoxProps } from './box';

const Component = styled(Box)<BoxProps>`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    whitespace: nowrap;
    wordwrap: normal;
`;

type HiddenProps = {
    children: ReactNode;
};

const Hidden = ({ children }: HiddenProps) => <Component as="span">{children}</Component>;

export default Hidden;
