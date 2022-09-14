import React from "react";

const SumDigits = () => {
  const a = 12344561;
  const arr = a.toString().split("");
  let sum = 0;
  arr.map((a) => (sum += parseInt(a)));
  return <div>SumDigits: {sum}</div>;
};

export default SumDigits;
