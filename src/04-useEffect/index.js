import React from "react";
import { useDarkMode } from "./useDarkMode";

const UseEffect = () => {
  let isDarkMode = useDarkMode;
  return (
    <div
      style={{
        height: 500,
        width: 500,
        color: isDarkMode ? "white" : "black",
        backgroundColor: isDarkMode ? "black" : "white",
      }}
    >
      Here's some content
    </div>
  );
};

export default UseEffect;
