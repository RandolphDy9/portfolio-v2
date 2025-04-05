import ButtonFill from "../shared/ButtonFill";
import GradientText from "../shared/GradientText";
import RevealAnimation from "../shared/RevealAnimation";

type FooterType = {
  darkMode: boolean;
};

const Footer = ({ darkMode }: FooterType) => {
  return (
    <div className="pt-24 pb-6 md:py-32 text-center w-full md:w-5/6 mx-auto font-secondary px-6">
      <div>
        <GradientText
          text="Let’s Build Something Great"
          classes="text-6xl md:text-8xl pb-4 font-main font-bold"
        />
        <div className="text-lg py-4 flex-wrap md:w-1/2 mx-auto">
          <RevealAnimation>
            Have an idea or project in mind? I’d love to hear about it. Let’s connect and bring it to life.
          </RevealAnimation>
        </div>
        <div className="mx-auto flex justify-center my-4">
          <ButtonFill
            label="Get in Touch!"
            absoluteClasses={`${darkMode ? "bg-dark text-light border-light hover:shadow-[4px_4px_0px_white]" : "bg-light text-dark border-dark hover:shadow-[4px_4px_0px_black]"}`}
            onClick={() => window.open("mailto:mayson.dy@gmail.com")}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
