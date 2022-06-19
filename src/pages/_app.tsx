import React, { useEffect } from 'react';
import '../styles/global.css';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
          maximum-scale="1"
        />
      </Head>

      <div className="text-light-foreground dark:text-dark-foreground min-w-max text-xs md:min-w-full md:text-base">
        <main className="bg-light-background dark:bg-dark-background w-full h-full">
          <Component {...pageProps} inputRef={inputRef} />
        </main>
      </div>
    </>
  );
};

export default App;
