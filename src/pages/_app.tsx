import React, { useEffect, useState } from 'react';
import '../styles/global.css';
import '../styles/navbar.css';
import Head from 'next/head';
import config from '../../config.json';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
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

  // useEffect(() => {
  //   let html = document.querySelector('html');
  //   let theme = window.sessionStorage.getItem('theme');
  //   if (theme == 'dark') {
  //     html.classList.add('dark');
  //   } else if (theme == 'light') {
  //     html.classList.remove('dark');
  //   }
  // }, []);

  useEffect(() => {
    AOS.init({ duration: 750 });
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
    });
  }, []);

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

      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component
          {...pageProps}
          inputRef={inputRef}
          key={router.pathname}
          visitorName={visitorName}
        />
      </AnimatePresence>
    </>
  );
};

export default App;
