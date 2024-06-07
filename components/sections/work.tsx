"use client";
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { projects } from "@/constants";
import { GeistMono } from "geist/font/mono";
import Container from "../ui/container";

const useCalcObjectPosition = (scaledX: any) => {
  const startX = -2820 * 2;
  const endX = 0;
  const startPosition = "0%";
  const endPosition = "100%";
  return useTransform(scaledX, [startX, endX], [startPosition, endPosition]);
};

const Work = () => {
  const x = useMotionValue(0);
  const scaledX = useTransform(x, (value) => value * 2);
  const objectPositionX = useCalcObjectPosition(scaledX);

  return (
    <section
      id="work"
      className={`relative min-h-svh overflow-x-hidden flex items-center text-small uppercase ${GeistMono.className}`}
    >
      <Container className="w-full">
        <motion.div
          drag="x"
          style={{ x }}
          dragConstraints={{ right: 0, left: -2820 }}
          dragTransition={{ power: 0.2, timeConstant: 300, restDelta: 0.005 }}
          className="transform flex gap-[10.472vmin]  cursor-grab"
        >
          {projects.map((project, idx) => (
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
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Work;
