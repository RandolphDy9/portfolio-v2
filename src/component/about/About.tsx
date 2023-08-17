import { useState } from "react";

const About = () => {
  const [tab, setTab] = useState<string>("pixels");

  return (
    <div>
      {/* Quote About Work - Life Balance */}
      <div className="flex justify-center text-center items-center text-4xl font-main w-1/2 mx-auto my-20">
        " Balancing the lines of code with the contours of life, I craft the digital
        canvas of tomorrow while painting the masterpiece of today. "
      </div>

      {/* Balancing pixels and passion, a frontend developer crafts the digital
        canvas of tomorrow while painting the masterpiece of today. */}

      {/* Striking the perfect harmony between crafting pixel-perfect interfaces and savoring life's moments
      is the artistry of a frontend developer. Balancing the lines of code with the contours of life, we blend
      the digital canvas with the colors of living, weaving a masterpiece of work-life harmony. */}

      <div className="flex justify-center items-center text-3xl">
        <div
          className={`px-32 py-6 border rounded-tl-xl cursor-pointer text-accent font-bold`}
          onClick={() => setTab("pixels")}
        >
          Pixels
        </div>
        <div
          className={`px-32 py-6 border rounded-tr-xl cursor-pointer text-accent font-bold`}
          onClick={() => setTab("passion")}
        >
          Passion
        </div>
      </div>

      {tab === "pixels" ? (
        <>
          {/* About Work */}
          <div className="flex my-6">
            <div className="w-1/3 p-4 bg-gray-200 border">image?</div>
            <div className="w-2/3 p-4 overflow-y-scroll">
              <div className="p-10 font-secondary">
                Experienced Front-end Developer with 5+ years of professional
                experience building responsive websites and applications.
                Proficient in HTML, CSS, JavaScript, and frameworks like React
                and Angular with a strong focus on creating excellent user
                experiences and interfaces.
                <br />
                <br />I specialize in crafting visually stunning and seamlessly
                functional websites that captivate users. With expertise in
                HTML, CSS, and JavaScript, as well as frameworks like React and
                Angular, I have successfully transformed design concepts into
                fully responsive and intuitive interfaces. Through meticulous
                attention to detail and a user-centric approach, I deliver
                exceptional user experiences that exceed expectations.
                <br />
                <br />
                My commitment to continuous learning and staying up-to-date with
                industry trends allows me to incorporate cutting-edge
                technologies and best practices into my work. By utilizing agile
                methodologies and collaborating with cross-functional teams, I
                consistently deliver high-quality code that enhances performance
                and usability. Let's collaborate and bring your ideas to life
                with a front-end experience that engages and inspires users.
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* About Life */}
          <div className="flex my-6">
            <div className="w-2/3 p-4 overflow-y-scroll">
              <div className="p-10 font-secondary">
                Experienced Front-end Developer with 5+ years of professional
                experience building responsive websites and applications.
                Proficient in HTML, CSS, JavaScript, and frameworks like React
                and Angular with a strong focus on creating excellent user
                experiences and interfaces.
                <br />
                <br />I specialize in crafting visually stunning and seamlessly
                functional websites that captivate users. With expertise in
                HTML, CSS, and JavaScript, as well as frameworks like React and
                Angular, I have successfully transformed design concepts into
                fully responsive and intuitive interfaces. Through meticulous
                attention to detail and a user-centric approach, I deliver
                exceptional user experiences that exceed expectations.
                <br />
                <br />
                My commitment to continuous learning and staying up-to-date with
                industry trends allows me to incorporate cutting-edge
                technologies and best practices into my work. By utilizing agile
                methodologies and collaborating with cross-functional teams, I
                consistently deliver high-quality code that enhances performance
                and usability. Let's collaborate and bring your ideas to life
                with a front-end experience that engages and inspires users.
              </div>
            </div>
            <div className="w-1/3 p-4 bg-gray-200 border">image?</div>
          </div>
        </>
      )}
    </div>
  );
};

export default About;
