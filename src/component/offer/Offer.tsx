import GradientText from "../shared/GradientText";
import Star from "../../assets/icons/star.svg";
import RevealAnimation from "../shared/RevealAnimation";

type CardType = {
  image: string;
  title: string;
  description: string;
};

const Card = ({ image, title, description }: CardType) => {
  return (
    <div className="flex flex-col justify-center my-2 md:my-0 items-center text-center mx-auto w-full md:w-1/3">
      <div className="mx-auto">
        <img src={image} alt="star-icon" className="w-2/6 mx-auto" />
      </div>
      <RevealAnimation leftToRight={true}>
        <GradientText text={title} classes="font-main text-3xl md:text-5xl font-bold py-2" />
      </RevealAnimation>
      <div className="font-secondary text-md md:text-lg my-2">
        <RevealAnimation>{description}</RevealAnimation>
      </div>
    </div>
  );
};

const Offer = () => {
  return (
    <div className="my-12 md:my-24 flex flex-col md:flex-row justify-around items-center md:gap-32 px-4 md:px-8">
      <Card
        image={Star}
        title="Front-end Development"
        description="I translate designs into interactive websites using HTML, CSS, and
          JavaScript, crafting efficient code, animations, and cross-browser
          compatibility for seamless user experiences."
      />
      <Card
        image={Star}
        title="Responsive Web Design"
        description="Craft adaptable, user-friendly websites for diverse devices, ensuring
          optimal experiences across desktops, tablets, and smartphones, while
          boosting accessibility and engagement."
      />
      <Card
        image={Star}
        title="Modern SPA Development"
        description="Build high-performance Single Page Applications (SPAs) with Angular or
          React, offering real-time updates, efficient data loading, and
          exceptional user experiences."
      />
    </div>
  );
};

export default Offer;
