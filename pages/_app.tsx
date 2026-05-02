// pages/_app.tsx

import '../src/styles/globals.css';
// Import for side effects: ensures next/font's CSS module (with @font-face
// + --font-switzera definition) is included in the client bundle.
// The variable className itself is applied on <Html> in _document.tsx so the
// CSS variable is in scope of <body> and Panda's globalCss font-family rule.
import '../src/fonts';

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default App;
