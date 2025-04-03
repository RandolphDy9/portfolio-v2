import RevealAnimation from "../shared/RevealAnimation";
import Wave from "../../assets/images/waving.png";
import Point from "../../assets/images/point.png";
import ButtonFill from "../shared/ButtonFill";
import { TypeAnimation } from "react-type-animation";
// import Spline from "@splinetool/react-spline";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from 'framer-motion';

type HeroType = {
  darkMode: boolean;
};

const Hero = ({ darkMode }: HeroType) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: targetRef });

  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);
  
  return (
    <motion.div ref={targetRef}
    style={{ opacity, scale }} className="px-6 flex py-12 md:py-0 justify-center w-full gap-8 md:min-h-[80vh] relative">
      {/* <div className="hidden md:absolute animate-blob md:block w-[1200px] h-[600px]">
        <Spline scene="https://prod.spline.design/wfXHkAgIdi1WVnH0/scene.splinecode" />
      </div> */}
      <div className="flex flex-col justify-center">
        <div className="text-md md:text-lg font-secondary flex">
          Hello There!{" "}
          <img src={Wave} alt="wave-icon" width="26" className="mx-2" /> I am
        </div>
        <RevealAnimation leftToRight={true}>
          <div className="bg-gradient-to-r from-from via-via to-to text-transparent bg-clip-text text-3xl md:text-6xl font-main my-2 font-bold">
            <TypeAnimation
              sequence={[
                "Randolph Mayson Dy",
                2000,
                "Front End Developer",
                2000,
              ]}
              speed={30}
              repeat={Infinity}
            />
          </div>
        </RevealAnimation>
        <div className="text-xl md:text-3xl my-2 font-semibold ">
          <RevealAnimation>
            I Create Impactful Digital Experiences for the Online World.
          </RevealAnimation>
        </div>
        <div className="text-md md:text-lg font-secondary my-2">
          <RevealAnimation>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-4">
                <img src={Point} alt="point" width="24" />
                <div>Designing scalable, responsive web solutions</div>
              </div>
              <div className="flex flex-row gap-4">
                <img src={Point} alt="point" width="24" />
                <div>Crafting intuitive user interfaces using React and Angular</div>
              </div>
              <div className="flex flex-row gap-4">
                <img src={Point} alt="point" width="24" />
                <div>Delivering performance-driven applications</div>
              </div>
              <div className="flex flex-row gap-4">
                <img src={Point} alt="point" width="24" />
                <div>Optimizing accessibility for diverse audiences</div>
              </div>
            </div>
          </RevealAnimation>
        </div>
        <div className="flex flex-row my-4 gap-4 z-10">
          <ButtonFill
            label="Connect"
            absoluteClasses={`${
              darkMode
                ? "bg-dark text-light border-light hover:shadow-[4px_4px_0px_white]"
                : "bg-light text-dark border-dark hover:shadow-[4px_4px_0px_black]"
            }`}
            onClick={() => window.open("mailto:mayson.dy@gmail.com")}
          />
          <ButtonFill
            label="Resume"
            absoluteClasses={`${
              darkMode
                ? "bg-dark text-light border-light hover:shadow-[4px_4px_0px_white]"
                : "bg-light text-dark border-dark hover:shadow-[4px_4px_0px_black]"
            }`}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1rTVn8PzX9I1fT7vI5hqWjQZqIGBiCmXQ/view?usp=sharing"
              )
            }
          />
        </div>
        {/* <div className="bg-gradient-to-r from-from via-via to-to h-4 md:h-10 shadow-lg filter blur-3xl"></div> */}
      </div>
      <div className="w-32"></div>
    </motion.div>
  );
};

export default Hero;
