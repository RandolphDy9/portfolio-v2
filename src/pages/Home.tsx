import Footer from "../component/main/Footer";
import Hero from "../component/main/Hero";
import Offer from "../component/main/Offer";
import Projects from "../component/main/Projects";
import Skills from "../component/main/Skills";
import Testimonials from "../component/main/Testimonials";
import MainLayout from "../layout/MainLayout";
import Splash from "./Splash";

const Home = ({ darkMode, isAppVisible }: { darkMode: boolean, isAppVisible: boolean }) => {

  return (
    <div
        className={`min-h-screen h-full font-main ${
          !darkMode ? "bg-light text-dark" : "bg-dark text-white"
        }`}
      >
        {isAppVisible ? (
          <div className="z-10">
            <MainLayout darkMode={darkMode}>
              <div className="flex flex-col w-full">
                <Hero darkMode={darkMode} />
                <Skills />
                <Offer />
                {/* <About darkMode={darkMode} /> */}
                {/* <Experience /> */}
                <Projects darkMode={darkMode} />
                <Testimonials darkMode={darkMode} />
                <Footer darkMode={darkMode} />
              </div>
            </MainLayout>

            <div className="md:blur-blue z-0" style={{ pointerEvents: 'none' }}></div>
            <div className="md:blur-purple z-0" style={{ pointerEvents: 'none' }}></div>
          </div>
        ) : (
          <Splash />
        )}
      </div>
  )
}

export default Home;