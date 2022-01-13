import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [state, setState] = useState({});
  return (
    <AppContext.Provider
      value={{ ...state, setTheme: (theme) => setState({ ...state, theme }) }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
