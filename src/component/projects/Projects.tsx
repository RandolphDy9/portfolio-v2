import LinkWhite from "../../assets/icons/dark/link-white.svg";
import LinkBlack from "../../assets/icons/light/link-black.svg";
import FolderWhite from "../../assets/icons/dark/folder-white.svg";
import FolderBlack from "../../assets/icons/light/folder-black.svg";
import GradientText from "../shared/GradientText";

type ProjectType = {
  darkMode: boolean;
};

type BadgeType = {
  label: string;
};

const Badge = ({ label }: BadgeType) => {
  return (
    <div className="px-3 py-1 font-secondary border border-accent text-accent rounded-lg text-xs">
      {label}
    </div>
  );
};

const Card = ({ darkMode }: ProjectType) => {
  return (
    <div className="m-4">
      <div className="p-0.5 my-auto rounded bg-gradient-to-r from-from via-via to-to">
        <div
          className={`p-6 flex flex-col gap-2 ${
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
            <div>
              <img
                src={`${darkMode ? LinkWhite : LinkBlack}`}
                alt="external-link"
                width="24"
              />
            </div>
          </div>
          <GradientText text="Project Title" classes="text-4xl font-bold" />
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vestibulum, lacus et iaculis laoreet, ipsum sapien fringilla purus,
            a interdum arcu quam in augue.
          </div>
          <div className="flex gap-2">
            <Badge label="React" />
            <Badge label="Tailwind CSS" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = ({ darkMode }: ProjectType) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:mb-20">
        <div className="m-20">
          <div>Featured Project</div>
          <GradientText text="Randolph Dy Portfolio v1" classes="text-5xl font-bold" />
          <div className="my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vestibulum, lacus et iaculis laoreet, ipsum sapien fringilla purus,
            a interdum arcu quam in augue.
          </div>
          <div className="flex gap-2">
            <Badge label="React" />
            <Badge label="Tailwind CSS" />
          </div>
        </div>
        <div className="bg-gray-200 h-96 w-full">Project Image</div>
      </div>
      <div className="text-5xl text-center md:mt-28 my-12">Other Projects</div>
      <div className="grid grid-cols-2 md:grid-cols-3">
        <Card darkMode={darkMode} />
        <Card darkMode={darkMode} />
        <Card darkMode={darkMode} />
        <Card darkMode={darkMode} />
        <Card darkMode={darkMode} />
        <Card darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Projects;
