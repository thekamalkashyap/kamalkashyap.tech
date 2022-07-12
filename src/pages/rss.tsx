import Navbar from '../components/navbar';
import { motion } from 'framer-motion';

export default function Rss({ visitorName }) {
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
        <main className="p-10  max-w-3xl m-auto">
          <section className="mb-7">
            <p>
              <span>hi! {visitorName},</span>
              <br />
              <span>I am Kamal Kashyap</span>
              <br />
              <span>A Creative Developer!</span>
              <br />
            </p>
          </section>
          <section>
            <div className="mb-10">
              <h1 className="mb-6">How can i be usefull for your business?</h1>
              <p>
                If innovation and creativity is in your list, I will definitely
                be usefull to you. My strongest suit is the creation of creative
                designs to retain users as well as boost their experience at the
                same time.
              </p>
              <p>
                Creating unique, innovative and creative web app is what
                separates me out from the crowd of front end developers.
              </p>
            </div>
            <div>
              <h1 className="mb-6">Why its worth working with me?</h1>
              <h2 className="mb-6">From scratch</h2>
              <p>
                I develop websites using HTML/CSS/JS, creat-react-app or next.js
                depending upon requirement or user needs.I do everything from
                from scratch which allows me to do things my way(creative).
              </p>
              <h2 className="mb-6">Tech</h2>
              <p>
                I works with most loved js library out there(react).Also I&#39;m
                familiar with most of the front end libraries and framework out
                of the box (from bootstrap,tailwind to barba.js).
              </p>
              <h2 className="mb-6">Trends</h2>
              <p>
                If trendy or bleeding edge is your type. Then I can load your
                web app with all new front end trends whether its page
                transition or liquid scroll.
              </p>
              <h2 className="mb-6">Clients</h2>
              <p>
                I work with individual clients, growing startups, medium
                businesses and everything in between.
              </p>
            </div>
          </section>
        </main>
      </motion.div>
    </>
  );
}
