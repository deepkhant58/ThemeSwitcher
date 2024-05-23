import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState("theme-blue");

  useEffect(() => {
    const currentColor = localStorage.getItem("Theme-color");
    if (currentColor) {
      setThemeColor(currentColor);
    }
  }, []);

  const handleClick = (theme) => {
    setThemeColor(theme);
    localStorage.setItem("Theme-color", theme);
  };

  return (
    <ThemeContext.Provider value={{ themeColor, handleClick }}>
      <div className={`App ${themeColor}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
