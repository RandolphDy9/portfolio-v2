import GradientText from "../shared/GradientText";
import RevealAnimation from "../shared/RevealAnimation";
import Dop from "../../assets/images/coding-bg-me4.svg";
import Wave from "../../assets/images/waving.png";
import Point from "../../assets/images/point.png";
import ButtonFill from "../shared/ButtonFill";
import { motion } from "framer-motion";

type HeroType = {
  darkMode: boolean;
};

const Hero = ({ darkMode }: HeroType) => {
  return (
    <div className="px-6 md:px-10 w-full flex flex-col md:flex-row gap-8 min-h-[90vh]">
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div className="text-md md:text-lg font-secondary flex gap-3">
          Hello There! <img src={Wave} alt="wave-icon" width="26" /> I am
        </div>
        <RevealAnimation leftToRight={true}>
          <GradientText
            text="Randolph Mayson Dy"
            classes="text-5xl md:text-7xl font-main my-2 font-bold"
          />
        </RevealAnimation>
        <div className="text-xl md:text-3xl my-2 font-semibold ">
          <RevealAnimation>
            I build digital experiences for the online world.
          </RevealAnimation>
        </div>
        <div className="text-md md:text-xl font-secondary my-2">
          <RevealAnimation>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-4">
                <img src={Point} alt="point" width="24" />
                <div>Crafting seamless web experiences</div>
              </div>
              <div className="flex flex-row gap-4">
                <img src={Point} alt="point" width="24" />
                <div>Ensuring responsiveness and accessibility</div>
              </div>
              <div className="flex flex-row gap-4">
                <img src={Point} alt="point" width="24" />
                <div>Optimizing performance</div>
              </div>
            </div>
            {/* Crafting web visuals, interactivity, and frontend tech for a
            seamless user experience, ensuring responsiveness, accessibility, and optimal performance. */}
          </RevealAnimation>
        </div>
        <div className="flex flex-row my-4">
          <ButtonFill
            label="Contact Me"
            absoluteClasses={`${darkMode ? "bg-dark text-white border-white hover:shadow-[4px_4px_0px_white]" : "bg-white text-dark border-dark hover:shadow-[4px_4px_0px_black]"}`}
            onClick={() => window.open("mailto:mayson.dy@gmail.com")}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-transparent flex justify-center items-center z-10 relative floating">
        <motion.div
          initial={{ y: 0 }} // Initial position
          animate={{ y: 10, transition: { yoyo: Infinity, duration: 2 } }} // Animate the 'y' position to create a floating effect
          whileHover={{ scale: 1.05 }} // Enlarge the image on hover
        >
          <RevealAnimation rightToLeft={true}>
            <img src={Dop} alt="profile" className={`object-cover w-full`} />
          </RevealAnimation>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
