"use client"

import { useEffect, useState } from "react"
import ThemeContext from "@/context/themeContext";

const ThemeProvider = ({ children }: {children: React.ReactNode}) => {
  // grab theme from local storage if it exists, otherwise default to light
  const storedTheme: boolean = typeof localStorage !== "undefined" && localStorage.getItem("theme") 
    ? JSON.parse(localStorage.getItem("theme")!) 
    : false;

  // set states
  const [darkTheme, setDarkTheme] = useState<boolean>(storedTheme);
  const [renderComponent, setRenderComponent] = useState(false);

  // set effects
  useEffect(() => {
    setDarkTheme(storedTheme);
    setRenderComponent(true);
  }, [storedTheme]);

  if (!renderComponent) return null;
  
  return (
    <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
      <div className={`${darkTheme ? "dark" : ""} min-h-screen`}>
        <div className={`dark:text-[#e0e0e0] dark:bg-[#191919] bg-slate-100 text-[#444444]`}>
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;