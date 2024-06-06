import React from "react";
import { GeistMono } from "geist/font/mono";
import Container from "./container";

const HeroInfo = () => {
  return (
    <div
      className={`col-span-12 uppercase text-small ${GeistMono.className}`}
    >
      <Container className="grid grid-cols-12">
        <p className="col-span-2">
          Tobias moccagatta Fullstack developer FIDELITY CO-FOUNDER
        </p>
        <p className="col-span-2 col-start-4">
          Web development <br /> Web design Interactive design
        </p>
        <p className="col-span-2 col-start-8">CURRENTLY AVAILABLE</p>
        <p className="col-span-3 col-start-10 text-end">
          Freelance 2021-Present <br /> Set & Forget 2023-Present <br />{" "}
          Dermasthetic 2018-2023
        </p>
      </Container>
    </div>
  );
};

export default HeroInfo;