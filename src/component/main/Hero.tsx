import ButtonGradient from "../shared/ButtonGradient";
import GradientText from "../shared/GradientText";
import RevealAnimation from "../shared/RevealAnimation";
import Dop from "../../assets/images/updated-canva-ai-me.svg";
// import Dop from "../../assets/images/ai-me-original.jpg";
import Wave from "../../assets/images/waving.png";
import Point from "../../assets/images/point.png";
import ButtonFill from "../shared/ButtonFill";

type HeroType = {
  darkMode: boolean;
};

const Hero = ({ darkMode }: HeroType) => {
  return (
    <div className="p-6 md:p-10 w-full flex flex-col md:flex-row gap-4 min-h-[90vh]">
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div className="text-md md:text-lg font-secondary flex gap-3">
          Hello There! <img src={Wave} alt="wave-icon" width="26" /> I am
        </div>
        <RevealAnimation leftToRight={true}>
          <GradientText
            text="Randolph Mayson Dy"
            classes="text-6xl md:text-8xl font-main my-2 font-bold"
          />
        </RevealAnimation>
        <div className="text-2xl md:text-4xl my-2 font-semibold ">
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
            absoluteClasses={`${
              !darkMode ? "bg-dark" : "bg-[#aaa]"
            }`}
            relativeClasses={`${
              !darkMode ? "border-dark bg-white text-dark" : "border-white bg-dark text-white"
            }`}
            onClick={() => window.open("mailto:mayson.dy@gmail.com")} />
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-transparent flex justify-center items-center z-10 relative">
        <RevealAnimation rightToLeft={true}>
          <img
            src={Dop}
            alt="profile"
            className={`object-cover md:px-20 w-full`}
          />
        </RevealAnimation>
      </div>
    </div>
  );
};

export default Hero;
