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

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

  return (
    <Router>
      {isAppVisible &&
        <Navbar
          darkMode={darkMode}
          handleDarkMode={() => setDarkMode(!darkMode)}
        />
      }
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} isAppVisible={isAppVisible} />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />
        <Route path="/experience" element={<Experience darkMode={darkMode} />} />
        <Route path="/archive" element={<Archive darkMode={darkMode} />} />
      </Routes>
    </Router>
  );
}

export default App;
