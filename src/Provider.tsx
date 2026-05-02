// src/Provider.tsx

import type { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';

const Provider = ({ children }: { children: ReactNode }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Provider;
