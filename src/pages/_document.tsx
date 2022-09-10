import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="dark">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="apple-touch-icon" sizes="76x76" href="/icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/icon.png" />
          <meta name="theme-color" content="#000" />
        </Head>
        <body className="bg-light dark:bg-black dark:text-white text-black text-lg sm:text-xl lg:text-2xl  transition-all ease-out duration-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
