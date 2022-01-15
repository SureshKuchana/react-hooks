import React from "react";
import { useStorage } from "./useStorage";

export const UseStorage = () => {
  let [count, setCount] = useStorage("count", 0);

  return (
    <div onClick={() => setCount(parseInt(count) + 1)}>
      The Count is : {count}
    </div>
  );
};
