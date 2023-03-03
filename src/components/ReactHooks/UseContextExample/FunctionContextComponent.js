import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./UseContextExample";

const FunctionContextComponent = () => {
  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return <div style={themeStyles}>Theme</div>;
};

export default FunctionContextComponent;
