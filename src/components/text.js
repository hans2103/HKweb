// components/text.js

import styled from 'styled-components';
import { color, typography, space, layout, variant } from 'styled-system';
import PropTypes from 'prop-types';

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
};

const Text = styled.p(
    {
        margin: 0
    },
    variant({ variants }),
    color,
    typography,
    space,
    layout
);

Text.propTypes = {
    variant: PropTypes.oneOf(Object.keys(variants)),
    children: PropTypes.node
};

Text.defaultProps = {
    variant: 'body'
};

/** @component */
export default Text;
