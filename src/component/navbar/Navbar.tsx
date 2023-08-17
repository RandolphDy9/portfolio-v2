import Moon from "../../assets/icons/light/moon.svg";
import Sun from "../../assets/icons/dark/sun.svg";

type NavbarType = {
  darkMode: boolean;
  handleDarkMode: () => void;
  handleLightMode: () => void;
}

const Navbar = ({ darkMode, handleDarkMode, handleLightMode }: NavbarType) => {
  return (
    <div className={`${!darkMode ? 'bg-light text-dark shadow-xl' : 'bg-dark text-white'} w-full py-6 border-b flex justify-between items-center px-12`}>
      <div className="font-main flex items-end gap-1">
        <b className="text-lg">DY</b>
        <span className="text-xs mb-1">RANDOLPH</span>
      </div>
      <div className="flex gap-6">
        { darkMode && <img src={Sun} alt="color-switch-icon" width={25} className="cursor-pointer" onClick={handleLightMode} /> }
        { !darkMode && <img src={Moon} alt="color-switch-icon" width={25} className="cursor-pointer" onClick={handleDarkMode} /> }
        <div className={`border-2 ${!darkMode ? 'border-dark hover:bg-gray-200' : 'border-white hover:bg-gray-200'} cursor-pointer rounded-lg px-4 py-2`}>
          Resume
        </div>
      </div>
    </div>
  )
}

export default Navbar;