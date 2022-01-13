import React, { useEffect, useState } from "react";

let initialDark = window.matchMedia("(prefers-color-schema : dark)");

export const useDarkMode = () => {
  let [dark, setDark] = useState(initialDark);

  const listener = (event) => {
    console.log(event);
    setDark(event);
  };

  useEffect(() => {
    window
      .matchMedia("(prefers-color-schema : dark)")
      .addEventListener("change", listener);

    return () =>
      window
        .matchMedia("(prefers-color-schema : dark)")
        .removeEventListener("change", listener);
  });

  return dark;
};
