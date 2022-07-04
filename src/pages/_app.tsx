import React, { useEffect, useState } from 'react';
import '../styles/global.css';
import '../styles/navbar.css';
import Head from 'next/head';
import config from '../../config.json';

const App = ({ Component, pageProps }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  let [visitorName, setVisitorName] = useState('');
  useEffect(() => {
    const askName = 'What is your name?';
    let visitor: string;

    if (!window.sessionStorage) {
      window.prompt(askName);
    }
    visitor = window.sessionStorage.getItem('visitorName');

    if (!visitor) {
      visitor = window.prompt(askName);
      if (['', undefined, null].includes(visitor)) {
        visitor = config.ps1_username;
      }
      window.sessionStorage.setItem('visitorName', visitor);
    }
    setVisitorName(visitor);
  }, [visitorName]);

  return (
    <>
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Javascript, AOS, React, Nextjs , Portfolio, Creative developer"
        />
        <meta name="author" content={config.name} />
        <link rel="canonical" href="https://kamalkashyap.vercel.app" />
      </Head>

      <div>
        <Component
          {...pageProps}
          inputRef={inputRef}
          visitorName={visitorName}
        />
      </div>
    </>
  );
};

export default App;
