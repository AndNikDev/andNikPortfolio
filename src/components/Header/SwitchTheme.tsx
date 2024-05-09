import { useState, useEffect } from "react";
import "./SwitchTheme.css";

const SwitchTheme = () => {
  const [theme, setTheme] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark"
  );

  useEffect(() => {}, [theme]);

  return (
    <div className={`switch ${theme}`}>
      <div className="switchText">
        {theme === "light" ? "☀️" : "🌑"}
      </div>
      <div
        className="switchContainer"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <div className="switchButton"></div>
      </div>
    </div>
  );
};

export default SwitchTheme;
