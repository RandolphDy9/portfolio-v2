import RevealAnimation from "../shared/RevealAnimation";
import Dop from "../../assets/images/coding-bg-me4.svg";

type CardType = {
  title: string;
  description: string;
};

const Card = ({ title, description }: CardType) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-3xl bg-gradient-to-r from-from via-via to-to text-transparent bg-clip-text font-bold">
        {title}
      </div>
      <div className="my-3">
        {description}
      </div>
    </div>
  );
};

const Offer = () => {
  return (
    <div className="p-6 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-5 md:p-6">
          <RevealAnimation rightToLeft={true}>
            <img src={Dop} alt="profile" className={`object-cover w-full`} />
          </RevealAnimation>
        </div>

        <div className="col-span-7 flex flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6 md:gap-16">

            <Card
              title="Angular / React Development"
              description="Experts in dynamic and responsive web applications using Angular and React."
            />
            <Card
              title="UI Design and Development"
              description="Crafting visually stunning, user-friendly interfaces for a seamless and delightful user experience."
            />
            <Card
              title="Custom Frontend Solutions"
              description="Tailored solutions meeting unique requirements, aligned with your business goals."
            />
            <Card
              title="Performance Optimization"
              description="Ensuring high-speed, efficient web applications for a smooth user experience."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
