import React, { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideOut, tobiA, mA } from "@/lib/preloader";

const Preloader = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, [])

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

  const curve = {
    initial: {
        d: initialPath,
        transition: {duration: 0.7, ease: [0.77,0,0.18,1]}
    },
    exit: {
        d: targetPath,
        transition: {duration: 0.7, ease: [0.77,0,0.18,1], delay: 0.1}
    }
}

  return (
    <motion.div
      variants={slideOut}
      initial="initial"
      exit="exit"
      className="fixed top-0 left-0 z-[99] h-svh w-screen bg-secblack text-secwhite flex items-center justify-center"
    >
      {dimension.height > 0 && (
        <>
          <div className="overflow-hidden relative flex items-center justify-center ml-[82px] font-zarathustra text-heading">
            <motion.p
              variants={tobiA}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              tobi
            </motion.p>
            <motion.p
              variants={mA}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-secblack w-[3ch] translate-x-[-76%]"
            >
              m.
            </motion.p>
          </div>
          <svg className="z-[-1] absolute top-0 left-0 w-full h-[120%]">
            <motion.path variants={curve} initial="initial" exit="exit" fill="#242424" d={initialPath}></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Preloader;
