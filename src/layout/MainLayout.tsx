import FacebookBlack from '../assets/icons/light/01-fb-black.svg';
import FacebookWhite from '../assets/icons/dark/01-fb-white.svg';
import GithubBlack from '../assets/icons/light/02-github-black.svg';
import GithubWhite from '../assets/icons/dark/02-github-white.svg';
import CodepenBlack from '../assets/icons/light/03-codepen-black.svg';
import CodepenWhite from '../assets/icons/dark/03-codepen-white.svg';
import LinkedinBlack from '../assets/icons/light/04-linkedin-black.svg';
import LinkedinWhite from '../assets/icons/dark/04-linkedin-white.svg';
import EmailBlack from '../assets/icons/light/email-black.svg';
import EmailWhite from '../assets/icons/dark/email-white.svg';

type LayoutType = {
  darkMode: boolean;
  children: React.ReactElement;
}

const MainLayout = ({ darkMode, children }: LayoutType) => {
  return (
    <div className="flex flex-row justify-between min-h-screen overflow-hidden">

      <div className="flex flex-col gap-7 fixed left-12 top-1/2 transform -translate-y-1/2 items-center">
        <img src={`${darkMode ? FacebookWhite : FacebookBlack}`} alt="facebook-icon" width="26" className="cursor-pointer" onClick={() => window.open('https://www.facebook.com/randolph.dy/', '_blank')} />
        <img src={`${darkMode ? GithubWhite : GithubBlack}`} alt="github-icon" width="26" className="cursor-pointer" onClick={() => window.open('https://github.com/RandolphDy9', '_blank')} />
        <img src={`${darkMode ? CodepenWhite : CodepenBlack}`} alt="codepen-icon" width="26" className="cursor-pointer" onClick={() => window.open('https://codepen.io/Randolph-Mayson-Dy', '_blank')} />
        <img src={`${darkMode ? LinkedinWhite : LinkedinBlack}`} alt="linkedin-icon" width="26" className="cursor-pointer" onClick={() => window.open('https://codepen.io/Randolph-Mayson-Dy', '_blank')} />
      </div>

      <div className="w-10/12 mx-auto overflow-y-auto">
        <div className="flex self-start min-h-screen h-100 shadow-xl rounded-b-lg">
          { children }
        </div>
        <div className="my-12 text-center text-sm mx-auto">
          Designed and Developed by Randolph Dy &copy; 2023
        </div>
      </div>

      <div className="flex flex-col gap-24 fixed right-0 top-1/3 transform translate-y-1/3 items-center">
        <div className="">
          <img src={`${darkMode ? EmailWhite : EmailBlack}`} alt="email-icon" width="22" />
        </div>
        <div className="transform rotate-90 text-sm font-bold">mayson.dy@gmail.com</div>
        {/* <div className="transform rotate-90 text-sm">Why are you tilting your head like that? :o</div> */}
      </div>
    </div>
  )
}

export default MainLayout;