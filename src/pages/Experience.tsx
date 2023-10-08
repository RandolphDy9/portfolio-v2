import { useNavigate } from "react-router-dom";
import GradientText from "../component/shared/GradientText";
import RevealAnimation from "../component/shared/RevealAnimation";
import MainLayout from "../layout/MainLayout";

type CardType = {
  date: string;
  company: string;
  position: string;
  description: string;
  cards: string[];
};

type BadgeType = {
  label: string;
};

const Card = ({ date, company, position, description, cards }: CardType) => {
  return (
    <div className="flex flex-col md:flex-row my-4 p-6 md:mx-24">
      <div className="flex flex-col justify-start w-full md:w-1/3 text-left md:text-right md:mx-4 font-secondary text-xl">
        {date}
      </div>
      <div className="flex flex-col justify-start w-full md:w-2/3 md:mx-4">
        <RevealAnimation leftToRight={true}>
          <GradientText
            text={company}
            classes="text-5xl font-main font-semibold"
          />
        </RevealAnimation>
        <div className="text-xl font-main">
          <RevealAnimation>{position}</RevealAnimation>
        </div>
        <div className="font-secondary my-2">
          <RevealAnimation>{description}</RevealAnimation>
        </div>
        <div className="flex flex-wrap gap-2 my-1">
          {cards.map((card) => {
            return <Badge key={card} label={card} />;
          })}
        </div>
      </div>
    </div>
  );
};

const Badge = ({ label }: BadgeType) => {
  return (
    <div className="px-3 py-1 font-secondary border border-accent text-accent rounded-lg text-xs">
      {label}
    </div>
  );
};

const Experience = ({ darkMode }: { darkMode: boolean }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`min-h-screen h-full font-main ${
        !darkMode ? "bg-light text-dark" : "bg-dark text-white"
      }`}
    >
      <MainLayout darkMode={darkMode}>
        <div className="flex flex-col w-full m-6 md:m-12">
          <div>
            <div
              className="cursor-pointer hover:underline hover:underline-offset-2"
              onClick={() => navigate("/")}
            >
              &#8592; Randolph Dy
            </div>
            <div className="text-5xl">All Projects</div>
          </div>
          <div className="text-3xl md:text-6xl text-center md:mt-28 my-16">
            Work Experience
          </div>

          <Card
            date="Aug 2018 - Present"
            company="Exist Software Labs, Inc."
            position="Frontend Developer • Full time"
            description="Contributed to the core system of development by working on modules
            and new features for applications using HTML5, CSS3, JavaScript, and
            Angular."
            cards={[
              "Angular",
              "TypeScript",
              "JavaScript",
              "HTML5",
              "CSS3",
              "Bootstrap",
              "AngularJS",
            ]}
          />
          <Card
            date="Feb 2023 - Sep 2023"
            company="DEVCON Philippines"
            position="Frontend Developer • Part time"
            description="Crafted responsive, user-friendly interfaces using React.js, utilizing Tailwind CSS extensively 30% for efficient styling."
            cards={["ReactJS", "Tailwind CSS", "NodeJS", "Figma", "TypeScript"]}
          />
          <Card
            date="Aug 2022 - Feb 2023"
            company="Talino Venture Labs"
            position="Frontend Developer • Part time"
            description="Writing well-structured, modular, and maintainable code using best
            practices and following coding standards. Working with React to develop web apps."
            cards={[
              "ReactJS",
              "Tailwind CSS",
              "Webflow",
              "TypeScript",
              "Bootstrap",
              "NodeJS",
              "MongoDB",
            ]}
          />
          <Card
            date="Jun 2021 - Sep 2021"
            company="IT Creed"
            position="Angular Developer • Freelance"
            description="Development of responsive and reusable features for FunnelCone’s web
            content management system. Bringing mock-ups to life using Angular framework,
            collaborating closely with the team, and documenting bug tickets or any code changes."
            cards={["Angular", "Angular Material", "Firebase", "Bootstrap"]}
          />

          <div className="text-3xl md:text-6xl text-center md:mt-28 my-16">
            Volunteer Experience
          </div>
          <Card
            date="Jan 2023 - Present"
            company="DEVCON Cebu"
            position="Social Media Manager"
            description="As a dedicated volunteer at DEVCON Cebu, I have had the privilege of serving as
            the Social Media Manager, contributing to the organization's mission of fostering growth and
            innovation in the tech industry within the Philippines. My role involves managing and curating
            the online presence of DEVCON Cebu across various social media platforms."
            cards={[]}
          />
        </div>
      </MainLayout>
    </div>
  );
};

export default Experience;
