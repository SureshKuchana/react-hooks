import React from "react";
import { useAppContext } from "./appContext";

const ThemeControl = () => {
  let { theme, setTheme } = useAppContext();

  return (
    <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      ThemeControl
    </div>
  );
};

export default ThemeControl;
