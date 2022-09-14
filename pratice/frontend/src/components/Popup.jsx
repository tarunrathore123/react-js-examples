import React, { useState } from "react";
import styled from "styled-components";

const Popup = () => {
  const [show, setShow] = useState(false);
  return (
    <Div>
      <div className={`${show}? "background"`}>awdawd</div>

      {show && <div className="show">i am a popup</div>}
      <button onClick={() => setShow(!show)}>popup</button>
    </Div>
  );
};

export default Popup;

const Div = styled.div`
  .background: {
    opacity: 0.2;
  }
  .show {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 10;
    border: 1px solid grey;
    transform: translateX(-50%);
  }
`;
