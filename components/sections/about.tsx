import React from "react";
import Container from "../ui/container";
import Image from "next/image";
import toti from "@/public/images/toti.jpg";
import notebook from "@/public/images/notebook-01.png";

const About = () => {
  return (
    <section id="about" className="min-h-svh flex flex-col mt-[159px]">
      <Container className="relative min-h-full grid grid-cols-12 gap-4 tracking-tighter leading-[1.075rem]">
        <aside className="col-span-7 grid grid-cols-7 gap-4">
          <h2 className="col-span-6 uppercase text-subheading font-semibold leading-none h-max">
            fuel to burn, roads to drive
          </h2>

          <h3 className="font-semibold text-title col-span-3 mt-[42px]">
            crossroads
          </h3>
          <p className="col-span-3 col-start-1 text-justify mt-[26px]">
            I dove into International Relations in 2016, fueled by youthful
            excitement and a pocketful of dreams about changing the world. But
            by the third year, the thrill was gone. The lectures felt like they
            were on repeat, and I certainly knew I couldn't work in this field
            until I was 75. So, I threw a curveball into my routine—music
            production. Suddenly, my days were split between theories of war
            diplomacy and miking up amps.
          </p>
          <p className="col-span-3 text-justify mt-[26px]">
            Then the world hit pause. The pandemic locked us all down, but it
            also cracked open a door. Stuck at my desk, I was itching for
            something new, something real. That's when I found it—a course in
            web development. It wasn't love at first sight, but something about
            creating something out of text stuck. I thought, "Why not?" and let
            myself fall into it.
          </p>
          <h3 className="font-semibold text-title col-span-7 mt-[42px]">
            break on through (to the other side)
          </h3>
          <p className="col-span-6 text-justify mt-[26px]">
            Before I knew it, I was hooked. By 2022, web development wasn't just
            a fling; it was a full-time affair. The beginner stuff was kid's
            play, and I craved more—more tech, more tools, more everything. I
            taught myself, chasing the thrill of each new line of code and the
            satisfaction of a sleek, functioning design. Let's face it, if
            something looks like shit, no one's going to give it a second
            glance, no matter how brilliant it might be under the hood. I
            decided to make stuff that not only worked like a dream but looked
            damn good doing it.
          </p>
          <div className="relative col-span-7 grid grid-cols-7 h-[800px]">
            <div className="col-span-3 col-start-4">
              <h3 className="font-semibold text-title mt-[42px]">
                ramble on
              </h3>
              <p className="text-justify mt-[26px]">
                When I'm not wrestling with code, I'm probably gaming, jamming
                on my guitar, or mixing tracks—anything where I can lose myself
                in the flow. <br />
                <br /> I love days with my dogs, nights with a nice cold beer,
                stepping on the gas (La Perla Negra), and the occasional scare
                from a horror movie when I'm feeling brave (pretty much always).{" "}
                <br />
                <br /> I've got a solid crew: family, friends, and my
                girlfriend. They're the real reason I kept chasing a meaningful
                path, the ones who keep me grounded and push me to keep at this
                wild ride. Without them, I'm just another guy staring at a
                screen.
              </p>
            </div>
            <div className="absolute -left-8 top-[26px] mix-blend-multiply">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-priwhite via-transparent to-transparent" />
              <Image
                src={notebook}
                alt="Dear diary. My dream is to one day work at basement, for real"
              />
            </div>
          </div>
        </aside>
        <div className="col-span-5 col-start-8 rounded">
          <Image alt="toti's selfie" src={toti} />
        </div>
      </Container>
    </section>
  );
};

export default About;