import ButtonGradient from "../shared/ButtonGradient";
import GradientText from "../shared/GradientText";
import RevealAnimation from "../shared/RevealAnimation";
import Dop from "../../assets/images/ai-me-origin-nobg.png";
// import Dop from "../../assets/images/ai-me-original.jpg";
import Wave from "../../assets/images/waving.png";
import ButtonFill from "../shared/ButtonFill";

type HeroType = {
  darkMode: boolean;
};

const Hero = ({ darkMode }: HeroType) => {
  return (
    <div className="p-6 md:p-10 w-full flex flex-col md:flex-row gap-4 min-h-[90vh]">
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div className="text-md md:text-lg font-secondary flex gap-3">
          Hello There! <img src={Wave} alt="wave-icon" width="32" /> I am
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
            Crafting web visuals, interactivity, and frontend tech for a
            seamless user experience, ensuring
            <i className="fas fa-mobile-alt"></i> responsiveness,
            <i className="fas fa-universal-access"></i> accessibility, and
            <i className="fas fa-tachometer-alt"></i> optimal performance.
          </RevealAnimation>
          {/* <RevealAnimation>
            I create the visual and interactive components of a website that
            users see and interact with. This includes integrating the
            appropriate frontend technologies and tools, and ensuring that the
            website is responsive, accessible, and optimized for performance.
          </RevealAnimation> */}
        </div>
        <div className="flex flex-row my-4">
          {/* <ButtonGradient
            label="Contact Me"
            classes={`font-bold text-xl ${
              !darkMode ? "bg-light text-dark" : "bg-dark text-white"
            }`}
            onClick={() => window.open("mailto:mayson.dy@gmail.com")}
          /> */}

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
      <div className="w-full md:w-1/2 bg-transparent flex justify-center items-start z-10 relative">
        <RevealAnimation rightToLeft={true}>
          <img
            src={Dop}
            alt="profile"
            className={`object-cover md:px-20 w-full border-2 border-dark`}
          />
        </RevealAnimation>
        {/* <div className="bg-from rounded-2xl w-52 h-32 absolute right-5 top-10 flex justify-center items-center text-3xl text-center">
          30+ Projects
        </div>
        <div className="bg-to rounded-2xl w-32 h-32 absolute left-32">
          Text
        </div>
        <div className="bg-via rounded-2xl w-44 h-32 absolute left-10 bottom-10">
          Text
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
