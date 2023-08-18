import ButtonGradient from "../shared/ButtonGradient";
import GradientText from "../shared/GradientText";

type HeroType = {
  darkMode: boolean;
}

const Hero = ({ darkMode }: HeroType) => {
  return (
    <div className="p-10 w-full flex gap-4 min-h-[90vh]">
      <div className="w-1/2 flex flex-col justify-center">
        <div className="text-lg font-secondary">Hi, My name is</div>
        {/* bg-gradient-to-r from-from to-to text-transparent bg-clip-text */}
        <GradientText text="Randolph Mayson Dy" classes="text-8xl font-main my-2 font-bold" />
        <div className="text-4xl my-2 font-semibold">
          I build digital experiences for the online world.
        </div>
        <div className="text-xl font-secondary">
          I create the visual and interactive components of a website that users
          see and interact with. This includes integrating the appropriate
          frontend technologies and tools, and ensuring that the website is
          responsive, accessible, and optimized for performance.
        </div>
        <div className="flex flex-row my-2">
          <ButtonGradient label="Contact Me" classes={`font-bold text-xl ${!darkMode ? 'bg-light text-dark' : 'bg-dark text-white'}`} />
        </div>
      </div>
      <div className="w-1/2 bg-gray-200 h-full">
        Profile Image
      </div>
    </div>
  );
};

export default Hero;
