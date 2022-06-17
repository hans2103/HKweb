// components/stack.js

import styled from 'styled-components';
import { system } from 'styled-system';
import PropTypes from 'prop-types';
import Box from './box';

const Stack = styled(Box)(
    system({
        gap: {
            property: '&& > * + *',
            scale: 'space',
            transform: (value, scale) => ({ marginBlockStart: scale[value] })
        }
    })
);

Stack.propTypes = {
    ...Box.propProps,
    /** Spacing between children */
    gap: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])
};

/** @component */
export default Stack;
