import React, { useEffect, useState } from "react";

export const fetchPicture = async (date, setPicture) => {
  try {
    let res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
    );
    let json = await res.json();
    setPicture(json);
  } catch (error) {
    console.log(error);
  }
};

export const usePicture = (date) => {
  let [picture, setPicture] = useState();

  useEffect(() => {
    fetchPicture(date, setPicture);
  }, [date]);

  return picture;
};

export const UsePicture = () => {
  let [date, setDate] = useState("2021-05-14");
  let picture = usePicture(date);
  if (!picture) return <div>Loading ....</div>;
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
