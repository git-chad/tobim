"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/logo/logo-black.svg";
import logoLight from "@/public/logo/logo-white.svg"
import Link from "next/link";
import Container from "../ui/container";
import { GeistMono } from "geist/font/mono";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="z-50 fixed top-0 left-0 w-full py-3 text-priblack dark:text-priwhite">
      <Container className="flex items-center justify-between">
        <Link href={"/"}>
          {darkMode ? (
            <Image height={25.76} width={35.91} alt="logo" src={logoLight} />
          ) : (
            <Image height={25.76} width={35.91} alt="logo" src={logo} />
          )}
        </Link>
        <nav className={`flex items-center gap-[42px] uppercase ${GeistMono.className}`}>
          <a href="#work">work</a>
          <a href="#experience">experience</a>
          <a href="#about">about</a>
          <button onClick={toggleDarkMode} className="uppercase">{darkMode ? "too dark" : "too light"}</button>
          <Link className="font-semibold" href="/contact">contact</Link>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
