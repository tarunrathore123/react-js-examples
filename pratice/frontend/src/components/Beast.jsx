import React, { useRef, useState } from "react";

const Beast = () => {
  const focusDiv = useRef();
  const arr = [];
  let sum = 0;
  const [value, setValue] = useState();
  function submitHandler(e) {
    e.preventDefault();
    value
      .toString()
      .split("")
      .map((v) => {
        arr.push(parseInt(v));
      });
    if (arr.length % 2 === 0) {
      for (let i = 0; i < arr.length; i += 2) {
        if (arr[i] * 2 > 10) {
          arr[i] = arr[i] * 2 - 9;
        } else {
          arr[i] = arr[i] * 2;
        }
      }
    } else {
      for (let i = 1; i < arr.length; i += 2) {
        if (arr[i] * 2 > 10) {
          arr[i] = arr[i] * 2 - 9;
        } else {
          arr[i] = arr[i] * 2;
        }
      }
    }
    sum = arr.reduce((a, b) => {
      return (a += b);
    });
    console.log(sum);
    focusDiv.current.focus();
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="enter credit no."
          onChange={(e) => setValue(e.target.value)}
          autoFocus
          ref={focusDiv}
        />
        <button type="submit">check valid or not</button>
      </form>
    </div>
  );
};

export default Beast;
