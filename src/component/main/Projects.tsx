import LinkWhite from "../../assets/icons/dark/link-white.svg";
import LinkBlack from "../../assets/icons/light/link-black.svg";
import FolderWhite from "../../assets/icons/dark/folder-white.svg";
import FolderBlack from "../../assets/icons/light/folder-black.svg";
import GradientText from "../shared/GradientText";
import RevealAnimation from "../shared/RevealAnimation";

import Eastwest from "../../assets/images/projects//eastwest.png";
import Drape from "../../assets/images/projects/drape.png";
import FirstGen from "../../assets/images/projects/firstgen.png";

import Video1 from "../../assets/videos/eastwest.mp4";
import Video2 from "../../assets/videos/firstgen.mp4";
import Video3 from "../../assets/videos/drape.mp4";

import { useNavigate } from "react-router";
import { useState } from "react";

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
  video: string;
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
    <div className="flex flex-col flex-grow w-auto">
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
              <div
                className="cursor-pointer hover:scale-110"
                onClick={() => window.open(linkToUrl)}
              >
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
  video,
  linkToUrl,
}: FeaturedProjectType) => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb-12 md:mb-28">
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
          {!isVideoPlaying && (
            <img
              src={image}
              alt="featured-project"
              className="object-cover w-full py-8 shadow-purple-700 shadow-2xl"
              onMouseEnter={() => setVideoPlaying(true)}
            />
          )}

          {isVideoPlaying && (
            <video
              src={video}
              autoPlay
              loop
              muted
              className="object-cover w-full py-8 shadow-purple-700 shadow-2xl"
              onMouseLeave={() => setVideoPlaying(false)}
            />
          )}
        </RevealAnimation>
      </div>
    </div>
  );
};

const Projects = ({ darkMode }: ProjectType) => {
  const navigate = useNavigate();

  return (
    <div id="projects-section">
      <div className="text-3xl md:text-6xl text-center md:mt-12 my-16">
        Featured projects
      </div>
      <FeaturedProject
        title="Eastwest Ageas Insurance"
        description="Angular-powered website, formerly Troo, now embodying EastWest and Ageas. Established in 2015,
          it is the world's first insurance company with a cloud-based IT platform, offering a seamless customer
          experience and personalized financial solutions. Explore for a better tomorrow with EastWest Ageas Insurance."
        used={["Angular", "Bootstrap", "NgZorro"]}
        image={Eastwest}
        video={Video1}
        linkToUrl="https://ewageas.com.ph/"
      />
      <FeaturedProject
        title="First Gen"
        description="A seamlessly crafted corporate website with Angular, Crafter CMS, and Bootstrap. Our
          dynamic interface ensures an engaging user experience, Crafter CMS allows for flexible content management,
          and Bootstrap's design elegance delivers a visually appealing platform, reflecting our commitment to
          innovation and excellence."
        used={["Angular", "Crafter CMS", "Bootstrap"]}
        image={FirstGen}
        video={Video2}
        linkToUrl="https://tarsier-studios.webflow.io/"
      />
      <FeaturedProject
        title="Drape"
        description="Discover contemporary fashion at Drape—our sleek React and Tailwind CSS website
          ensures a seamless shopping experience. Elevate your wardrobe effortlessly with our curated
          collection, and enjoy secure checkout with integrated Stripe payments. Shop confidently at Drape,
          where fashion meets technology seamlessly."
        used={["React", "Tailwind CSS", "NodeJS", "Express", "Stripe"]}
        image={Drape}
        video={Video3}
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 md:px-10">
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
          description="StaffHub streamlines employee management with NodeJS backend and intuitive Angular frontend, simplifying workforce data operations."
          linkToUrl="https://staffhub-site.netlify.app"
          used={["Angular", "Tailwind CSS", "NodeJS"]}
        />
        <Card
          darkMode={darkMode}
          title="Newsfeed"
          description="Influenced by Dribbble's artistry, Newsfeed harmoniously unites React's functionality with creative aesthetic innovation."
          linkToUrl="https://newsfeed-site.netlify.app"
          used={["React", "Tailwind CSS"]}
        />
        <Card
          darkMode={darkMode}
          title="JavaScript Calculator"
          description="A freeCodeCamp challenge, this project highlights my logic and UI skills, crafting a JavaScript-powered interactive calculator."
          linkToUrl="https://codepen.io/Randolph-Mayson-Dy/full/VwVBXow"
          used={["React", "Bootstrap", "HTML5", "CSS3"]}
        />
        {/* <Card
          darkMode={darkMode}
          title="Random Quote Generator"
          description="Developed as a freeCodeCamp challenge, the Random Quote Generator provides ever-changing, engaging inspiration."
          linkToUrl="https://codepen.io/Randolph-Mayson-Dy/full/gOQzJVb"
          used={["React", "Bootstrap", "HTML5", "CSS3"]}
        /> */}
        <Card
          darkMode={darkMode}
          title="Location Tracker"
          description="An application that enables users to track searched locations and mark them accordingly. With deletion and table pagination capabilitites."
          linkToUrl="https://location-tracker-vue.netlify.app/"
          used={["Vue", "Tailwind CSS", "Google Maps"]}
        />
        <Card
          darkMode={darkMode}
          title="Markdown Previewer"
          description="This project empowers users to create, edit, and preview content using Markdown, streamlining formatting for content creation."
          linkToUrl="https://codepen.io/Randolph-Mayson-Dy/full/wvQxmVJ"
          used={["React", "Bootstrap", "HTML5", "CSS3"]}
        />
        <Card
          darkMode={darkMode}
          title="Pomodoro Timer"
          description="Inspired by Pomodoro, this project offers focused time management for enhanced productivity and balance."
          linkToUrl="https://codepen.io/Randolph-Mayson-Dy/full/OJaBJLd"
          used={["React", "Bootstrap", "HTML5", "CSS3"]}
        />
      </div>

      <div
        className="text-lg md:text-xl text-center mx-auto my-8 cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-via after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
        onClick={() => navigate("/archive")}
      >
        View all projects &#8594;
      </div>
    </div>
  );
};

export default Projects;
