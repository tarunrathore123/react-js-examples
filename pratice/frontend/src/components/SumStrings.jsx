import React from "react";

const SumStrings = ({ num1, num2 }) => {
  console.log(num1, num2);
  while (num1.length > 1 && num1[0] === "0") num1 = num1.slice(1);

  while (num2.length > 1 && num2[0] === "0") num2 = num2.slice(1);

  num1 = num1.toString().split("").reverse().join("");
  num2 = num2.toString().split("").reverse().join("");

  var add = 0;
  var ans = "";

  for (
    var i = 0, len = num1.length > num2.length ? num1.length : num2.length;
    i < len;
    i++
  ) {
    var a = i < num1.length ? Number(num1[i]) : 0,
      b = i < num2.length ? Number(num2[i]) : 0;

    var c = a + b + add;
    ans += c % 10;
    add = c >= 10 ? 1 : 0;
  }

  if (add) ans += add;

  const q = ans.split("").reverse().join("");
  return <div>SumStrings: {q}</div>;
};

export default SumStrings;
