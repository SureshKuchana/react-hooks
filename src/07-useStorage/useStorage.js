import React, { useEffect, useState } from "react";

export const useStorage = (key, initialState) => {
  let [state, setState] = useState(initialState);

  useEffect(() => {
    let existingState = localStorage.getItem(key);
    if (existingState) setState(existingState);
  }, [key]);

  return [
    state,
    (state) => {
      setState(state);
      localStorage.setItem(key, JSON.stringify(state));
    },
  ];
};
