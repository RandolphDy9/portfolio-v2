import LinkWhite from "../../assets/icons/dark/link-white.svg";
import LinkBlack from "../../assets/icons/light/link-black.svg";
import FolderWhite from "../../assets/icons/dark/folder-white.svg";
import FolderBlack from "../../assets/icons/light/folder-black.svg";
import GradientText from "../shared/GradientText";
import RevealAnimation from "../shared/RevealAnimation";

import PortfolioV1 from "../../assets/images/projects/portfolio-v1.png";
import TarsierStudios from "../../assets/images/projects/tarsier-studios.png";
import Drape from "../../assets/images/projects/drape.png";

import Tilt from 'react-parallax-tilt';
import { useNavigate } from "react-router";

type ProjectType = {
  darkMode: boolean;
};

type CardType = {
  darkMode: boolean;
  title: string;
  description: string;
  linkToUrl: string;
  used: string[];
};

type BadgeType = {
  label: string;
};

type FeaturedProjectType = {
  title: string;
  description: string;
  used: string[];
  image: string;
  linkToUrl: string;
};

const Badge = ({ label }: BadgeType) => {
  return (
    <div className="px-3 py-1 font-secondary border border-accent text-accent rounded-lg text-xs">
      {label}
    </div>
  );
};

const Card = ({ darkMode, title, description, linkToUrl, used }: CardType) => {
  return (
    <div className="flex flex-col flex-grow">
      <RevealAnimation>
        <div className="flex-1 p-0.5 my-auto rounded bg-gradient-to-r from-from via-via to-to h-full md:h-96">
          <div
            className={`p-8 flex flex-col flex-1 gap-2 h-full ${
              darkMode ? "bg-dark text-white" : "bg-light text-dark"
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <img
                  src={`${darkMode ? FolderWhite : FolderBlack}`}
                  alt="external-link"
                  width="35"
                />
              </div>
              <div className="cursor-pointer hover:scale-110" onClick={() => window.open(linkToUrl)}>
                <img
                  src={`${darkMode ? LinkWhite : LinkBlack}`}
                  alt="external-link"
                  width="24"
                />
              </div>
            </div>
            <GradientText text={title} classes="text-4xl font-bold" />
            <div>{description}</div>
            <div className="flex gap-2">
              {used.map((item: string) => {
                return <Badge key={item} label={item} />;
              })}
            </div>
          </div>
        </div>
      </RevealAnimation>
    </div>
  );
};

const FeaturedProject = ({
  title,
  description,
  used,
  image,
  linkToUrl,
}: FeaturedProjectType) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb-12 md:mb-20">
      <div className="m-6 md:m-20 flex flex-col justify-center">
        <div>Featured Project</div>
        <RevealAnimation leftToRight={true}>
          <GradientText text={title} classes="text-5xl font-bold" />
        </RevealAnimation>
        <div className="my-2">
          <RevealAnimation>{description}</RevealAnimation>
        </div>
        <div className="flex gap-2">
          {used.map((item: string) => {
            return <Badge key={item} label={item} />;
          })}
        </div>
      </div>
      <div
        className="h-auto w-full cursor-pointer"
        onClick={() => window.open(linkToUrl)}
      >
        <RevealAnimation rightToLeft={true}>
          <Tilt tiltAngleXInitial={20} tiltAngleYInitial={20}>
            <img
              src={image}
              alt="featured-project"
              className="object-cover w-full py-8 shadow-purple-700 shadow-2xl"
            />
          </Tilt>
        </RevealAnimation>
      </div>
    </div>
  );
};

const Projects = ({ darkMode }: ProjectType) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="text-3xl md:text-6xl text-center md:mt-12 my-16">
        Featured projects
      </div>
      <FeaturedProject
        title="Portfolio v1"
        description="Protfolio version 1 is a pivotal achievement in my web development journey,
          marking my first venture into React and Tailwind CSS. It's a captivating and interactive
          showcase that not only displays my skills but also highlights my progress in
          mastering new technologies."
        used={["React", "Tailwind CSS", "Figma"]}
        image={PortfolioV1}
        linkToUrl="https://protfoliov1-site.netlify.app"
      />
      <FeaturedProject
        title="Tarsier Studios"
        description="Embark on a journey into the realm of Tarsier Studios, where creativity meets
          urgency. This project, meticulously crafted in a single night, marks my inaugural experience
          with Webflow. Tasked with a tight deadline, I channeled my skills to breathe life into
          Tarsier Studios' digital presence."
        used={["Webflow", "Figma"]}
        image={TarsierStudios}
        linkToUrl="https://tarsier-studios.webflow.io/"
      />
      <FeaturedProject
        title="Drape"
        description="Drape is your go-to destination for contemporary fashion. Our sleek and modern
          website, built using React and Tailwind CSS, offers a seamless shopping experience with convenient
          'add to cart' functionality. Explore our curated collection of stylish clothing and elevate your
          wardrobe effortlessly with Drape."
        used={["React", "Tailwind CSS"]}
        image={Drape}
        linkToUrl="https://drape-clothing.netlify.app/"
      />

      {/* <FeaturedProject
        title="Newsfeed"
        description="Crafted with React and influenced by the artistic spirit of Dribbble, this endeavor
          seamlessly blends functionality and aesthetics. Newsfeed is a curated portal to the latest 
          articles from NewsApi, bridging information and innovation."
        used={["React", "Tailwind CSS"]}
        image={Newsfeed}
        linkToUrl="https://newsfeed-site.netlify.app"
      /> */}
      <div className="text-3xl md:text-6xl text-center md:mt-28 my-16">
        Other notable projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
        {/* <Card
          darkMode={darkMode}
          title="Sine TV"
          description="Embark on a cinematic journey with sine tv, a dynamic app designed to seamlessly
            fetch movie details from TheMovieDatabaseApi. Whether you're a devoted film buff or simply
            seeking your next on-screen adventure, sine tv provides a gateway to explore, discover,
            and immerse yourself in the world of movies."
          linkToUrl="https://sinetv-site.netlify.app"
          used={["React", "Tailwind CSS"]}
        /> */}
        <Card
          darkMode={darkMode}
          title="StaffHub"
          description="StaffHub simplifies employee management, combining a robust NodeJS backend with an
            intuitive Angular frontend. It streamlines workforce management, enabling effortless CRUD
            operations for employee data."
          linkToUrl="https://staffhub-site.netlify.app"
          used={["Angular", "Tailwind CSS", "NodeJS"]}
        />
        <Card
          darkMode={darkMode}
          title="Newsfeed"
          description="Crafted with React and influenced by the artistic spirit of Dribbble, this endeavor
            seamlessly blends functionality and aesthetics. Newsfeed is a curated portal to the latest 
            articles from NewsApi, bridging information and innovation."
          linkToUrl="https://newsfeed-site.netlify.app"
          used={["React", "Tailwind CSS"]}
        />
        <Card
          darkMode={darkMode}
          title="JavaScript Calculator"
          description="Conceived as part of the freeCodeCamp challenges, this project showcases my ability
            to blend logic and user interface design to create a functional and interactive calculator
            that harnesses the power of JavaScript."
          linkToUrl="https://codepen.io/Randolph-Mayson-Dy/full/VwVBXow"
          used={["React", "Bootstrap", "HTML5", "CSS3"]}
        />
        <Card
          darkMode={darkMode}
          title="Random Quote Generator"
          description="The Random Quote Generator is an engaging and interactive web application developed
            as part of the freeCodeCamp challenges providing users with thought-provoking and inspiring
            quotes in a random order every time they visit the website."
          linkToUrl="https://codepen.io/Randolph-Mayson-Dy/full/gOQzJVb"
          used={["React", "Bootstrap", "HTML5", "CSS3"]}
        />
        <Card
          darkMode={darkMode}
          title="Markdown Previewer"
          description="This project empowers users to create, edit, and preview content using Markdown,
            simplifying formatting to enhance content creation"
          linkToUrl="https://codepen.io/Randolph-Mayson-Dy/full/wvQxmVJ"
          used={["React", "Bootstrap", "HTML5", "CSS3"]}
        />
        <Card
          darkMode={darkMode}
          title="Pomodoro Timer"
          description="Inspired by the Pomodoro Technique, this project provides users with a focused and
            structured approach to managing their time and tasks. By alternating between focused work sessions
            and short breaks, users can optimize their productivity and maintain a healthy work-life balance."
          linkToUrl="https://codepen.io/Randolph-Mayson-Dy/full/OJaBJLd"
          used={["React", "Bootstrap", "HTML5", "CSS3"]}
        />
        {/* <Card
          darkMode={darkMode}
          title="Drumpad"
          description="Inspired by electronic drum machines, this project allows users to unleash their inner
          rhythm and creativity by playing a variety of virtual drum sounds with the click of a mouse or the tap
          of a keyboard key. Whether you're a music enthusiast or simply looking for a fun way to explore sound,
          the Drumpad offers an engaging experience for users of all ages."
          linkToUrl="https://codepen.io/Randolph-Mayson-Dy/full/NWELqGO"
          used={["React", "Bootstrap", "HTML5", "CSS3"]}
        /> */}
      </div>
      <div className="text-lg md:text-xl text-center my-8 hover:underline cursor-pointer" onClick={() => navigate('/archive')}>
        View all projects &#8594;
      </div>
    </div>
  );
};

export default Projects;