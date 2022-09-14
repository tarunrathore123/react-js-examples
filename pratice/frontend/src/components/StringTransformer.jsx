import React from "react";

const StringTransformer = () => {
  const str = "awdawdarun";
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  const a = str
    .split("")
    .map((letter) =>
      lowercase.indexOf(letter) === -1
        ? letter.toLowerCase()
        : letter.toUpperCase()
    )
    .join("")
    .split(" ")
    .reverse()
    .join(" ");
  const b = str.toUpperCase();
  const c = str.charAt(0).toUpperCase() + str.slice(1);
  return <div>StringTransformer: {c}</div>;
};

export default StringTransformer;
