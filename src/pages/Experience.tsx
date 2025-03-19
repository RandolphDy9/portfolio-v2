import { useNavigate } from "react-router-dom";
import GradientText from "../component/shared/GradientText";
import RevealAnimation from "../component/shared/RevealAnimation";
import MainLayout from "../layout/MainLayout";
import VolunteerImg1 from "../assets/images/dev1.jpeg";
import VolunteerImg2 from "../assets/images/dev2.jpeg";
import VolunteerImg3 from "../assets/images/dev3.jpeg";
import LinkWhite from "../assets/icons/dark/link-white.svg";
import LinkBlack from "../assets/icons/light/link-black.svg";

type CardType = {
  date: string;
  underDate: string;
  company: string;
  position: string;
  description: string;
  cards: string[];
};

type BadgeType = {
  label: string;
};

const Card = ({
  date,
  underDate,
  company,
  position,
  description,
  cards,
}: CardType) => {
  return (
    <div className="flex flex-col md:flex-row my-4 py-2 md:p-6 md:mx-18">
      <div className="flex flex-col justify-start w-full md:w-1/3 text-left md:text-right md:mx-4 font-secondary text-lg">
        <div>{date}</div>
        <div className="text-sm my-1">{underDate}</div>
      </div>
      <div className="flex flex-col justify-start w-full md:w-2/3 md:mx-4">
        <RevealAnimation leftToRight={true}>
          <GradientText
            text={company}
            classes="text-4xl font-main font-semibold"
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
        !darkMode ? "bg-light text-dark" : "bg-dark text-light"
      }`}
    >
      <MainLayout darkMode={darkMode}>
        <div className="flex flex-col w-full m-6 md:m-12">
          <div>
            <div
              className="mb-2 cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-via after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              onClick={() => navigate("/")}
            >
              &#8592; Randolph Dy
            </div>
            <div className="text-5xl">All Projects</div>
          </div>
          <div className="text-5xl md:text-6xl text-center md:mt-28 my-16">
            Work Experience
          </div>

          <Card
            date="Jan 2024 - Present"
            underDate="5 months +"
            company="Bluewaves Mobility Innovation Inc."
            position="Frontend Developer • Full time"
            description="Led the frontend development for BMI’s Radio Management System as the sole Frontend Developer."
            cards={[
              "ReactJS",
              "TypeScript",
              "Bootstrap",
              "Material UI"
            ]}
          />
          <Card
            date="Dec 2023 - Jan 2024"
            underDate="2 months"
            company="SerbLink"
            position="Frontend Developer • Permanent part time"
            description="Development of SerbLink website using Angular and Bootstrap for dynamic web applications."
            cards={[
              "Angular",
              "TypeScript",
              "HTML5",
              "CSS3",
              "Bootstrap",
            ]}
          />
          <Card
            date="Aug 2018 - Oct 2023"
            underDate="5 years and 3 months"
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
            underDate="8 months"
            company="DEVCON Philippines"
            position="Frontend Developer • Part time"
            description="Crafted responsive, user-friendly interfaces using React.js, utilizing Tailwind CSS extensively 30% for efficient styling."
            cards={["ReactJS", "Tailwind CSS", "NodeJS", "Figma", "TypeScript"]}
          />
          <Card
            date="Aug 2022 - Feb 2023"
            underDate="7 months"
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
            underDate="4 months"
            company="IT Creed"
            position="Angular Developer • Freelance"
            description="Development of responsive and reusable features for FunnelCone’s web
            content management system. Bringing mock-ups to life using Angular framework,
            collaborating closely with the team, and documenting bug tickets or any code changes."
            cards={["Angular", "Angular Material", "Firebase", "Bootstrap"]}
          />
          <Card
            date="Apr 2017 - Jun 2017"
            underDate="3 months"
            company="Exist Software Labs, Inc."
            position="Web Developer • Internship"
            description="Introduced to HTML, CSS, and JavaScript, and applied this knowledge to create a basic,
            fully functional order management system. Actively participated in Scrum meetings for other projects,
            contributed to bug identification and UI enhancements for specific web applications, and gained proficiency
            in using bug tracking tools such as Jira and DEN."
            cards={["HTML5", "CSS3", "JavaScript", "SQL"]}
          />

          <div className="text-3xl md:text-6xl text-center md:mt-28 my-16">
            Volunteer Experience
          </div>
          <Card
            date="Jan 2023 - Dec 2023"
            underDate="12 months"
            company="DEVCON Cebu"
            position="Social Media Manager"
            description="As a dedicated volunteer Social Media Manager for DEVCON Cebu, I led the development and execution
            of effective social media strategies, including content creation and community engagement. My initiatives resulted
            in a notable 30% increase in follower engagement. Additionally, I served as a lead learner volunteer for DEVCON Kids,
            facilitating interactive sessions on MicroBit core concepts through block coding during the MicroBit Code Camp on
            October 7th, 2023, at Mandaue City Central School. This experience was fulfilling, contributing to children's education
            and fostering an interest in technology."
            cards={[]}
          />
          <div className="md:w-5/6 mx-auto grid md:grid-cols-3 gap-6">
            <div className="grid gap-6 border rounded-3xl">
              <img
                className="object-cover h-full rounded-3xl"
                src={VolunteerImg1}
                alt="voluteer1-img"
              />
            </div>
            <div className="grid gap-6 border rounded-3xl">
              <img
                className="object-cover h-full rounded-3xl"
                src={VolunteerImg2}
                alt="voluteer2-img"
              />
            </div>
            <div className="grid gap-6 border rounded-3xl">
              <img
                className="object-cover h-full rounded-3xl"
                src={VolunteerImg3}
                alt="voluteer3-img"
              />
            </div>
          </div>
          <div
            className="text-lg md:text-xl text-center mx-auto my-8 cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-via after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            onClick={() =>
              window.open("https://www.facebook.com/devconcebu", "_blank")
            }
          >
            <div className="flex gap-4 my-4">
              <div>More About DEVCON Cebu</div>
              <img
                src={`${darkMode ? LinkWhite : LinkBlack}`}
                alt="external-link"
                width="24"
              />
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Experience;
