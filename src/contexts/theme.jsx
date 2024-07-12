"use client";
import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    if (theme == "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ value: theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeProvider };
export default ThemeContext;
