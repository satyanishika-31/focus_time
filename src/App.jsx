import { useState ,useEffect} from "react";
import FocusTimer from "./Components/FocusTimer";

import React from 'react'

function App() {
  
 const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`min-h-screen ${theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}`}>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="m-4 px-2 py-2 bg-[#217D77] text-white rounded"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <FocusTimer />
    </div>
  );

}

export default App
  