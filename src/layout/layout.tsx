// src/layout/layout.tsx

import type { ReactNode } from 'react';

import { Flex } from '../../panda/jsx';
import { skipLink } from '../../panda/recipes';
import Footer from './footer';
import Header from './header';
import Meta from './meta';

const Layout = ({ children }: { children: ReactNode }) => (
    <Flex direction="column">
        <Meta />
        <a href="#main" className={skipLink()}>
            Naar hoofdinhoud
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
            {children}
        </main>
        <Footer />
    </Flex>
);

export default Layout;
