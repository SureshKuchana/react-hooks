import React, { useState } from "react";
import { usePicture } from "./usePicture";

export const UseNetwork = () => {
  let [date, setDate] = useState("2020-02-14");
  let { picture, loading } = usePicture(date);
  if (loading) return <div>Loading ....</div>;
  return (
    <div>
      <input
        value={date}
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />
      <h3>{picture.title}</h3>
      <span>{picture.explanation}</span>
      <img src={picture.url} alt={picture.title} />
    </div>
  );
};
