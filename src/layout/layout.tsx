// src/layout/layout.tsx

import type { ReactNode } from 'react';

import { Flex } from '../../panda/jsx';
import { skipLink } from '../../panda/recipes';
import Footer from './footer';
import Header from './header';
import Meta, { type MetaProps } from './meta';

const Layout = ({ children, ...meta }: MetaProps & { children: ReactNode }) => (
    <Flex direction="column">
        <Meta {...meta} />
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
