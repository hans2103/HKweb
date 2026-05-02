// src/layout/layout.tsx

import type { ReactNode } from 'react';
import styled from 'styled-components';

import Flex from '../components/flex';
import Footer from './footer';
import Header from './header';
import Meta from './meta';

const SkipLink = styled.a`
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
    padding: 0.5rem 1rem;
    background: ${({ theme }) => theme.colors.base};
    color: ${({ theme }) => theme.colors.bg};
    text-decoration: none;
    z-index: 100;
    transform: translateY(-200%);
    transition: transform 0.15s ease-out;

    &:focus {
        transform: translateY(0);
        outline: 2px solid ${({ theme }) => theme.colors.focus};
        outline-offset: 2px;
    }
`;

const Layout = ({ children }: { children: ReactNode }) => (
    <Flex flexDirection="column">
        <Meta />
        <SkipLink href="#main">Naar hoofdinhoud</SkipLink>
        <Header />
        <main id="main" tabIndex={-1}>
            {children}
        </main>
        <Footer />
    </Flex>
);

export default Layout;
