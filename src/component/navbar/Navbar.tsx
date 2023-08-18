import Moon from "../../assets/icons/light/moon.svg";
import Sun from "../../assets/icons/dark/sun.svg";
import ButtonGradient from "../shared/ButtonGradient";
import GradientText from "../shared/GradientText";

type NavbarType = {
  darkMode: boolean;
  handleDarkMode: () => void;
  handleLightMode: () => void;
}

const Navbar = ({ darkMode, handleDarkMode, handleLightMode }: NavbarType) => {
  return (
    <div className={`${!darkMode ? 'bg-light text-dark shadow-xl' : 'bg-dark text-white'} w-full py-6 flex justify-between items-center px-12`}>
      <div className="font-main flex items-end gap-1 font-bold">
        <div className="text-xs self-start bg-gradient-to-r from-to via-via to-from text-transparent bg-clip-text border-b">frontend</div>
        <div className="text-from text-xl border border-from px-2">DY</div>
        <GradientText text="veloper" classes="font-main flex items-end gap-1 font-bold text-xs"  />
      </div>
      <div className="flex gap-6">
        { darkMode && <img src={Sun} alt="color-switch-icon" width={25} className="cursor-pointer" onClick={handleLightMode} /> }
        { !darkMode && <img src={Moon} alt="color-switch-icon" width={25} className="cursor-pointer" onClick={handleDarkMode} /> }
        {/* <div className={`border-2 ${!darkMode ? 'border-dark hover:bg-gray-200' : 'border-white hover:bg-gray-200'} cursor-pointer rounded-lg px-4 py-2`}>
        </div> */}
          <ButtonGradient label="Resume" classes={`font-bold ${!darkMode ? 'bg-light text-dark' : 'bg-dark text-white'}`} />
      </div>
    </div>
  )
}

export default Navbar;