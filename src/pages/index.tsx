import Navbar from '../components/navbar';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Index() {
  useEffect(() => {
    let visitor = prompt('what is your name?', 'visitor');
    document.getElementById('visitor').innerHTML = visitor;
  });
  return (
    <>
      <Navbar />
      <main>
        <section className="pageSlides">
          <div className="carousel">
            <div className="carouselSlides">
              <p>
                hi! <span id="visitor">Visitor</span>,I am Kamal Kashyap
              </p>
              <p>&rarr;</p>
            </div>
            <div className="carouselSlides">
              <p>I am a Creative Developer!</p>
              <p>&darr;</p>
            </div>
          </div>
        </section>
        <section className="pageSlides text-base">
          <p>Are you a linux freak?</p>
          <p>
            check out{' '}
            <Link href="/terminal">
              <a className=" bg-light-blue rounded-lg px-2 border ">CLI</a>
            </Link>{' '}
            version of my site
          </p>
        </section>
        <section className="pageSlides">
          <p className="text-base">This site is currently underdevelopment</p>
          <p>if you have any idea or want to contribute</p>
          <p>
            contact me on{' '}
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
        </section>
      </main>
      <footer className="fixed bottom-0 text-center w-full">
        with &#10084; @
        <Link href="https://instagram.com/kashyap._.kamal">
          <a className="underline hover:text-light-blue">kamal</a>
        </Link>
      </footer>
    </>
  );
}
