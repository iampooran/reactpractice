import React, { useState } from "react";
import FunctionContextComponent from "./FunctionContextComponent";

export const ThemeContext = React.createContext();

const UseContextExample = () => {
  const [darkTheme, setDarkTheme] = useState();

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
      </ThemeContext.Provider>
    </>
  );
};

export default UseContextExample;
