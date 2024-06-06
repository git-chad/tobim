import React from "react";
import Container from "../ui/container";
import HeroInfo from "../ui/hero-info";
import macCable from "@/public/images/mac-cable.jpg"
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-svh flex flex-col justify-around overflow-clip">
      <Container className="relative grid grid-cols-12">
        <h1 className="font-zarathustra text-heading col-span-9 leading-[0.91] tracking-[3%]">
          Your not so typical fullstack developer
        </h1>
        <p className="col-start-1 col-span-5 text-title mt-[42px] tracking-tighter">
          Focused on design and functionality, creating impactful web
          experiences. Currently at Set & Forget, and available for freelance
          work.
        </p>
        <Image alt="where did that cable come from?" src={macCable} className="absolute -right-1 top-0 mix-blend-multiply opacity-80 pointer-events-none"/>
      </Container>
      <HeroInfo />
    </section>
  );
};

export default Hero;
