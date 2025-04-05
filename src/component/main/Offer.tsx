import Spline from "@splinetool/react-spline";
// import RevealAnimation from "../shared/RevealAnimation";
import TitleLabel from "../shared/TitleLabel";

type Props = {
  darkMode: boolean;
};

// type CardType = {
//   title: string;
//   description: string;
// };

// const Card = ({ title, description }: CardType) => {
//   return (
//     <RevealAnimation rightToLeft={true}>
//       <div className="flex flex-col justify-center items-start md:px-8 rounded-2xl">
//         <div className="text-3xl bg-gradient-to-r from-from via-via to-to text-transparent bg-clip-text font-bold">
//           {title}
//         </div>
//         <div className="my-3">{description}</div>
//       </div>
//     </RevealAnimation>
//   );
// };

const Offers = [
  {
    title: "React & Angular Expertise",
    description:
      "Building responsive, high-performing web apps using modern frameworks that scale with your business.",
  },
  {
    title: 'Polished UI & Seamless UX',
    description:
      "Designing clean, intuitive interfaces that make every interaction feel effortless — and look amazing.",
  },
  {
    title: "Custom Frontend Solutions",
    description:
      "From scratch to scale — tailored code that meets your goals, fits your stack, and grows with your users.",
  },
  {
    title: "Speed & Performance Optimization",
    description:
      "Fast load times. Smooth transitions. No lag. Just web experiences that feel lightning quick and friction-free.",
  },
];

const Offer = ({ darkMode }: Props) => {
  return (
    <div className="flex w-full items-start gap-20">
      <div className="w-full py-[30vh]">
        <ul>
          {Offers.map((item, index) => (
            <li key={index}>
              <TitleLabel title={item.title} description={item.description} darkMode={darkMode} />
            </li>
          ))}
        </ul>
      </div>
      <div className="sticky top-0 flex h-screen w-full items-center">
        <Spline scene="https://prod.spline.design/sB5TQBh9-4IXBrau/scene.splinecode" style={{ maxWidth: '600px' }} />
      </div>
    </div>
  );
};

export default Offer;
