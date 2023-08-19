import Moon from "../../assets/icons/light/moon.svg";
import Sun from "../../assets/icons/dark/sun.svg";
import ButtonGradient from "../shared/ButtonGradient";
// import GradientText from "../shared/GradientText";
import { motion } from "framer-motion";

type NavbarType = {
  darkMode: boolean;
  handleDarkMode: () => void;
};

const Navbar = ({ darkMode, handleDarkMode }: NavbarType) => {
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div
      className={`${
        !darkMode ? "bg-light text-dark shadow-xl" : "bg-dark text-white"
      } w-full py-6 flex justify-between items-center px-12`}
    >
      <div className="font-main flex items-end gap-1 font-bold">
        <div className="text-from text-xl border-4 border-from px-2 py-1 md:px-2 rounded">DY</div>
      </div>
      <div className="flex gap-6">
        <div className={`w-22 h-12 md:w-24 md:h-13 rounded-3xl flex items-center cursor-pointer ${darkMode ? 'justify-start bg-gray-700 ': 'justify-end border-dark bg-gray-300'}`} data-isOn={darkMode} onClick={handleDarkMode}>
          <div>
            { !darkMode && <img src={Moon} alt="color-switch-icon" width={25} className="cursor-pointer mx-2 md:mx-1" /> }
          </div>
          <motion.div className="bg-accent w-7 h-7 md:w-9 md:h-9 rounded-3xl md:px-2 mx-2 flex flex-col items-end justify-center" layout transition={spring} />
          <div>
            { darkMode && <img src={Sun} alt="color-switch-icon" width={25} className="cursor-pointer mx-2 md:mx-1" /> }
          </div>
        </div>

        <div className="cursor-pointer" onClick={() => window.open('https://www.dropbox.com/s/xakoe6rop7xc4aj/RandolphDy_resume.pdf?dl=0')}>
          <ButtonGradient
            label="Resume"
            classes={`font-bold ${
              !darkMode ? "bg-light text-dark" : "bg-dark text-white"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
