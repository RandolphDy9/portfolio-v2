import RevealAnimation from "../shared/RevealAnimation";
import Me from "../../assets/images/about-me-pic.jpg";
import ButtonFill from "../shared/ButtonFill";
// import Spline from "@splinetool/react-spline";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

type HeroType = {
  darkMode: boolean;
};

const Hero2 = ({ darkMode }: HeroType) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: targetRef });

  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);

  return (
    <motion.div
      ref={targetRef}
      style={{ opacity, scale }}
      className=" flex py-12 md:py-0 self-center w-full gap-8 md:min-h-[80vh] relative text-center"
    >
      <div className="flex flex-col justify-center gap-2">
        <div className="flex justify-center items-center gap-4 my-4">
          <div className="relative">
            <img className="w-16 h-16 rounded-full" src={Me} alt="" />
            {/* <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span> */}
          </div>
          <div className="flex flex-col items-start">
            <span
              className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium
      ${
        darkMode
          ? "bg-green-900/20 text-green-300"
          : "bg-green-200 text-green-900"
      }`}
            >
              <span
                className={`w-1.5 h-1.5 inline-block rounded-full
        ${darkMode ? "bg-green-300" : "bg-green-600"}`}
              ></span>
              Open for New Opportunities
            </span>
            <div className={`text-xl ${darkMode ? "text-light" : "text-dark"}`}>
              Randolph Mayson Dy
            </div>
            <div
              className={`${
                darkMode ? "text-gray-400" : "text-gray-600"
              } text-sm`}
            >
              Toronto, Canada
            </div>
          </div>
        </div>
        <div className="text-2xl md:text-4xl my-2 font-semibold">
          <RevealAnimation leftToRight={true}>
            <div className="bg-gradient-to-r from-from via-via to-to text-transparent bg-clip-text text-4xl md:text-6xl font-main font-bold">
              <TypeAnimation
                sequence={[
                  "Pixel-perfect frontend.",
                  1000,
                  "Real-world results.",
                  1000,
                ]}
                speed={10}
                repeat={Infinity}
              />
            </div>
          </RevealAnimation>
        </div>
        <div className="text-md md:text-lg font-secondary my-2">
          <RevealAnimation>
            <div className="flex flex-col gap-2 px-28">
              <div>
                I design and develop responsive websites that perform
                beautifully, load fast, and deliver value — using React, Angular
                & modern web tech.
              </div>
            </div>
          </RevealAnimation>
        </div>
        <div className="flex flex-row justify-center my-4 gap-4 z-10">
          <ButtonFill
            label="LET’S WORK TOGETHER"
            absoluteClasses={`${
              darkMode
                ? "bg-dark text-light border-light hover:shadow-[4px_4px_0px_white]"
                : "bg-light text-dark border-dark hover:shadow-[4px_4px_0px_black]"
            }`}
            onClick={() => window.open("mailto:mayson.dy@gmail.com")}
          />
          <ButtonFill
            label="VIEW RESUME"
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
    </motion.div>
  );
};

export default Hero2;
