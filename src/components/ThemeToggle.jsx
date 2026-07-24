import React from "react";
import { UserContext } from "../contextApi/Context";
import { useContext } from "react";



export const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(UserContext);

  return (
    <>
      <button className="w-[100px] h-[30px] mt-[30px] bg-gray-800 cursor-pointer font-bold font-serif text-[15px] text-white rounded-[10px] border-2 border-gray-800" onClick={toggleDarkMode}>
        {darkMode ? " Light Mode" : " Dark Mode"}
      </button>
    </>
  );
}


