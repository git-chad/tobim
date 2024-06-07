import React from "react";
import Container from "../ui/container";
import HeroInfo from "../ui/hero-info";
import macCable from "@/public/images/mac-cable.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { container, item } from "@/lib/hero";

const Hero = () => {
 
  return (
    <section className="h-svh flex flex-col justify-around overflow-clip">
      <Container className="relative grid grid-cols-12">
        <motion.div
          className="font-zarathustra text-heading col-span-9 leading-[0.91] tracking-[3%] overflow-hidden"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {["Your not so", "typical fullstack", "developer."].map(
            (text, index) => (
              <div key={index} className="overflow-hidden">
                <motion.p custom={index} variants={item}>
                  {text}
                </motion.p>
              </div>
            )
          )}
        </motion.div>
        <motion.p initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1.3, delay: 2.6}}} className="col-start-1 col-span-5 text-title mt-[42px] tracking-tighter">
          Focused on design and functionality, creating impactful web
          experiences. Currently at Set & Forget, and available for freelance
          work.
        </motion.p>
        <Image
          alt="where did that cable come from?"
          src={macCable}
          className="absolute -right-1 top-0 mix-blend-multiply opacity-80 pointer-events-none"
        />
      </Container>
      <HeroInfo />
    </section>
  );
};

export default Hero;
