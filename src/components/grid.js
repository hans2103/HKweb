// components/grid.js

import styled from 'styled-components';
import Box from './box';

const Grid = styled(Box)({
    display: 'grid'
});

Grid.propTypes = Box.propTypes;

export default Grid;
