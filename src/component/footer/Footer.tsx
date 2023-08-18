import ButtonGradient from "../shared/ButtonGradient";
import GradientText from "../shared/GradientText";

type FooterType = {
  darkMode: boolean;
}

const Footer = ({ darkMode }: FooterType) => {
  return (
    <div className="md:py-32 text-center w-1/2 mx-auto font-secondary">
      <div>
        <GradientText text="Get in Touch" classes="text-7xl mb-4 font-main font-bold" />
        <div className="text-lg">
          Crafted with passion using ReactJS and Tailwind CSS, this portfolio draws
          inspiration from diverse web design concepts. A fusion of creativity
          and code, it showcases my journey as a frontend developer. Explore the
          synergy of innovative design and cutting-edge technology.
        </div>
        <div className="mx-auto flex justify-center my-4">
          <ButtonGradient label="Hit me up!" classes={`font-bold text-xl ${!darkMode ? 'bg-light text-dark' : 'bg-dark text-white'}`} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
