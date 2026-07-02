import React from "react";
import { UserContext } from "../contextApi/Context";
import { useContext } from "react";



export const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(UserContext);

  return (
    <>
      <button onClick={toggleDarkMode}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </>
  );
}


