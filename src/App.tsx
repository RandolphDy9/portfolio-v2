import "./App.css";
import About from "./component/about/About";
import Experience from "./component/experience/Experience";
import Footer from "./component/footer/Footer";
import Hero from "./component/hero/Hero";
import Navbar from "./component/navbar/Navbar";
import Projects from "./component/projects/Projects";
import MainLayout from "./layout/MainLayout";

function App() {

  return (
    <>
      <div className="min-h-screen h-full bg-white">
        <Navbar />

        <MainLayout>
          <div className="flex flex-col w-full">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Footer />
          </div>
        </MainLayout>
      </div>
    </>
  );
}

export default App;
