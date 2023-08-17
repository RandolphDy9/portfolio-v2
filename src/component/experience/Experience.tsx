type CardType = {
  date: string;
  company: string;
  position: string;
  description: string;
  cards: string[];
};

const Card = ({ date, company, position, description, cards }: CardType) => {
  return (
    <div className="flex flex-row my-12">
      <div className="flex flex-col justify-start w-1/3 text-right mx-4 font-secondary">
        {date}
      </div>
      <div className="flex flex-col justify-start w-2/3 mx-4">
        <div className="text-2xl font-main">{company}</div>
        <div className="text-lg font-main">{position}</div>
        <div className="font-secondary">{description}</div>
        <div className="flex gap-2 my-1">
          { cards.map(card => {
            return (
              <Badge label={card} />
            )
          }) }
        </div>
      </div>
    </div>
  );
};

const Badge = ({ label }: { label: string }) => {
  return (
    <div className="px-3 py-1 font-secondary border rounded-lg text-xs">
      { label }
    </div>
  )
}

const Experience = () => {
  return (
    <div className="border">
      <Card
        date="August 2018 - Present"
        company="Exist Siftware Labs, Inc."
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
        cards={["ReactJS", "Tailwind CSS", "Webflow", "TypeScript", "Ionic", "Bootstrap"]}
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
    </div>
  );
};

export default Experience;
