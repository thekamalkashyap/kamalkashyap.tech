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
      window.sessionStorage.setItem('visitorName', visitor);
    }

    if (['', 'undefined', 'null'].includes(visitor)) {
      visitor = config.ps1_username;
    }
    setVisitorName(visitor);
  }, [visitorName]);

  return (
    <>
      <Head>
        <title>{config.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div>
        <Component
          {...pageProps}
          visitorName={visitorName}
          inputRef={inputRef}
        />
      </div>
    </>
  );
};

export default App;
