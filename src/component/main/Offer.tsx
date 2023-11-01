import GradientText from "../shared/GradientText";
import RevealAnimation from "../shared/RevealAnimation";
import animationData from "../../assets/lottie/offer.json";
import Lottie from "lottie-react";

type CardType = {
  label: string;
  title: string;
  description: string;
  darkMode: boolean;
};

const Offer = () => {
  return (
    <div className="p-2">
      <div className="text-3xl md:text-6xl text-center md:mt-12 my-16">
        My Services
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 px-4 md:px-10 md:mb-12">
        <div>
          <Lottie animationData={animationData} />
        </div>
        <div className="flex flex-col justify-center gap-8 items-center">
          <div>
            <RevealAnimation leftToRight={true}>
              <GradientText
                text="Angular and React Development"
                classes="font-main text-xl md:text-3xl font-bold"
              />
            </RevealAnimation>
            <div>
              Expert frontend development using Angular and React for responsive
              and bug-free web applications.
            </div>
          </div>
          <div>
            <RevealAnimation leftToRight={true}>
              <GradientText
                text="UI Design and Development"
                classes="font-main text-xl md:text-3xl font-bold"
              />
            </RevealAnimation>
            <div>
              Craft visually appealing, responsive and user-friendly interfaces,
              enhancing user engagement.
            </div>
          </div>
          <div>
            <RevealAnimation leftToRight={true}>
              <GradientText
                text="Custom Frontend Solutions"
                classes="font-main text-xl md:text-3xl font-bold"
              />
            </RevealAnimation>
            <div>
              Tailored services for unique web applications, interface
              optimization, and specialized UI/UX design.
            </div>
          </div>
          <div>
            <RevealAnimation leftToRight={true}>
              <GradientText
                text="Performance Optimization"
                classes="font-main text-xl md:text-3xl font-bold"
              />
            </RevealAnimation>
            <div>
              Optimize web app performance, refactor code for efficiency, and
              enhance load times.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
