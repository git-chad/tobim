import React from "react";
import Image from "next/image";
import logo from "@/public/logo/logo-black.svg";
import { Link } from "next-view-transitions";
import Container from "../ui/container";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="z-50 fixed top-0 left-0 w-full py-3">
      <Container className="flex items-center justify-between">
        <Image height={25.76} width={35.91} alt="logo" src={logo} />
        <nav className="flex items-center gap-[42px]">
          <a href="#work">work</a>
          <a href="#experience">experience</a>
          <a href="#about">about</a>
          <Link href="/contact">contact</Link>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
