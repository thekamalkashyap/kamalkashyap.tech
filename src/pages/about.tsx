import Image from 'next/image';
import avatar from '../../public/avatar.jpg';
import Navbar from '../components/navbar';
import { motion } from 'framer-motion';
export default function About() {
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
        <div className="px-10 sm:px-10 lg:px-16 py-10 text-lg max-w-4xl m-auto mb-10">
          <div className="flex items-center mb-10" data-aos="fade-left">
            <div className="relative h-20 w-16 mr-5">
              <Image
                src={avatar}
                alt="avatar"
                layout="fill"
                className=" rounded-2xl"
              />
            </div>
            <div>
              <h1 className="text-[#08fdd8] font-bold text-xl m-0">
                Kamal Kashap
              </h1>
              <h2 className=" text-gray-600 m-0">Creative developer</h2>
            </div>
          </div>
          <p className="mb-10">
            The name is kamal (which is short for kamal kumar or kamal kashyap,
            depending on where you know me from). I am a 17-year-old North
            Indian with a tech sort of background and a lot to say about the
            trends and direction of the scientific world.
          </p>
          <p>
            I&#39;m very dedicated to learn new things and to truly belive that
            you should never stop learning. I enjoy creating different things,
            whether that be websites, application or even non technical stuff
            like paintings and sketches.
          </p>
        </div>
      </motion.div>
    </>
  );
}
