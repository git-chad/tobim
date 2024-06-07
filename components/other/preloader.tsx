import React from "react";
import { motion } from "framer-motion";
import {
  slideOut,
  tobiA,
  mA,
} from "@/lib/preloader";

const Preloader = () => {
  return (
    <motion.div
      variants={slideOut}
      initial="initial"
      exit="exit"
      className="fixed top-0 left-0 z-[99] h-svh w-screen bg-secblack text-secwhite flex items-center justify-center"
    >
      <div className="overflow-hidden relative flex items-center justify-center w-[600px] font-zarathustra text-heading">
        <motion.p 
          variants={tobiA}
          initial="initial"
          animate="animate"
          exit="exit"
        >tobi</motion.p>
        <motion.p 
          variants={mA}
          initial="initial"
          animate="animate"
          exit="exit"
          className="bg-secblack w-[3ch] translate-x-[-76%]">m.</motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;