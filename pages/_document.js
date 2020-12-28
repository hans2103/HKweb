import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import { bodyFont } from '../utils/fonts'
import NextHead from 'next/head'
import GoogleFonts from 'next-google-fonts'

const resetStyles = `
  *,::after,::before{background-repeat:no-repeat;box-sizing:inherit}::after,::before{text-decoration:inherit;vertical-align:inherit}html{box-sizing:border-box;cursor:default;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}article,aside,footer,header,nav,section{display:block}body{margin:0}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}nav ol,nav ul{list-style:none}pre{font-family:monospace,monospace;font-size:1em}a{text-decoration:none;color:inherit;background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}::-moz-selection{background-color:#b3d4fc;color:#000;text-shadow:none}::selection{background-color:#b3d4fc;color:#000;text-shadow:none}audio,canvas,iframe,img,svg,video{vertical-align:middle}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}table{border-collapse:collapse}button,input,optgroup,select,textarea{margin:0}button,input,select,textarea{background-color:transparent;color:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto;resize:vertical}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[tabindex],a,area,button,input,label,select,summary,textarea{-ms-touch-action:manipulation;touch-action:manipulation}[hidden]{display:none}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-hidden=false][hidden]:not(:focus){clip:rect(0,0,0,0);display:inherit;position:absolute}[aria-disabled]{cursor:default}

  html, body {
    font-size: 1em;
    line-height: 1.6;
    font-family: ${bodyFont};
    font-style: normal;
    padding: 0;
    margin: 0;
    color: rgb(46, 68, 78);
    -webkit-font-smoothing: subpixel-antialiased;
  }
  body.sticky {
    overflow: hidden;
  }
  .root {
    position: relative;
    overflow: auto;
  }
  .small {
    color: white;
    font-size: 0.5em;
  }
  .big {
    color: white;
    font-size: 1.4em;
  }
  ul, ol {
    padding-left: 0;
  }
  ul ul, ul ol, ol ol, ol ul {
    padding-left: 1.5em;
  }
  ul li, ol li {
    margin-bottom: 0.75em;
    line-height: 1.6;
  }
  @media all and (max-width: 1000px) {
    li {
      list-style-position: outside;
      margin-left: 1em;
    }
  }
`

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()

    const page = renderPage((Component) => (props) => sheet.collectStyles(<Component {...props} />))

    const styleElements = sheet.getStyleElement()
    return { ...page, styleElements }
  }

  render () {
    const { styleElements } = this.props

    return (
      <Html lang="nl">
        <Head>
          <GoogleFonts href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="theme-color" content="#ffffff"/>

          <style dangerouslySetInnerHTML={{ __html: resetStyles }}/>

          {styleElements}

          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NDTF7X');`,
            }}
          />
        </Head>

        <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NDTF7X" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <div className="root">
          <Main/>
        </div>

        <NextScript/>
        </body>
      </Html>
    )
  }
}
