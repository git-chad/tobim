"use client";
import Preloader from "@/components/other/preloader";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Work from "@/components/sections/work";
import { AnimatePresence } from "framer-motion";
import { useLayoutEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <main className={`bg-priwhite min-h-svh text-secblack`}>
      {/* <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence> */}
      <Hero />
      <Work />
      <Experience />
      <About />
    </main>
  );
}
