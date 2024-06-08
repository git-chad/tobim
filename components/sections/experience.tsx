import React from "react";
import Container from "../ui/container";
import { skills } from "@/constants";
import notebookExp from "@/public/images/notebook-02.png";
import Image from "next/image";
import SubHeading from "../ui/subheading";

const Experience = () => {
  return (
    <section id="experience" className="min-h-svh flex flex-col justify-around">
      <Container className="relative min-h-full grid grid-cols-12 gap-4">
        <SubHeading text="experience" className="uppercase text-subheading font-semibold col-span-12 tracking-tighter"/>
        <p className="tracking-tighter col-span-4">
          I started in International Relations, seeking impact but found my true
          calling in coding and web design. A diverse skill set, from sales to
          music production, led me to programming in 2020, and the rest is
          history.
        </p>
        <div className="col-span-2 col-start-7 leading-[0.975rem] tracking-tighter text-small f">
          <h3 className="font-semibold">work</h3>
          <h4 className="font-semibold mt-[26px]">
            Ssr Frontend Developer <br /> Set & Forget <br /> 2023-Present
          </h4>
          <p>
            <br />
            Senior programmer responsible for developing multiple SaaS
            applications and contributing to key design decisions. <br />
            <br /> Some cool things I worked on are a code editor for Sheets
            with integrated Copilot, and a financial platform to automate
            templating with QuickBooks data. I also made my company&apos;s
            website, which was shown at Google Next 2024.
          </p>
          <h4 className="font-semibold mt-[26px]">
            Fullstack Developer <br /> Freelance <br /> 2021-Present
          </h4>
          <p>
            <br />
            Worked in multiple projects with a strong focus on web design and
            interactive design, including mobile applications.
          </p>
        </div>

        <div className="col-span-2 leading-[0.975rem] tracking-tighter text-small f">
          <h3 className="font-semibold">education</h3>
          <h4 className="font-semibold mt-[26px]">
            Certification in Tech Development & Frontend Specialization
          </h4>
          <p>
            <br />
            Digital House 2021-2024
          </p>
          <h4 className="font-semibold mt-[26px]">
            Bachelor of Science in International Relations
          </h4>
          <p>
            <br />
            Universidad del Salvador
            <br />
            2016-2020
          </p>
          <h4 className="font-semibold mt-[26px]">Music Production</h4>
          <p>
            <br />
            EMBA
            <br />
            2017-2020
          </p>
        </div>
        <div className="col-span-2 leading-[0.975rem] tracking-tighter text-small">
          <h4 className="font-semibold">skills</h4>
          <ul className="list-none mt-[26px]">
            {skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="absolute w-[43%] -bottom-0 left-0">
          <div className="absolute bg-gradient-to-t from-priwhite via-transparent to-transparent w-full h-full z-20" />
          <Image alt="I have like 10 notebooks" src={notebookExp} />
        </div>
      </Container>
    </section>
  );
};

export default Experience;
