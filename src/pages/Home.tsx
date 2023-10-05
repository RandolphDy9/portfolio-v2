import { useState, useEffect } from "react";
// import About from "../component/main/About";
import Experience from "../component/main/Experience";
import Footer from "../component/main/Footer";
import Hero from "../component/main/Hero";
import Navbar from "../component/main/Navbar";
import Offer from "../component/main/Offer";
import Projects from "../component/main/Projects";
import MainLayout from "../layout/MainLayout";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/water.json";
import About from "../component/main/About";

const Home = () => {

  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isAppVisible, setIsAppVisible] = useState(true);

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   setIsAppVisible(true);
    // }, 6000);

    // return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

  return (
    <div
        className={`min-h-screen h-full font-main ${
          !darkMode ? "bg-light text-dark" : "bg-dark text-white"
        }`}
      >
        {isAppVisible ? (
          <div className="z-10">
            <Navbar
              darkMode={darkMode}
              handleDarkMode={() => setDarkMode(!darkMode)}
            />

            <MainLayout darkMode={darkMode}>
              <div className="flex flex-col w-full">
                <Hero darkMode={darkMode} />
                <Offer />
                <About darkMode={darkMode} />
                <Experience />
                <Projects darkMode={darkMode} />
                <Footer darkMode={darkMode} />
              </div>
            </MainLayout>

            <div className="md:blur-blue z-0" style={{ pointerEvents: 'none' }}></div>
            <div className="md:blur-purple z-0" style={{ pointerEvents: 'none' }}></div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-2/3 min-h-screen mx-auto">
            <Lottie animationData={animationData} />
            <div className="text-3xl font-main text-white my-10 p-10 md:p-0">
              " Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup. "
              <div className="text-sm my-3">
                - Bruce Lee
              </div>
            </div>
          </div>
        )}
      </div>
  )
}

export default Home;