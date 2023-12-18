import Spline from '@splinetool/react-spline';
import RevealAnimation from '../shared/RevealAnimation';

type CardType = {
  title: string;
  description: string;
};

const Card = ({ title, description }: CardType) => {
  return (
    <RevealAnimation rightToLeft={true}>
      <div className="flex flex-col justify-center items-start md:px-8 rounded-2xl">
        <div className="text-3xl bg-gradient-to-r from-from via-via to-to text-transparent bg-clip-text font-bold">
          {title}
        </div>
        <div className="my-3">
          {description}
        </div>
      </div>
    </RevealAnimation>
  );
};

const Offer = () => {
  return (
    <div className="p-6 md:mt-20 md:mb-40">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-6 hidden md:block">
          <Spline scene="https://prod.spline.design/sB5TQBh9-4IXBrau/scene.splinecode" style={{ maxWidth: '600px' }} />
        </div>

        <div className="col-span-6 flex my-12 md:my-0">
          <div className="flex flex-col justify-center gap-6 md:gap-12">
            <Card
              title="Angular, React, and Vue"
              description="Expert in dynamic and responsive web applications using different frameworks."
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
