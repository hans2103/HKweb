// compontents/layout/layout.js

import Flex from '../components/flex';
import Footer from './footer';
import Meta from './meta';
import Header from './header';
import Hero from './hero';

function Layout ({ children }) {
    return (
        <Flex flexDirection='column'>
            <Meta />
            <Hero />
            <Header />
            <main>{children}</main>
            <Footer />
        </Flex>
    );
}

/** @component */
export default Layout;
