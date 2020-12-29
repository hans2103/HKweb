// pages/_app.js

import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import Provider from '../src/Provider';

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
    return (
        <>
            <GlobalStyle />
            <Provider>
                <Component {...pageProps} />
            </Provider>
        </>
    );
}

/** @component */
export default App
