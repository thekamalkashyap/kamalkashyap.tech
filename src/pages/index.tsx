import Navbar from '../components/navbar/index';
import Link from 'next/link';
import Herotyper from '../components/heroTyper';
import Image from 'next/image';
import avatar from '../../public/avatar.jpg';
import Layout from '../components/layout';
import { Canvas } from '@react-three/fiber';
import { lazy, Suspense } from 'react';
import useScrollPosition from '../utils/useScrollPosition';
const Globe = lazy(() => import('../components/Globe'));

export default function Index({ visitorName }) {
  const scrollPosition = useScrollPosition();
  return (
    <>
      <Layout>
        <Navbar />
        <div className=" h-screen w-screen fixed top-0 -z-30 opacity-60 ">
          <Canvas>
            <ambientLight />
            <directionalLight position={[-4, 3, 5]} />
            <Suspense fallback={null}>
              <Globe scrollPosition={scrollPosition} />
            </Suspense>
          </Canvas>
        </div>
        <main>
          <section className="h-[100vh] w-[100vw] flex flex-col sm:flex-row-reverse items-center justify-center">
            <div
              data-aos="fade-left"
              className="relative h-[200px] w-[160px] sm:mr-10 mb-10 sm:mb-10 hover:shadow-none shadow-[5px_5px_4px_0_rgba(255,255,255,0.5)]"
            >
              <Image src={avatar} alt="avatar" layout="fill" priority />
            </div>
            <p className="sm:mr-10">
              <span
                id="heroSpan1"
                className="text-lg dark:text-white text-black sm:text-xl"
              >
                Hello! <span className="text-4xl">{visitorName}</span>,
              </span>
              <br />
              <Herotyper />
            </p>
            <svg
              className={`fill-white absolute w-full bottom-[3rem]`}
              width="24"
              height="24"
              viewBox="0 0 16 16"
            >
              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
            </svg>
          </section>
          <div
            className=" h-[80vh] w-[80vw] max-h-[20em] max-w-[35em] mx-auto  p-3 relative bg-[#202020b6] shadow-[15px_15px_0_-6px_rgba(255,255,255,0.5)]"
            data-aos="fade-up"
          >
            <span className="border rounded-full bg-red absolute left-[1.5rem] w-5 h-5"></span>
            <span className="border rounded-full bg-yellow absolute left-[3.2rem] w-5 h-5"></span>
            <span className="border rounded-full bg-green absolute left-[5rem] w-5 h-5"></span>
            <section className="flex justify-center h-full text-[#00ff11] flex-col mt-5 p-5">
              <span className="text-base sm:text-lg">root@kamalkashyap:#~</span>
              <h1 className="text-lg sm:text-xl md:text-2xl mb-4">
                Are you a Linux Freak just like me?
              </h1>
              <p className="text-base md:text-xl">
                Experience terminal version of this site{' '}
                <Link href="/terminal">
                  <a className="underline">here</a>
                </Link>
                .
              </p>
            </section>
          </div>
          <section className="m-auto max-w-5xl p-4 sm:p-12">
            <h1
              data-aos="fade-right"
              className="dark:text-transparent stroke text-black text-2xl sm:text-3xl xl:text-4xl font-bold"
            >
              How can i be usefull for your business?
            </h1>
            <p className="mb-10">
              If innovation and creativity is in your list, I will definitely be
              usefull to you. My strongest suit is the creation of creative
              designs to retain users as well as boost their experience at the
              same time.
            </p>
            <p>
              Creating unique, innovative and creative web app is what separates
              me out from the crowd of front end developers.
            </p>
            <h1
              data-aos="fade-right"
              className="dark:text-transparent stroke text-black text-2xl sm:text-3xl xl:text-4xl  font-bold"
            >
              Why its worth working with me?
            </h1>
            <h2 className="dark:text-white text-black text-xl sm:text-2xl xl:text-3xl">
              From scratch
            </h2>
            <p>
              I develop websites using HTML/CSS/JS, creat-react-app or next.js
              depending upon requirement or user needs.I do everything from from
              scratch which allows me to make the webapp look exactly how you
              want it.
            </p>
            <h2 className=" dark:text-white text-black text-xl sm:text-2xl xl:text-3xl">
              Tech
            </h2>
            <p>
              I works with most loved js library out there(react).Also I&#39;m
              familiar with most of the front-end libraries and framework out of
              the box (from tailwindcss, barba.js to three.js).
            </p>
            <h2 className="dark:text-white text-black text-xl sm:text-2xl xl:text-3xl">
              Trends
            </h2>
            <p>
              If trendy or bleeding edge is your type. Then I can load your web
              app with all new front end trends whether its page transition,
              liquid scroll or cool looking 3d models.
            </p>
            <h2 className="dark:text-white text-black text-xl sm:text-2xl xl:text-3xl">
              Clients
            </h2>
            <p>
              I work with individual clients, growing startups, medium
              businesses and everything in between.
            </p>
            <section className="flex mt-20">
              <div className="relative h-[160px] w-[120px]  mr-5">
                <Image
                  alt="avatar"
                  src={avatar}
                  layout="fill"
                  className="hover:grayscale"
                />
              </div>
              <div className="relative h-[160px] w-[120px]">
                <Image
                  alt="avatar"
                  src={avatar}
                  layout="fill"
                  className="grayscale hover:grayscale-0"
                />
              </div>
            </section>
          </section>
        </main>
      </Layout>
    </>
  );
}
