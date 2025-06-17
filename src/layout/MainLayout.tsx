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
    <div className="relative min-h-screen w-full">

      <div className="fixed left-12 top-1/2 transform -translate-y-1/2 items-center hidden md:flex flex-col gap-10">
        {/* LinkedIn */}
        <div className="relative group">
          <img
            src={darkMode ? LinkedinWhite : LinkedinBlack}
            alt="linkedin-icon"
            width="30"
            className="cursor-pointer hover:scale-125 transition-transform duration-300 animate-pulse"
            style={{ animationDuration: '2s' }}
            onClick={() => window.open('https://www.linkedin.com/in/maysondy/', '_blank')}
          />
          <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 px-2 py-1 text-sm bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10 shadow-md">
            LinkedIn
          </div>
        </div>

        {/* GitHub */}
        <div className="relative group">
          <img
            src={darkMode ? GithubWhite : GithubBlack}
            alt="github-icon"
            width="30"
            className="cursor-pointer hover:scale-125 transition-transform duration-300 animate-pulse"
            style={{ animationDuration: '2.2s' }}
            onClick={() => window.open('https://github.com/RandolphDy9', '_blank')}
          />
          <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 px-2 py-1 text-sm bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10 shadow-md">
            GitHub
          </div>
        </div>

        {/* CodePen */}
        <div className="relative group">
          <img
            src={darkMode ? CodepenWhite : CodepenBlack}
            alt="codepen-icon"
            width="30"
            className="cursor-pointer hover:scale-125 transition-transform duration-300 animate-pulse"
            style={{ animationDuration: '2.4s' }}
            onClick={() => window.open('https://codepen.io/Randolph-Mayson-Dy', '_blank')}
          />
          <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 px-2 py-1 text-sm bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10 shadow-md">
            CodePen
          </div>
        </div>
      </div>

      <div className="w-full md:w-9/12 mx-auto">
        <div className="min-h-screen">
          {children}
        </div>
        <div className="py-12 text-center text-sm mx-auto">
          Designed and Developed by Randolph Dy &copy; 2023
        </div>
      </div>

      <div className="fixed right-0 top-1/3 transform translate-y-1/3 items-center hidden md:flex flex-col gap-24">
        <div className="cursor-pointer hover:scale-125" onClick={() => window.open('mailto:mayson.dy@gmail.com')}>
          <img src={darkMode ? EmailWhite : EmailBlack} alt="email-icon" width="22" />
        </div>
        <div className="transform rotate-90 text-sm font-bold">mayson.dy@gmail.com</div>
      </div>

    </div>
  );
};

export default MainLayout;