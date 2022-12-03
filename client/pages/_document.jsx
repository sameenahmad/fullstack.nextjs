import Document, { Head, Html, NextScript, Main } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel="preload"
            href="/fonts/Metropolis-Medium.otf"
            as="font"
            type="font/otf"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Metropolis-Regular.otf"
            as="font"
            type="font/otf"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}