import GradientText from "../shared/GradientText";
import RevealAnimation from "../shared/RevealAnimation";

type CardType = {
  label: string;
  title: string;
  description: string;
  darkMode: boolean;
};

const Card = ({ label, title, description, darkMode }: CardType) => {
  return (
    <div className={`my-2 md:my-0 w-full border hover:scale-110 p-6 rounded-lg group relative overflow-hidden ${darkMode ? 'border-white': 'border-dark'}`}>
      <div className="text-xl md:text-3xl">
        { label }
      </div>
      <RevealAnimation leftToRight={true}>
        <GradientText text={title} classes="font-main text-2xl md:text-4xl font-bold py-2 mt-6" />
      </RevealAnimation>
      <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-white text-center absolute inset-0 flex items-center justify-center p-4">
          {description}
        </div>
      </div>
    </div>
  );
};

const Offer = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 my-6 gap-12 px-4 md:px-10 md:mb-12">
      <Card
        label=".01"
        title="Front-end Development"
        description="Translate designs into interactive websites with HTML, CSS, JavaScript, animations, and cross-browser compatibility."
        darkMode={darkMode}
      />
      <Card
        label=".02"
        title="Responsive Web Design"
        description="Create adaptable, user-friendly websites for diverse devices, enhancing accessibility and engagement."
        darkMode={darkMode}
      />
      <Card
        label=".03"
        title="Modern SPA Development"
        description="Develop high-performance SPAs with Angular/React, delivering real-time updates and exceptional UX."
        darkMode={darkMode}
      />
    </div>
  );
};

export default Offer;
