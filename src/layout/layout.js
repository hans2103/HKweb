// compontents/layout/layout.js

import Flex from '../components/flex';
import Footer from './footer';
import Meta from './meta';
import Header from './Header';
import Hero from './Hero';

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

export default Layout;
