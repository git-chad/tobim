import React from "react";
import { motion } from "framer-motion";
import { slideOut, tAnimation, obiAnimation, mAnimation } from "@/lib/preloader";

const Preloader = () => {
  return (
    <motion.div
      variants={slideOut}
      initial="initial"
      exit="exit"
      className="fixed top-0 left-0 z-[99] h-svh w-screen bg-secblack text-secwhite flex items-center justify-center"
    >
      <div className="overflow-hidden flex items-center justify-center w-[600px]">
        <motion.span
          variants={tAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          className="text-heading font-zarathustra"
        >
          t
        </motion.span>
        <motion.span
          variants={obiAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          className="text-heading font-zarathustra"
        >
          obi 
        </motion.span>
        <motion.span
          variants={mAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          className="text-heading font-zarathustra"
        >
          m.
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Preloader;