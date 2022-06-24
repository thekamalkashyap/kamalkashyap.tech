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

      <div className="bg-dark-background text-dark-foreground text-lg sm:text-xl  md:text-2xl lg:text-3xl xl:text-4xl ">
        <Component {...pageProps} inputRef={inputRef} />
      </div>
    </>
  );
};

export default App;
