// components/design-system/Flex.js

import styled from 'styled-components';
import Box from './box';

const Flex = styled(Box)({
    display: 'flex'
});

Flex.propTypes = Box.propTypes;

export default Flex;
