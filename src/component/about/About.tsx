import { useState } from "react";
import RevealAnimation from "../shared/RevealAnimation";
import Work from "../../assets/images/work.jpeg";
import Life from "../../assets/images/life2.jpeg";

const About = ({ darkMode }: { darkMode: boolean }) => {
  const [tab, setTab] = useState<string>("work");

  return (
    <div>
      {/* Quote About Work - Life Balance */}
      <RevealAnimation>
        <div className="flex justify-center text-center items-center text-3xl md:text-7xl font-bold font-main w-full mx-auto md:my-14 flex-wrap">
          Blending precise interfaces and life's moments, a frontend developer
          creates a symphony of code and living, crafting a masterpiece of
          <div className="flex p-4 gap-4 items-center">
            <div className={`cursor-pointer ${tab === 'work' ? 'bg-gradient-to-r from-from via-via to-to text-transparent bg-clip-text' : 'border-2 border-from p-2 hover:scale-125'}`} onClick={() => setTab('work')}>Work</div>
            <div className={`cursor-pointer ${tab === 'life' ? 'bg-gradient-to-r from-from via-via to-to text-transparent bg-clip-text' : 'border-2 border-from p-2 hover:scale-125'}`} onClick={() => setTab('life')}>Life</div>
          </div>
          harmony.
        </div>
      </RevealAnimation>

      {/* Balancing pixels and passion, a frontend developer crafts the digital
        canvas of tomorrow while painting the masterpiece of today. */}

      {/* Striking the perfect harmony between crafting pixel-perfect interfaces and savoring life's moments
      is the artistry of a frontend developer. Balancing the lines of code with the contours of life, we blend
      the digital canvas with the colors of living, weaving a masterpiece of work-life harmony. */}

      {tab === "work" ? (
        <>
          {/* About Work */}
          <div className="flex flex-col md:flex-row my-6">
            <div className={`w-full md:w-1/3 md:p-4 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
              <img src={Work} alt="working" className="object-cover w-full h-full opacity-80" />
            </div>
            <div className="w-full md:w-2/3 md:p-4 overflow-y-scroll">
              <div className="p-10 font-secondary text-lg">
                <RevealAnimation>
                  Experienced Front-end Developer with over 5 years of
                  professional expertise in building responsive websites and
                  applications. Skilled in HTML, CSS, JavaScript, React, and
                  Angular, with a strong focus on creating exceptional user
                  interfaces and experiences.
                </RevealAnimation>
                <br />
                <br />
                <RevealAnimation>
                  I specialize in crafting visually appealing and functional
                  websites that engage users. With proficiency in HTML, CSS,
                  JavaScript, React, and Angular, I've successfully transformed
                  design concepts into responsive interfaces. Through careful
                  attention to detail and a user-centered approach, I create
                  outstanding user experiences.
                </RevealAnimation>
                <br />
                <br />
                <RevealAnimation>
                  My commitment to ongoing learning and staying updated with
                  industry trends enables me to incorporate cutting-edge
                  technologies into my work. By using agile methodologies and
                  collaborating with cross-functional teams, I consistently
                  deliver high-quality code that enhances performance and
                  usability. Let's work together to bring your ideas to life with
                  an engaging front-end experience.
                </RevealAnimation>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* About Life */}
          <div className="flex flex-col md:flex-row my-6">
            <div className="w-full md:w-2/3 md:p-4 overflow-y-scroll">
              <div className="p-10 font-secondary text-lg">
                <RevealAnimation>
                  Welcome to my corner of the web! I'm thrilled to share a glimpse
                  of my journey with you.
                </RevealAnimation>
                <br />
                <br />
                <RevealAnimation>
                  Armed with a Bachelor's degree in Computer Engineering, I
                  embarked on a path fueled by curiosity and determination. A
                  crowning achievement was our groundbreaking thesis, "Video-Based
                  Traffic Density Calculator with Traffic Light Control
                  Simulation," which garnered recognition from across the globe.
                  Our work shone on the international stage at the International
                  Conference on Climate Change and Sustainability Engineering in
                  ASEAN (CCSE-ASEAN) 2019, as well as the prestigious
                  International Conference on New Trends in Applied Sciences
                  (ICONTAS '23).
                </RevealAnimation>
                <br />
                <br />
                <RevealAnimation>
                  Beyond the digital realm, I find solace on the basketball court,
                  where the game becomes my ultimate stress reliever and a
                  sanctuary of tranquility. Alongside Kobe, my endearing
                  3-year-old Shih Tzu, life's simple pleasures are magnified, each
                  tail wag a reminder of pure joy. Music, my unwavering companion,
                  weaves its enchanting melodies into my focus and emotions. As
                  life orchestrates its intricate symphony of experiences, I'm
                  excited to share my journey with you – so, welcome once more,
                  and let's embark on this harmonious adventure together.
                </RevealAnimation>
              </div>
            </div>
            <div className={`w-full md:w-1/3 md:p-4 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
              <img src={Life} alt="working" className="object-cover w-full h-full opacity-75" />
            </div>
          </div>

          {/* Our thesis entitled, "Video-Based Traffic Density Calculator with 
          Traffic Light Control Simulation" got recognized from around different countries. 
          We got invited to present to the International Conference on Climate Change and 
          Sustainability Engineering in ASEAN (CCSE-ASEAN)2019 and International Conference 
          on New Trends in Applied Sciences (ICONTAS '23) */}
        </>
      )}
    </div>
  );
};

export default About;
