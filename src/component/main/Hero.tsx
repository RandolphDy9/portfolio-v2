// import GradientText from "../shared/GradientText";
import RevealAnimation from "../shared/RevealAnimation";
import Wave from "../../assets/images/waving.png";
import Point from "../../assets/images/point.png";
import ButtonFill from "../shared/ButtonFill";
import { TypeAnimation } from "react-type-animation";

type HeroType = {
  darkMode: boolean;
};

const Hero = ({ darkMode }: HeroType) => {
  return (
    <div className="px-6 md:px-10 w-full flex flex-col md:flex-row gap-8 md:min-h-[80vh] relative">
      <div className="flex flex-col justify-center md:mx-20">
        <div className="text-md md:text-lg font-secondary flex gap-3">
          Hello There! <img src={Wave} alt="wave-icon" width="26" /> I am
        </div>
        <RevealAnimation leftToRight={true}>
          <div className="bg-gradient-to-r from-from via-via to-to text-transparent bg-clip-text text-4xl md:text-6xl font-main my-2 font-bold">
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
        <div className="text-2xl md:text-3xl my-2 font-semibold ">
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
          </RevealAnimation>
        </div>
        <div className="flex flex-row my-4">
          <ButtonFill
            label="Contact Me"
            absoluteClasses={`${
              darkMode
                ? "bg-dark text-white border-white hover:shadow-[4px_4px_0px_white]"
                : "bg-white text-dark border-dark hover:shadow-[4px_4px_0px_black]"
            }`}
            onClick={() => window.open("mailto:mayson.dy@gmail.com")}
          />
        </div>
      </div>
      <div className="md:relative hidden md:block">
        <div className={`absolute w-[30rem] h-[24rem] rounded-full bg-from top-28 -right-36 opacity-70 blur-3xl filter animate-blob ${darkMode ? 'mix-blend-lighten': 'mix-blend-multiply'}`}></div>
        <div className={`absolute w-[25rem] h-[23rem] rounded-full bg-via top-56 right-24 opacity-70 blur-3xl filter animate-blob2 animation-delay-40 ${darkMode ? 'mix-blend-lighten': 'mix-blend-multiply'}`}></div>
        <div className={`absolute w-[10rem] h-[15rem] rounded-full bg-to top-44 -left-4 space-y-4 opacity-70 filter blur-3xl animate-blob animation-delay-2000 ${darkMode ? 'mix-blend-lighten': 'mix-blend-multiply'}`}></div>
      </div>
    </div>
  );
}

export default Hero;
