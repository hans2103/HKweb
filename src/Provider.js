// src/Provider.js

import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const Provider = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

/** @component */
export default Provider;
