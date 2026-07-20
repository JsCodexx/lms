import React from "react";
import { UserContext } from "../contextApi/Context";
import { useContext } from "react";



export const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(UserContext);

  return (
    <>
      <button className="theme" onClick={toggleDarkMode}>
        {darkMode ? " Light Mode" : " Dark Mode"}
      </button>
    </>
  );
}


