// src/components/hidden.js

import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from './box';

const Component = styled(Box)`
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

const Hidden = ({ children, ...restProps }) => {
    return (
        <Component as="span" {...restProps}>
            {children}
        </Component>
    );
};

Hidden.propTypes = {
    children: PropTypes.node.isRequired
};

/** @component */
export default Hidden;
