import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode;
};

const variants = {
  hidden: { opacity: 0, y: -200 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 200 },
};

const Layout = ({ children }: Props): JSX.Element => (
  <motion.div
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ type: 'linear', ease: 'easeOut', duration: 0.5 }}
    className=" "
  >
    {children}
  </motion.div>
);

export default Layout;
