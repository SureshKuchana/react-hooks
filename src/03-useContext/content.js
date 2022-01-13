import React from "react";
import { useAppContext } from "./appContext";

const Content = () => {
  let { theme } = useAppContext();
  return (
    <div style={{ color: theme === "dark" ? "blacK" : "red" }}>Content</div>
  );
};

export default Content;
