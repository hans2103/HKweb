// compontents/layout/layout.js

import Footer from './footer';
import Meta from './meta';
//import Header from '../Layout/Header';

function Layout({ children }) {
    return (
        <>
            <Meta />
            <div id="site-content">
                <div className="min-h-screen">
                    <main className="text-default bg-default">{children}</main>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Layout;
