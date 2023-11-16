import Moon from "../../assets/icons/light/moon.svg";
import Sun from "../../assets/icons/dark/sun.svg";
import { motion } from "framer-motion";
import ButtonFill from "../shared/ButtonFill";
import Logo from "../../assets/icons/updated-logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; // Import useState
import HoverLineUnder from "../shared/HoverLineUnder";

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
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false); // State to track menu open/close

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`${
        !darkMode ? "bg-light text-dark shadow-xl" : "bg-dark text-white"
      } w-full py-6 px-4 md:px-12 font-main`}
    >
      <div className="flex items-center justify-between">
        <div className="font-main flex items-center gap-1 font-bold cursor-pointer" onClick={() => navigate('/')}>
          <img src={Logo} alt="Dy-logo" width="55" />
        </div>

      <div className="hidden md:flex justify-center items-center gap-6">
        <div className="flex text-lg md:text-xl gap-6">
          <HoverLineUnder onClick={() => navigate('/about')} label="About" />
          <HoverLineUnder onClick={() => navigate('/experience')} label="Experience" />
          <HoverLineUnder onClick={() => navigate('/archive')} label="Projects" />

          {/* <div className="cursor-pointer hover:text-via" onClick={() => navigate('/about')}>About</div>
          <div className="cursor-pointer hover:text-via" onClick={() => navigate('/experience')}>Experience</div>
          <div className="cursor-pointer hover:text-via" onClick={() => navigate('/archive')}>Projects</div> */}
        </div>

        <div className="mt-4 md:mt-0 flex flex-col md:flex-row justify-center items-center md:justify-end gap-6">
          <div
            className={`w-22 h-8 md:w-24 md:h-11 rounded-3xl flex items-center cursor-pointer ${
              darkMode
                ? "justify-start bg-gray-700 "
                : "justify-end border-dark bg-gray-300"
            }`}
            onClick={handleDarkMode}
          >
            <div>
              {!darkMode && (
                <img
                  src={Moon}
                  alt="color-switch-icon"
                  width={25}
                  className="cursor-pointer mx-2 md:mx-1"
                />
              )}
            </div>
            <motion.div
              className="bg-accent w-5 h-5 md:w-9 md:h-9 rounded-3xl md:px-2 mx-2 flex flex-col items-end justify-center"
              layout
              transition={spring}
            />
            <div>
              {darkMode && (
                <img
                  src={Sun}
                  alt="color-switch-icon"
                  width={25}
                  className="cursor-pointer mx-2 md:mx-1"
                />
              )}
            </div>
          </div>

          <div className="mt-4 md:mt-0 cursor-pointer">
            {/* <ButtonFill
              label="Resume"
              absoluteClasses={`${!darkMode ? "bg-dark" : "bg-white"}`}
              relativeClasses={`${
                !darkMode
                  ? "border-dark bg-white text-white"
                  : "border-white bg-dark text-dark"
              }`}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1oAZqIftyKlroO5Ec8lqbrrjJdEY43GbS/view?usp=drive_link"
                )
              }
            /> */}
            <ButtonFill
              label="Resume"
              absoluteClasses={`${darkMode ? "bg-dark text-white border-white hover:shadow-[4px_4px_0px_white]" : "bg-white text-dark border-dark hover:shadow-[4px_4px_0px_black]"}`}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1oAZqIftyKlroO5Ec8lqbrrjJdEY43GbS/view?usp=drive_link"
                )
              }
            />
          </div>
        </div>
      </div>

        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row justify-center items-center text-lg gap-6 md:hidden">
          <div className="cursor-pointer hover:text-via" onClick={() => navigate('/about')}>About</div>
          <div className="cursor-pointer hover:text-via" onClick={() => navigate('/experience')}>Experience</div>
          <div className="cursor-pointer hover:text-via" onClick={() => navigate('/archive')}>Projects</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
