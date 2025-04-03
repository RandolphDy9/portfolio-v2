import Spline from "@splinetool/react-spline";
// import RevealAnimation from "../shared/RevealAnimation";
import TitleLabel from "../shared/TitleLabel";

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
    title: "Mastering Angular and ReactJS",
    description:
      "Proficient in building dynamic, responsive web applications that adapt seamlessly across devices using industry-leading frameworks.",
  },
  {
    title: 'UI Design & Development Excellence',
    description:
      "Creating visually captivating, intuitive interfaces designed to deliver a seamless and delightful user experience.",
  },
  {
    title: "Tailored Frontend Solutions",
    description:
      "Developing custom, scalable frontend solutions meticulously crafted to meet unique requirements and align with your business objectives.",
  },
  {
    title: "Performance-Driven Optimization",
    description:
      "Delivering lightning-fast, efficient web applications, ensuring smooth performance and exceptional user satisfaction.",
  },
];

const Offer = () => {
  return (
    <div className="flex w-full items-start gap-20">
      <div className="w-full py-[50vh]">
        <ul>
          {Offers.map((item, index) => (
            <li key={index}>
              <TitleLabel title={item.title} description={item.description} />
            </li>
          ))}
        </ul>
      </div>
      <div className="sticky top-0 flex h-screen w-full items-center">
        <Spline scene="https://prod.spline.design/sB5TQBh9-4IXBrau/scene.splinecode" style={{ maxWidth: '600px' }} />
      </div>
    </div>

    // <div className="p-6 md:mt-20 md:mb-40">
    //   <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
    //     <div className="col-span-6 hidden md:block">
    //       <Spline scene="https://prod.spline.design/sB5TQBh9-4IXBrau/scene.splinecode" style={{ maxWidth: '600px' }} />
    //     </div>

    //     <div className="col-span-6 flex my-6 md:my-0">
    //       <div className="flex flex-col justify-center gap-16">
    //         {Offers.map(item => {
    //           return <TitleLabel title={item.title} description={item.description} />
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Offer;
