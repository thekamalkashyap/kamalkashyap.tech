import Navbar from '../components/navbar/index';
import Link from 'next/link';
import ImpossibleButton from '../components/impossiblebutton';
import Herotyper from '../components/heroTyper';
import Image from 'next/image';
import avatar from '../../public/avatar.jpg';
import { motion } from 'framer-motion';

export default function Index({ visitorName }) {
  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -200, y: 0 },
          enter: { opacity: 1, x: 0, y: 0 },
          exit: { opacity: 0, x: 0, y: -100 },
        }} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: 'linear' }} // Set the transition to linear
        className=""
      >
        <Navbar />
        <ImpossibleButton />
        <main>
          <section className="h-[100vh] w-[100vw] flex flex-col sm:flex-row-reverse items-center justify-center">
            <div
              data-aos="fade-left"
              className="relative rounded-xl shadow-sm shadow-black h-[200px] w-[150px] sm:h-[280px] sm:w-[210px] sm:mr-10 mb-10 sm:mb-0"
            >
              <Image
                src={avatar}
                alt="avatar"
                layout="fill"
                className=" rounded-xl"
                priority
              />
            </div>
            <p className="sm:mr-10">
              <span
                id="heroSpan1"
                className="text-lg dark:text-white text-black sm:text-xl"
              >
                hi! {visitorName},
              </span>
              <br />
              <Herotyper />
              <span className="absolute right-[-2rem] bottom-[15vh] rotate-90">
                this way =&gt;
              </span>
            </p>
          </section>
          <div
            className="terminal p-3 relative bg-black shadow-lg shadow-black"
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
          <section className="m-auto max-w-5xl p-12">
            <h1
              data-aos="fade-right"
              className="dark:text-blue text-black text-2xl sm:text-3xl xl:text-4xl font-bold"
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
              className="dark:text-[#08fdd8] text-black text-2xl sm:text-3xl xl:text-4xl  font-bold"
            >
              Why its worth working with me?
            </h1>
            <h2
              data-aos="fade"
              className="dark:text-white text-black text-xl sm:text-2xl xl:text-3xl"
            >
              From scratch
            </h2>
            <p>
              I develop websites using HTML/CSS/JS, creat-react-app or next.js
              depending upon requirement or user needs.I do everything from from
              scratch which allows me to do things my way(creative).
            </p>
            <h2
              data-aos="fade"
              className=" dark:text-white text-black text-xl sm:text-2xl xl:text-3xl"
            >
              Tech
            </h2>
            <p>
              I works with most loved js library out there(react).Also I&#39;m
              familiar with most of the front end libraries and framework out of
              the box (from bootstrap,tailwind to barba.js).
            </p>
            <h2
              data-aos="fade"
              className="dark:text-white text-black text-xl sm:text-2xl xl:text-3xl"
            >
              Trends
            </h2>
            <p>
              If trendy or bleeding edge is your type. Then I can load your web
              app with all new front end trends whether its page transition or
              liquid scroll.
            </p>
            <h2
              data-aos="fade"
              className="dark:text-white text-black text-xl sm:text-2xl xl:text-3xl"
            >
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
                  className=" rounded-lg hover:grayscale"
                />
              </div>
              <div className="relative h-[160px] w-[120px]">
                <Image
                  alt="avatar"
                  src={avatar}
                  layout="fill"
                  className="rounded-lg grayscale hover:grayscale-0"
                />
              </div>
            </section>
          </section>
        </main>
      </motion.div>
    </>
  );
}
