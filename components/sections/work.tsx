"use client";
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { projects } from "@/constants";
import { GeistMono } from "geist/font/mono";

const Work = () => {
  const x = useMotionValue(0);
  const scaledX = useTransform(x, (value) => value * 2);

  const calcObjectPosition = () => {
    const startX = -2820 * 2;
    const endX = 0;
    const startPosition = "0%";
    const endPosition = "100%";
    return useTransform(scaledX, [startX, endX], [startPosition, endPosition]);
  };

  return (
    <section
      id="work"
      className={`relative min-h-screen overflow-x-hidden text-small uppercase ${GeistMono.className}`}
    >
      <motion.div
        drag="x"
        style={{ x }}
        initial={{ y: "-50%" }}
        animate={{ x: "-50%", y: "-50%" }}
        dragConstraints={{ right: 0, left: -2820 }}
        dragTransition={{ power: 0.2, timeConstant: 300, restDelta: 0.005 }}
        className="absolute transform flex gap-[10.472vmin] left-[20%] top-1/2 translate-x-[-50%] translate-y-[-50%] cursor-grab"
      >
        {projects.map((project, idx) => {
          const objectPositionX = calcObjectPosition();

          return (
            <div key={idx}>
              <figure className="overflow-clip">
                <motion.img
                  alt={project.name}
                  src={project.image}
                  className="h-[64.72vmin] min-w-[88.61vmin] object-cover scale-125 pointer-events-none"
                  style={{ objectPosition: objectPositionX }}
                />
              </figure>
              <div className={`grid grid-cols-8 mt-4`}>
                <span className="col-span-2">project - {project.name}</span>
                <span className="col-start-4 col-span-1">{project.year}</span>
                <span className="col-span-2 col-start-7 text-end">
                  agency - {project.agency}
                </span>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Work;
