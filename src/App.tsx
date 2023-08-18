import { useState } from "react";
import "./App.css";
import About from "./component/about/About";
import Experience from "./component/experience/Experience";
import Footer from "./component/footer/Footer";
import Hero from "./component/hero/Hero";
import Navbar from "./component/navbar/Navbar";
import Offer from "./component/offer/Offer";
import Projects from "./component/projects/Projects";
import MainLayout from "./layout/MainLayout";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <>
      <div className={`min-h-screen h-full ${!darkMode ? 'bg-light text-dark' : 'bg-dark text-white'}`}>
        <Navbar
          darkMode={darkMode}
          handleDarkMode={() => setDarkMode(true)}
          handleLightMode={() => setDarkMode(false)}
        />

        <MainLayout darkMode={darkMode}>
          <div className="flex flex-col w-full">
            <Hero darkMode={darkMode} />
            <Offer />
            <About />
            <Experience />
            <Projects />
            <Projects />
            <Footer darkMode={darkMode} />
          </div>
        </MainLayout>
      </div>
    </>
  );
}

export default App;
