// compontents/layout/layout.js

import PropTypes from 'prop-types';

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

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

/** @component */
export default Layout;
