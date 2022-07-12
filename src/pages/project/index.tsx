import projectsData from './projectsData.json';
import Card from './card';
import Navbar from '../../components/navbar';
import { motion } from 'framer-motion';
export default function Projects() {
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
        <div className="space-y-2 pt-6 p-10 pb-8 md:space-y-5 max-w-4xl m-auto">
          <h1 className="my-5 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-[#08fdd8] sm:text-4xl sm:leading-10 md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Projects i made while sitting for hours
          </p>
        </div>
        <div className="container p-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
