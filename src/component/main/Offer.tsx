import GradientText from "../shared/GradientText";
import RevealAnimation from "../shared/RevealAnimation";

type CardType = {
  label: string;
  title: string;
  description: string;
};

const Card = ({ label, title, description }: CardType) => {
  return (
    <div className="flex flex-col my-2 md:my-0 mx-auto w-full md:w-1/3">
      <div className="text-2xl md:text-4xl">
        { label }
      </div>
      <RevealAnimation leftToRight={true}>
        <GradientText text={title} classes="font-main text-2xl md:text-4xl font-bold py-2" />
      </RevealAnimation>
      <div className="font-secondary text-lg md:text-xl my-2">
        <RevealAnimation>{description}</RevealAnimation>
      </div>
    </div>
  );
};

const Offer = () => {
  return (
    <div className="my-6 flex flex-col md:flex-row justify-around items-center md:gap-32 px-4 md:px-10 md:mt-16">
      <Card
        label=".01"
        title="Front-end Development"
        description="Translate designs into interactive websites with HTML, CSS, JavaScript, animations, and cross-browser compatibility."
        // description="I translate designs into interactive websites using HTML, CSS, and
        //   JavaScript, crafting efficient code, animations, and cross-browser
        //   compatibility for seamless user experiences."
      />
      <Card
        label=".02"
        title="Responsive Web Design"
        description="Create adaptable, user-friendly websites for diverse devices, enhancing accessibility and engagement."
        // description="Craft adaptable, user-friendly websites for diverse devices, ensuring
        //   optimal experiences across desktops, tablets, and smartphones, while
        //   boosting accessibility and engagement."
      />
      <Card
        label=".03"
        title="Modern SPA Development"
        description="Develop high-performance SPAs with Angular/React, delivering real-time updates and exceptional UX."
        // description="Build high-performance Single Page Applications (SPAs) with Angular or
        //   React, offering real-time updates, efficient data loading, and
        //   exceptional user experiences."
      />
    </div>
  );
};

export default Offer;
