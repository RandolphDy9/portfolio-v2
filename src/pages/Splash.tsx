import Lottie from "lottie-react";
import animationData from "../assets/lottie/water.json";

const Splash = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-2/3 min-h-screen mx-auto">
      <Lottie animationData={animationData} />
      <div className="text-3xl font-main text-white my-10 p-10 md:p-0">
        "Empty your mind, be formless. Shapeless, like water."
        <div className="text-sm my-3">- Bruce Lee</div>
      </div>
    </div>
  );
};

export default Splash;
