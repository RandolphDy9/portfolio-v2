import Footer from "../component/main/Footer";
import Hero2 from "../component/main/Hero2";
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
          !darkMode ? "text-dark" : "text-light"
        }`}
      >
        {isAppVisible ? (
          <div className="z-10">
            <MainLayout darkMode={darkMode}>
              <div className="flex flex-col w-full">
                <Hero2 darkMode={darkMode} />
                <Skills darkMode={darkMode} />
                <Offer darkMode={darkMode} />
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