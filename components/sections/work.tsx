"use client";
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { projects } from "@/constants";

const Work = () => {
    
  return (
    <section className="relative min-h-svh overflow-x-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -2820 }}
          initial={{ x: "-50%", y: "-50%" }}
          animate={{ x: "-50%", y: "-50%" }}
          className="absolute transform flex gap-[6.472vmin] left-1/2 top-1/2 translate-x-0 translate-y-[-50%] cursor-grab"
        >
          {projects.map((project, idx) => (
            <div key={idx} className="overflow-clip">
              <img
                alt={project.name}
                src={project.image}
                className="h-[64.72vmin] min-w-[90.61vmin] object-cover object-[100%_50%] scale-110 pointer-events-none"
              />
            </div>
          ))}
        </motion.div>
    </section>
  );
};

export default Work;
