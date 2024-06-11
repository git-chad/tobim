"use client";
import Preloader from "@/components/other/preloader";
import About from "@/components/sections/about";
import AllProjects from "@/components/sections/all-projects";
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
    <main className={`bg-priwhite dark:bg-priblack min-h-svh text-secblack dark:text-secwhite transition-colors`}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Hero />
      <Work />
      <AllProjects />
      <Experience />
      <About />
    </main>
  );
}
