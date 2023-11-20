import { useNavigate } from "react-router-dom";
import GradientText from "../component/shared/GradientText";
import MainLayout from "../layout/MainLayout";
import Dop from "../assets/images/about-me-pic.jpg";

const About = ({ darkMode }: { darkMode: boolean }) => {
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
          <div className="text-3xl md:text-6xl text-center md:pt-28 py-16">
            About Me
          </div>
          <div className="mb-12 text-lg md:w-4/5 mx-auto flex flex-col md:flex-row justify-center gap-8">
            <img src={Dop} alt="My-photo" className="w-full md:w-1/4" />
            <div className="flex flex-col justify-center">
              <div className="text-3xl md:text-4xl">Randolph Mayson Dy</div>
              <div className="my-4">Experienced Frontend Developer | Angular, React, and TypeScript | 🚀 25%+ User Engagement Growth | Actively Seeking Mid-Level Opportunities</div>
              <div>Based in Toronto, Canada</div>
            </div>
          </div>
          <div className="flex flex-col gap-8 md:w-4/5 mx-auto">
            <div className="">
              <GradientText
                text="Career"
                classes="font-main text-4xl md:text-5xl font-bold py-2"
              />
              <div className="my-4">
                With five years of experience as a Frontend Developer, I'm
                deeply passionate about web development and dedicated to
                assisting others. My expertise in HTML, CSS, and JavaScript
                provides a strong foundation for creating visually appealing and
                robust websites.
                <br />
                <br />
                What sets me apart as a Frontend Developer is my innate ability
                to thrive in collaborative environments. I am a natural
                bridge-builder, adept at forming seamless connections with
                diverse teams, whether it's coordinating harmoniously with
                backend developers to ensure the flawless functionality of web
                applications or collaborating closely with UI designers to bring
                artistic visions to life. This collaborative spirit fuels a
                constant flow of innovative ideas, fostering an environment
                where collective creativity flourishes and projects are driven
                toward the pinnacle of excellence.
                <br />
                <br />
                In summary, I am not just a dedicated Frontend Developer, but a
                passionate advocate for web development and a collaborative
                problem solver. I am unwaveringly committed to delivering
                top-tier web experiences that seamlessly blend aesthetics and
                functionality. My journey is marked by the pursuit of
                excellence, a dedication to effective collaboration, and an
                unwavering openness to new opportunities for personal and
                professional growth and innovation.
              </div>
            </div>

            <div className="">
              <GradientText
                text="Existence"
                classes="font-main text-4xl md:text-5xl font-bold py-2"
              />
              <div className="my-4">
                Armed with a Bachelor's degree in Computer Engineering, I
                embarked on a journey fueled by insatiable curiosity and
                unwavering determination. My academic pursuits culminated in a
                groundbreaking thesis titled 'Video-Based Traffic Density
                Calculator with Traffic Light Control Simulation,' a project
                that garnered global acclaim at CCSE-ASEAN 2019 and ICONTAS '23.
                <br />
                <br />
                While technology has been a driving force in my life, there's
                more to me than just code. I find solace and a sense of freedom
                on the basketball court, where every dribble becomes a metaphor
                for life's challenges and triumphs. Off the court, the
                enchanting melodies of music offer a soothing escape, enriching
                the tapestry of my existence. Additionally, I have a deep
                affection for my two loyal canine companions. I love playing
                with my dogs, taking them on leisurely walks, and savoring
                moments of pure connection with these furry friends.
                <br />
                <br />
                And as a passionate traveler, I have an insatiable appetite for
                exploring new places, experiencing diverse cultures, and seeking
                inspiration from the wonders of the world. My life is a fusion
                of innovation, competition, artistic expression, and the thrill
                of discovering new horizons, both in the tech world and in the
                realm of human experience.
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default About;
