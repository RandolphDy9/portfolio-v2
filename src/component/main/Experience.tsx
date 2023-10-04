import GradientText from "../shared/GradientText";
import RevealAnimation from "../shared/RevealAnimation";

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

const Timeline = () => {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
        The IPO
      </div>
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
          May, 2023
        </time>
        <div className="text-xl font-bold text-slate-900">
          Acme went public at the New York Stock Exchange
        </div>
      </div>
      <div className="text-slate-500">
        Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
        Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.
      </div>
    </div>
  );
};

const Card = ({ date, company, position, description, cards }: CardType) => {
  return (
    <div className="flex flex-col md:flex-row my-12 md:my-16 p-6">
      <div className="flex flex-col justify-start w-full md:w-1/3 text-left md:text-right md:mx-4 font-secondary text-xl">
        {date}
      </div>
      <div className="flex flex-col justify-start w-full md:w-2/3 md:mx-4">
        <RevealAnimation leftToRight={true}>
          <GradientText text={company} classes="text-5xl font-main font-bold" />
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

const Experience = () => {
  return (
    <div>
      <div className="text-3xl md:text-6xl text-center md:mt-28 my-16">
        Work Experience
      </div>
      
      {/* <Timeline />
      <Timeline />
      <Timeline />
      <Timeline /> */}

      <Card
        date="August 2018 - Present"
        company="Exist Software Labs, Inc."
        position="Frontend Developer • Full time"
        description="Contributed to the core system of development by working on modules
        and new features for applications using HTML5, CSS3, JavaScript, and
        Angular."
        cards={["Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Bootstrap", "AngularJS"]}
      />
      <Card
        date="August 2022 - Present"
        company="Talino Venture Labs"
        position="Frontend Developer • Part time"
        description="Writing well-structured, modular, and maintainable code using best
        practices and following coding standards. Working with React to develop web apps."
        cards={["ReactJS", "Tailwind CSS", "Webflow", "TypeScript", "Bootstrap", "NodeJS", "MongoDB"]}
      />
      <Card
        date="June 2021 - Sep 2021"
        company="IT Creed"
        position="Angular Developer • Freelance"
        description="Development of responsive and reusable features for FunnelCone’s web
        content management system. Bringing mock-ups to life using Angular framework,
        collaborating closely with the team, and documenting bug tickets or any code changes."
        cards={["Angular", "Angular Material", "Firebase", "Bootstrap"]}
      />

      {/* <div className="text-3xl md:text-6xl text-center md:mt-28 my-16">
        Volunteer Experience
      </div>
      <Card
        date="January 2023 - Present"
        company="DEVCON Cebu"
        position="Angular Developer • Freelance"
        description="Development of responsive and reusable features for FunnelCone’s web
        content management system. Bringing mock-ups to life using Angular framework,
        collaborating closely with the team, and documenting bug tickets or any code changes."
        cards={["Angular", "Angular Material", "Firebase", "Bootstrap"]}
      /> */}
    </div>
  );
};

export default Experience;
