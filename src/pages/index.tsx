import Navbar from '../components/navbar';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Index() {
  useEffect(() => {
    let askName = 'What is your name?';
    let visitorName: string;
    if (!window.sessionStorage) {
      window.prompt(askName);
    }
    visitorName = window.sessionStorage.getItem('visitorName');
    if (!visitorName) {
      visitorName = window.prompt(askName);
      window.sessionStorage.setItem('visitorName', visitorName);
    }
    let setVisitorName = document.getElementsByClassName('visitorName');
    for (let e = 0; e < setVisitorName.length; e++) {
      setVisitorName[e].innerHTML = visitorName;
    }
  });
  return (
    <>
      <Navbar />
      <main id="home">
        <section className="pageSlides">
          <section className="carousel">
            <section className="carouselSlides">
              <p>
                hi! <span className="visitorName">Visitor</span>,I am Kamal
                Kashyap
              </p>
              <p>&rarr;</p>
            </section>
            <section className="carouselSlides">
              <p>I am a Creative Developer!</p>
              <p>&darr;</p>
            </section>
          </section>
        </section>
        <section className="pageSlides">
          <p>
            <span className="visitorName"> </span> are you a linux freak?
          </p>
          <p>
            check out{' '}
            <Link href="/terminal">
              <a className=" bg-light-blue rounded-lg px-2 border ">CLI</a>
            </Link>{' '}
            version of my site
          </p>
        </section>
        <section className="pageSlides" id="footer">
          <div></div>
          <div>
            <p>This site is currently underdevelopment</p>
            <p>if you want to contribute</p>
            <p>
              help me out on{' '}
              <Link href="https://github.com/thekamalkashyap">
                <a
                  target="_blank"
                  className="underline"
                  rel="noopener noreferrer"
                >
                  github.
                </a>
              </Link>
            </p>
          </div>
          <footer className="flex">
            with &#10084; @
            <Link href="https://instagram.com/art.ificialkamal">
              <a className="underline hover:text-light-blue">kamal</a>
            </Link>
          </footer>
        </section>
      </main>
    </>
  );
}
