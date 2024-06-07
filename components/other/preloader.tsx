import React from "react";
import { motion } from "framer-motion";
import { slideOut } from "@/lib/preloader";

const Preloader = () => {
  return (
    <motion.div
      variants={slideOut}
      initial="initial"
      exit="exit"
      className="fixed top-0 left-0 z-[99] h-svh w-screen bg-secblack text-secwhite flex items-center justify-center"
    >
      <p className="text-heading font-zarathustra">tm.</p>
    </motion.div>
  );
};

export default Preloader;
