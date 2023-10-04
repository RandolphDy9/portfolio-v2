import { useState } from "react";
import Navbar from "../component/main/Navbar";
import MainLayout from "../layout/MainLayout";
import { useNavigate } from "react-router-dom";

const Archive = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const navigate = useNavigate();

  return (
    <div
      className={`min-h-screen h-full font-main ${
        !darkMode ? "bg-light text-dark" : "bg-dark text-white"
      }`}
    >
      <Navbar
        darkMode={darkMode}
        handleDarkMode={() => setDarkMode(!darkMode)}
      />

      <MainLayout darkMode={darkMode}>
        <div className="flex flex-col w-full m-6 md:m-12">
          <div onClick={() => navigate('/')}>&#8592; Randolph Dy</div>
          <div className="text-5xl">
            All Projects
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Archive;
