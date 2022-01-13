import React from "react";
import AppProvider from "./appContext";
import Content from "./content";
import SideBar from "./sidebar";

const UseContext = () => {
  return (
    <div>
      <AppProvider>
        <Content />
        <SideBar />
      </AppProvider>
    </div>
  );
};

export default UseContext;
