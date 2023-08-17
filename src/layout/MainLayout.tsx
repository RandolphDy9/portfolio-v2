import FacebookIcon from "../assets/icons/light/facebook.svg";
import GithubIcon from "../assets/icons/light/github.svg";
import CodepenIcon from "../assets/icons/light/codepen.svg";
import linkedinIcon from "../assets/icons/light/linkedin.svg";

type LayoutType = {
  children: React.ReactElement;
}

const MainLayout = ({ children }: LayoutType) => {
  return (
    <div className="flex flex-row justify-between min-h-screen overflow-hidden">

      <div className="flex flex-col gap-7 fixed left-12 top-1/2 transform -translate-y-1/2 items-center">
        <img src={FacebookIcon} alt="facebook-icon" width="24" className="cursor-pointer" onClick={() => window.open('https://www.facebook.com/randolph.dy/', '_blank')} />
        <img src={GithubIcon} alt="github-icon" width="24" className="cursor-pointer" onClick={() => window.open('https://github.com/RandolphDy9', '_blank')} />
        <img src={CodepenIcon} alt="codepen-icon" width="24" className="cursor-pointer" onClick={() => window.open('https://codepen.io/Randolph-Mayson-Dy', '_blank')} />
        <img src={linkedinIcon} alt="linkedin-icon" width="24" className="cursor-pointer" onClick={() => window.open('https://codepen.io/Randolph-Mayson-Dy', '_blank')} />
      </div>

      <div className="w-10/12 mx-auto overflow-y-auto">
        <div className="flex self-start border min-h-screen h-100 shadow-xl rounded-b-lg">
          { children }
        </div>
        <div className="my-12 text-center text-sm mx-auto">
          Designed and Developed by Randolph Dy &copy; 2023
        </div>
      </div>

      <div className="flex flex-col gap-7 fixed right-0 top-1/2 transform translate-y-1/2 items-center">
        {/* <div className="border-l border-dark h-16"></div> */}
        <div className="transform rotate-90 text-sm">mayson.dy@gmail.com</div>
        {/* <div className="transform rotate-90 text-sm">Why are you tilting your head like that? :o</div> */}
      </div>
    </div>
  )
}

export default MainLayout;