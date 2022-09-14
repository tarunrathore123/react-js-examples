import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../assets/navbar/logo.svg";
import image1 from "../assets/navbar/image1.png";
import product1 from "../assets/navbar/product1.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// // Default theme
// import "@splidejs/react-splide/css";

// // or other themes
import "@splidejs/react-splide/css/skyblue";
// import "@splidejs/react-splide/css/sea-green";

// // or only core styles
// import "@splidejs/react-splide/css/core";

function ControlledCarousel() {
  return (
    <Wrapper>
      <Container>
        <Splide aria-label="My Favorite Images">
          <SplideSlide>
            <img src={image1} alt="Image 1" />
            <div className="productsWrapper">
              <div className="product">
                <img src={product1} alt="" />
                <h1>Микролакс №4</h1>
                <p>
                  Микролакс® - современное мягкое слабительное средство в
                  формате микроклизмы, способное помогать при запоре через 5-15
                  минут*
                </p>
                <a href="" className="carouselButton">
                  Подробнее
                </a>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <img src={image1} alt="Image 2" />
          </SplideSlide>
        </Splide>
      </Container>
    </Wrapper>
  );
}

export default ControlledCarousel;
export const Wrapper = styled.div`
  //   background: linear-gradient(90deg, #a8044e 0%, #65468d 62%, #3971b5 100%);
  //   opacity: 0.1;
  //   transform: rotate(-178.58deg);
`;

export const Container = styled.div`
  SplideSlide {
    position: relative;

    max-width: 1143px;
    margin: auto;
    position: absolute;
    inset: 0;

    .product {
      width: 50%;
      background: red;
    }
  }
`;
