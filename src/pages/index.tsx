import Navbar from '../components/navbar';
import Link from 'next/link';
import Image from 'next/image';
import ImpossibleButton from '../components/impossiblebutton';

export default function Index({ visitorName }) {
  return (
    <>
      <Navbar />
      <ImpossibleButton />
      <main id="home" className="text-lg bg-black text-gray-300">
        <section className="pageSlides flex flex-col sm:flex-row-reverse items-center justify-center p-8">
          <div className="relative h-[150px] w-[150px] sm:h-[250px] sm:w-[250px] mb-10 sm:mb-0 rounded-full shadow-[6px_3px_20px_-12px_rgba(255,255,255,1)]">
            <Image
              src="/avatar.jpg"
              alt="avatar"
              className="rounded-full"
              layout="fill"
            />
          </div>
          <div className="mr-10">
            <p>
              <span className="text-lg sm:text-xl">hi! {visitorName},</span>
              <br />
              <span className="text-yellow-200 font-bold text-2xl sm:text-4xl tracking-tighter mb-2">
                I am Kamal Kashyap
              </span>
              <br />
              <span className="text-xl sm:text-2xl">A Creative Developer!</span>
            </p>
          </div>
          <div className=" absolute right-[-1rem] bottom-[4rem] rotate-90 text-base ">
            This way =&gt;
          </div>
        </section>
        <section className="pageSlides flex justify-center items-center flex-col">
          <div className="terminal p-3 relative">
            <span className="border rounded-full bg-red-600 absolute left-[1rem] w-5 h-5"></span>
            <span className="border rounded-full bg-yellow-500 absolute left-[2.5rem] w-5 h-5"></span>
            <span className="border rounded-full bg-green-500 absolute left-[4rem] w-5 h-5"></span>
            <div className=" flex justify-center items-center h-full flex-col mt-5 p-5">
              <h1 className="text-lg sm:text-xl md:text-2xl text-center">
                are you a Linux Freak just like me?
              </h1>
              <h2 className="text-base md:text-xl text-center">
                experience terminal version of this site{' '}
                <Link href="/terminal">
                  <a className="underline">here</a>
                </Link>
                .
              </h2>
            </div>
          </div>
        </section>
        <section className="pageSlides flex flex-col justify-center items-center p-8 sm:px-[15%] md:px-[20%] lg:px-[25%]">
          <h1 className="mb-10  md:mb-[3rem] text-yellow-200 text-xl md:text3xl xl:text-4xl font-bold">
            How can i be usefull for your business?
          </h1>
          <p className="mb-4">
            If innovation and creativity is in your list, I will definitely be
            usefull to you. My strongest suit is the creation of creative
            designs to boost up user experience.
          </p>
          <p className="text-right">
            Creating unique sites is what separates me from the crowd.
          </p>
        </section>
        <section className="pageSlides">
          <section className="carousel">
            <section className="carouselSlides flex flex-col justify-center items-center p-8 sm:px-[15%] md:px-[20%] lg:px-[25%]">
              <h1 className="mb-10 md:mb-[3rem] text-yellow-200 text-xl md:text3xl xl:text-4xl font-bold">
                Why its worth working with me?
              </h1>
              <h2 className="m-10 text-yellow-100 text-center">From scrath</h2>
              <p>
                I develop websites using HTML/CSS/JS, creat-react-app or next.js
                depending upon requirement or user needs.I do everything from
                from scratch which allows me to do things my way(creative).
              </p>
              <p>&rarr;</p>
            </section>
            <section className="carouselSlides flex flex-col justify-center items-center p-8 sm:px-[15%] md:px-[20%] lg:px-[25%]">
              <h2 className="m-10 text-yellow-100 text-center">tech</h2>
              <p>
                I works with most loved js library out there(react).Also i am
                familiar with most front end libraries and framework out of the
                box(from bootstrap to barba.js).
              </p>
              <p>&rarr;</p>
            </section>
            <section className="carouselSlides flex flex-col justify-center items-center p-8 sm:px-[15%] md:px-[20%] lg:px-[25%]">
              <h2 className="m-10 text-yellow-100 text-center">trends</h2>
              <p>
                If trendy or bleeding edge is your type. Then i can make your
                site bleeding edge with all new front end trends wheter its page
                transition or liquid scroll.
              </p>
              <p>&rarr;</p>
            </section>
            <section className="carouselSlides flex flex-col justify-center items-center p-8 sm:px-[15%] md:px-[20%] lg:px-[25%]">
              <h2 className="m-10 text-yellow-100 text-center">Clients</h2>
              <p>
                I work with individual clients, growing startups, medium
                businesses and. everything in between
              </p>
            </section>
          </section>
        </section>
      </main>
    </>
  );
}
