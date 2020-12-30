// components/grid.js

import styled from 'styled-components';
import Box from './box';

const Grid = styled(Box)({
    display: 'grid'
});

Grid.propTypes = Box.propTypes;

/** @component */
export default Grid;
