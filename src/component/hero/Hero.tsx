import ButtonGradient from "../shared/ButtonGradient";
import GradientText from "../shared/GradientText";
import RevealAnimation from "../shared/RevealAnimation";
import Dop from "../../assets/images/pinatubo-cropped.jpeg";

type HeroType = {
  darkMode: boolean;
};

const Hero = ({ darkMode }: HeroType) => {
  return (
    <div className="p-10 w-full flex gap-4 min-h-[90vh]">
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div className="text-lg font-secondary">Hi, My name is</div>
        {/* bg-gradient-to-r from-from to-to text-transparent bg-clip-text */}
        <RevealAnimation leftToRight={true}>
          <GradientText
            text="Randolph Mayson Dy"
            classes="text-8xl font-main my-2 font-bold"
          />
        </RevealAnimation>
        <div className="text-4xl my-2 font-semibold ">
          <RevealAnimation>
            I build digital experiences for the online world.
          </RevealAnimation>
        </div>
        <div className="text-xl font-secondary">
          <RevealAnimation>
            I create the visual and interactive components of a website that
            users see and interact with. This includes integrating the
            appropriate frontend technologies and tools, and ensuring that the
            website is responsive, accessible, and optimized for performance.
          </RevealAnimation>
        </div>
        <div className="flex flex-row my-2">
          <ButtonGradient
            label="Contact Me"
            classes={`font-bold text-xl ${
              !darkMode ? "bg-light text-dark" : "bg-dark text-white"
            }`}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-transparent flex justify-center items-start">
        <RevealAnimation rightToLeft={true}>
          <img src={Dop} alt="profile" className={`${darkMode ? 'opacity-50' : 'opacity-75'} object-cover px-10`} />
        </RevealAnimation>
      </div>
    </div>
  );
};

export default Hero;
