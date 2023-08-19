import { useEffect, useState } from "react";
import "./App.css";
import About from "./component/about/About";
import Experience from "./component/experience/Experience";
import Footer from "./component/footer/Footer";
import Hero from "./component/hero/Hero";
import Navbar from "./component/navbar/Navbar";
import Offer from "./component/offer/Offer";
import Projects from "./component/projects/Projects";
import MainLayout from "./layout/MainLayout";
import Lottie from "lottie-react";
import animationData from "./assets/lottie/water.json";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isAppVisible, setIsAppVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppVisible(true);
    }, 6000);

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

  return (
    <>
      <div
        className={`min-h-screen h-full font-main ${
          !darkMode ? "bg-light text-dark" : "bg-dark text-white"
        }`}
      >
        {isAppVisible ? (
          <>
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
          </>
        ) : (
          <>
            <div className="flex justify-center items-center w-2/3 min-h-screen mx-auto">
              <Lottie animationData={animationData} />
              <div className="text-3xl font-main text-white my-10">
                " Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup. "
                <div className="text-sm my-3">
                  - Bruce Lee
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
