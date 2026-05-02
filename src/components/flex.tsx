// src/components/flex.tsx

import styled from 'styled-components';

import Box, { type BoxProps } from './box';

const Flex = styled(Box)<BoxProps>({
    display: 'flex'
});

export default Flex;
