import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Work from "@/components/sections/work";

export default function Home() {
  return (
    <main className="bg-priwhite min-h-svh text-secblack">
      <Hero />
      <Work />
      <Experience />
      <About />
    </main>
  );
}
