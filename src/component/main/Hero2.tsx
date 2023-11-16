import { motion } from "framer-motion";
import RevealAnimation from "../shared/RevealAnimation";
import Dop from "../../assets/images/coding-bg-me4.svg";
import Wave from "../../assets/images/waving.png";
import { TypeAnimation } from "react-type-animation";

const Hero2 = () => {
  return (
    <div className="p-6 md:p-10 w-full grid grid-cols-12 grid-rows-6 gap-6 min-h-[90vh]">
      <div className="col-span-5 row-span-4">
        <motion.div
          initial={{ y: 0 }} // Initial position
          animate={{ y: 10, transition: { yoyo: Infinity, duration: 2 } }} // Animate the 'y' position to create a floating effect
          whileHover={{ scale: 1.05 }} // Enlarge the image on hover
        >
          <RevealAnimation rightToLeft={true}>
            <img src={Dop} alt="profile" className={`object-cover w-full`} />
          </RevealAnimation>
        </motion.div>
      </div>
      <div className="grid gap-6 col-span-4 row-span-4">
        <div className="border rounded-xl row-span-2">
          <div className="text-md md:text-5xl font-secondary flex h-full my-auto gap-3 justify-center items-center">
            Hello There! <img src={Wave} alt="wave-icon" width="45" />
          </div>
        </div>
        <div className="border rounded-xl row-span-2"></div>
      </div>
      <div className="border rounded-xl col-span-3 row-span-4"></div>
      <div className="border rounded-xl col-span-5 row-span-2"></div>
      <div className="border rounded-xl col-span-7 row-span-2 flex justify-center items-center gap-2">
        {/* <div className="text-md md:text-lg font-secondary flex gap-3">
          I am
        </div> */}
        <RevealAnimation leftToRight={true}>
          <div className="bg-gradient-to-r from-from via-via to-to text-transparent bg-clip-text text-3xl md:text-5xl font-main my-2 font-bold">
            <TypeAnimation
              sequence={[
                "Randolph Mayson Dy",
                2000,
                "Front End Developer",
                2000
              ]}
              speed={30}
              repeat={Infinity}
            />
          </div>
        </RevealAnimation>
      </div>
    </div>
  );
};

export default Hero2;
