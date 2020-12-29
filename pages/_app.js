// pages/_app.js

import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize'
import Provider from '../src/Provider';

const GlobalStyle = createGlobalStyle`
 ${normalize}
 
  body {
    padding: 0;
    box-sizing: border-box;
  }
  
  ul, ol {
    padding: 0;
  }
`;

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Provider>
                <Component {...pageProps} />
            </Provider>
        </>
    );
}
