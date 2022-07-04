import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="apple-touch-icon" sizes="76x76" href="/icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/icon.png" />
          <meta name="theme-color" content="#000" />
        </Head>
        <body className=" bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
