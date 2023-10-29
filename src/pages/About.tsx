import { useNavigate } from "react-router-dom";
import GradientText from "../component/shared/GradientText";
import MainLayout from "../layout/MainLayout";

const About = ({ darkMode }: { darkMode: boolean }) => {
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
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 md:px-12">
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

            <div className="md:w-1/2 md:px-12">
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

    // <div>
    //   <RevealAnimation>
    //     <div className="flex justify-center text-center items-center text-3xl md:text-7xl font-semibold font-main w-full mx-auto md:my-14 flex-wrap">
    //       Blending precise interfaces and life's moments, a frontend developer
    //       creates a symphony of code and living, crafting a masterpiece of
    //       <div className="flex p-4 gap-4 items-center">
    //         <div className={`cursor-pointer ${tab === 'work' ? 'bg-gradient-to-r from-from via-via to-to text-transparent bg-clip-text' : 'border-2 border-from p-2 hover:scale-125'}`} onClick={() => setTab('work')}>Work</div>
    //         <div className={`cursor-pointer ${tab === 'life' ? 'bg-gradient-to-r from-from via-via to-to text-transparent bg-clip-text' : 'border-2 border-from p-2 hover:scale-125'}`} onClick={() => setTab('life')}>Life</div>
    //       </div>
    //       harmony.
    //     </div>
    //   </RevealAnimation>

    //   {tab === "work" ? (
    //     <>
    //       {/* About Work */}
    //       <div className="flex flex-col md:flex-row my-6">
    //         <div className={`w-full md:w-1/3 md:p-4 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
    //           <img src={Work} alt="working" className="object-cover w-full h-full opacity-80" />
    //         </div>
    //         <div className="w-full md:w-2/3 md:p-4 overflow-y-scroll">
    //           <div className="p-10 font-secondary text-lg">
    //             <RevealAnimation>
    // Experienced Front-end Developer with over 5 years of
    // professional expertise in building responsive websites and
    // applications. Skilled in HTML, CSS, JavaScript, React, and
    // Angular, with a strong focus on creating exceptional user
    // interfaces and experiences.
    //             </RevealAnimation>
    //             <br />
    //             <br />
    //             <RevealAnimation>
    // I specialize in crafting visually appealing and functional
    // websites that engage users. With proficiency in HTML, CSS,
    // JavaScript, React, and Angular, I've successfully transformed
    // design concepts into responsive interfaces. Through careful
    // attention to detail and a user-centered approach, I create
    // outstanding user experiences.
    //             </RevealAnimation>
    //             <br />
    //             <br />
    //             <RevealAnimation>
    // My commitment to ongoing learning and staying updated with
    // industry trends enables me to incorporate cutting-edge
    // technologies into my work. By using agile methodologies and
    // collaborating with cross-functional teams, I consistently
    // deliver high-quality code that enhances performance and
    // usability. Let's work together to bring your ideas to life with
    // an engaging front-end experience.
    //             </RevealAnimation>
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   ) : (
    //     <>
    //       {/* About Life */}
    //       <div className="flex flex-col md:flex-row my-6">
    //         <div className="w-full md:w-2/3 md:p-4 overflow-y-scroll">
    //           <div className="p-10 font-secondary text-lg">
    //             <RevealAnimation>
    //               Welcome to my corner of the web! I'm thrilled to share a glimpse
    //               of my journey with you.
    //             </RevealAnimation>
    //             <br />
    //             <br />
    //             <RevealAnimation>
    // Armed with a Bachelor's degree in Computer Engineering, I
    // embarked on a path fueled by curiosity and determination. A
    // crowning achievement was our groundbreaking thesis, "Video-Based
    // Traffic Density Calculator with Traffic Light Control
    // Simulation," which garnered recognition from across the globe.
    // Our work shone on the international stage at the International
    // Conference on Climate Change and Sustainability Engineering in
    // ASEAN (CCSE-ASEAN) 2019, as well as the prestigious
    // International Conference on New Trends in Applied Sciences
    // (ICONTAS '23).
    //             </RevealAnimation>
    //             <br />
    //             <br />
    //             <RevealAnimation>
    // Beyond the digital realm, I find solace on the basketball court,
    // where the game becomes my ultimate stress reliever and a
    // sanctuary of tranquility. Alongside Kobe, my endearing
    // 3-year-old Shih Tzu, life's simple pleasures are magnified, each
    // tail wag a reminder of pure joy. Music, my unwavering companion,
    // weaves its enchanting melodies into my focus and emotions. As
    // life orchestrates its intricate symphony of experiences, I'm
    // excited to share my journey with you – so, welcome once more,
    // and let's embark on this harmonious adventure together.
    //             </RevealAnimation>
    //           </div>
    //         </div>
    //         <div className={`w-full md:w-1/3 md:p-4 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
    //           <img src={Life} alt="working" className="object-cover w-full h-full opacity-75" />
    //         </div>
    //       </div>
    //     </>
    //   )}
    // </div>
  );
};

export default About;
