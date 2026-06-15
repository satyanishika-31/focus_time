import { useState, useEffect } from "react";
import FocusTimer from "./Components/FocusTimer";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light",
  );

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className={`min-h-screen px-4 py-4 sm:px-6 ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="mb-6 w-full rounded bg-[#217D77] px-4 py-2 text-sm font-medium text-white sm:w-auto"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <FocusTimer />
    </div>
  );

}

export default App;
