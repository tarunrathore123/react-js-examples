import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import ControlledCarousel from "../components/Carousel";

const Homepage = () => {
  return (
    <Div>
      <Navbar />
      <ControlledCarousel />
    </Div>
  );
};

export default Homepage;

export const Div = styled.div``;
