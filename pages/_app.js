// pages/_app.js

import { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import PropTypes from 'prop-types';
import Provider from '../src/Provider';
import Fonts from '../src/components/fonts';
import TagManager from 'react-gtm-module';
import { GTM_ID } from '../lib/constants';

const GlobalStyle = createGlobalStyle`
 ${normalize}
 
 :root {
    font-size: calc(1em + .16vw);
    scroll-behavior: smooth;

    // No smooth scroll for people who prefer not to
    @media screen and (prefers-reduced-motion: reduce) {
        scroll-behavior: auto;
    }
 }
 
  body {
    padding: 0;
    box-sizing: border-box;
  }
  
  ul, ol {
    padding: 0;
  }
  
  @media print {
      @page {
        size: auto;
        margin: .5cm;
      }
    
      html,
      body {
        background: transparent;
      }
    
      a::after {
        font-size: smaller;
        content: " (" attr(href) ")";
      }
    
      .print\\:hide.print\\:hide {
        display: none;
      }
    }
`;

const App = ({ Component, pageProps }) => {
    useEffect(() => {
        TagManager.initialize({ gtmId: GTM_ID });
    }, []);

    return (
        <>
            <GlobalStyle />
            <Fonts />
            <Provider>
                <Component {...pageProps} />
            </Provider>
        </>
    );
};

App.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object
};

/** @component */
export default App;
