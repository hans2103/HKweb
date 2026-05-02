// src/components/grid.tsx

import styled from 'styled-components';

import Box, { type BoxProps } from './box';

const Grid = styled(Box)<BoxProps>({
    display: 'grid'
});

export default Grid;
