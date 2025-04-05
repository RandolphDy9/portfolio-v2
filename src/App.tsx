import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import About from "./pages/About";
import { useEffect, useState } from "react";
import Navbar from "./component/main/Navbar";
import Experience from "./pages/Experience";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isAppVisible, setIsAppVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppVisible(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen font-main">
      <div
        className={`fixed inset-0 -z-10 w-full h-full ${
          darkMode
            ? "bg-dark text-light"
            : "bg-white text-dark"
        }`}
      ></div>

      <Router>
        {isAppVisible && (
          <Navbar
            darkMode={darkMode}
            handleDarkMode={() => setDarkMode(!darkMode)}
          />
        )}

        <Routes>
          <Route
            path="/"
            element={<Home darkMode={darkMode} isAppVisible={isAppVisible} />}
          />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route
            path="/experience"
            element={<Experience darkMode={darkMode} />}
          />
          <Route path="/archive" element={<Archive darkMode={darkMode} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
