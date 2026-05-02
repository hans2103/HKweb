// pages/_app.tsx

import isPropValid from '@emotion/is-prop-valid';
import type { AppProps } from 'next/app';
import { createGlobalStyle, StyleSheetManager } from 'styled-components';
import { normalize } from 'styled-normalize';

import { switzera } from '../src/fonts';
import Provider from '../src/Provider';

// styled-components v6 forwards every prop to the DOM by default. Filter out
// styled-system props (p, m, flexDirection, variant, etc.) when the target is
// a real DOM element. React components still receive everything.
const shouldForwardProp = (propName: string, target: unknown) =>
    typeof target === 'string' ? isPropValid(propName) : true;

const GlobalStyle = createGlobalStyle`
 ${normalize}

 :root {
    font-size: calc(1em + .16vw);
    scroll-behavior: smooth;

    @media screen and (prefers-reduced-motion: reduce) {
        scroll-behavior: auto;
    }
 }

  body {
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-switzera), Verdana, arial, sans-serif;
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

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
            <div className={switzera.variable}>
                <GlobalStyle />
                <Provider>
                    <Component {...pageProps} />
                </Provider>
            </div>
        </StyleSheetManager>
    );
};

export default App;
