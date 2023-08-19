import ButtonGradient from "../shared/ButtonGradient";
import GradientText from "../shared/GradientText";
import RevealAnimation from "../shared/RevealAnimation";

type FooterType = {
  darkMode: boolean;
};

const Footer = ({ darkMode }: FooterType) => {
  return (
    <div className="md:py-32 text-center w-1/2 mx-auto font-secondary">
      <div>
        <GradientText
          text="Get in Touch"
          classes="text-7xl mb-3 font-main font-bold"
        />
        <div className="text-lg my-2 flex-wrap">
          <RevealAnimation>
            Got a cool idea or project?
            Let's connect and make it a reality. Feel free to drop me a message,
            and let's explore the possibilities!
          </RevealAnimation>
          {/* <RevealAnimation>
            Crafted with passion using ReactJS and Tailwind CSS, this portfolio
            draws inspiration from diverse web design concepts. A fusion of
            creativity and code, it showcases my journey as a frontend
            developer. Explore the synergy of innovative design and cutting-edge
            technology.
          </RevealAnimation> */}
        </div>
        <div className="mx-auto flex justify-center my-4">
          <ButtonGradient
            label="Say Hello!"
            classes={`font-bold text-xl ${
              !darkMode ? "bg-light text-dark" : "bg-dark text-white"
            }`}
            onClick={() => window.open("mailto:mayson.dy@gmail.com")}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
