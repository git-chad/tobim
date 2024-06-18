import React from "react";
import { GeistMono } from "geist/font/mono";
import Container from "./container";

const HeroInfo = () => {
  return (
    <div className={`col-span-12 uppercase text-small ${GeistMono.className}`}>
      <Container className="grid grid-cols-12">
      <p className="col-span-2">
          Tobias moccagatta Fullstack developer <br/> working on <span className="bg-secblack dark:bg-secwhite">fidelity</span>
        </p>
        <p className="col-span-2 col-start-4">
          Web development <br /> Web design Interactive design
        </p>
        <div className="col-span-2 col-start-8 flex">
          <p >AVAILABLE SEPT 2024</p>
          <div className="size-1.5 rounded-full bg-amber-400 ml-1 animate-pulse"/>
        </div>
        <p className="col-span-3 col-start-10 text-end">
          Freelance 2021-Present <br /> Set & Forget 2023-Present <br />{" "}
          Dermasthetic 2018-2021
        </p>
      </Container>
    </div>
  );
};

export default HeroInfo;
