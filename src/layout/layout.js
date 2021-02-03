// compontents/layout/layout.js

import Flex from '../components/flex';
import Footer from './footer';
import Header from './header';
import Meta from './meta';

function Layout({ children }) {
    return (
        <Flex flexDirection="column">
            <Meta />
            <Header />
            <main>{children}</main>
            <Footer />
        </Flex>
    );
}

/** @component */
export default Layout;
