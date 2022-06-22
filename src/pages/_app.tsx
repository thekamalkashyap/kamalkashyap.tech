import React from 'react';
import '../styles/global.css';
import '../styles/navbar.css';
import Head from 'next/head';
import config from '../../config.json';

const App = ({ Component, pageProps }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <Head>
        <title>{config.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="bg-dark-background text-dark-foreground text-xs md:text-base">
        <Component {...pageProps} inputRef={inputRef} />
      </div>
    </>
  );
};

export default App;
