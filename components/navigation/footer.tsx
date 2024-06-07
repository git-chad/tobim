import React from "react";
import Container from "../ui/container";
import { Link } from "next-view-transitions";
import { GeistMono } from "geist/font/mono";

const Footer = () => {
  return (
    <footer
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      className="relative h-[675px] bg-secwhite"
    >
      <div className="fixed bottom-0 h-[675px] w-full">
        <Container className={`grid grid-cols-12 text-secblack py-8  uppercase ${GeistMono.className}`}>
          <nav className="col-span-2 flex flex-col">
            <a href="#work">work</a>
            <a href="#experience">experience</a>
            <a href="#about">about</a>
            <Link href="/contact">contact</Link>
            <a href="#">back to top</a>
          </nav>
          <div className="col-span-2 flex flex-col">
            <a>Linkedin</a>
            <a>Github</a>
            <a>Calendly</a>
          </div>
          <p className="col-span-3 col-start-10 text-end">All rights reserved © 2024</p>
          <p className="text-heading font-zarathustra col-start-1 col-span-9 lowercase mt-[160px]">boo!</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
