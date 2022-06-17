// pages/_app.js

import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import PropTypes from 'prop-types';
import Provider from '../src/Provider';
import Fonts from '../src/components/fonts';

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
    padding: 1rem;
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
