// src/Provider.js

import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const Provider = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

Provider.propTypes = {
    children: PropTypes.node.isRequired
};

/** @component */
export default Provider;
