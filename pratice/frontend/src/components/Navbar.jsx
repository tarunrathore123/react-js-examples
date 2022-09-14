import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/navbar/logo.svg";
import arrow from "../assets/navbar/header_down_arrow.svg";
import cart from "../assets/navbar/Cart.svg";
import search from "../assets/navbar/search.svg";

const Navbar = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="menuItems">
            <li>
              <p>Препараты</p>
              <img src={arrow} alt="arrow" />
            </li>
            <li>
              <p>Полезная информация</p>
              <img src={arrow} alt="arrow" />
            </li>
            <li>
              <p>Контакты</p>
            </li>
            <li>
              <img src={cart} alt="cart" />
              <p>Купить</p>
            </li>
            <li>
              <img src={search} alt="search" />
            </li>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default Navbar;

export const Wrapper = styled.div`
  background: linear-gradient(90deg, #a8044e 0%, #65468d 62%, #3971b5 100%);
  //   height: 20px;
`;

export const Container = styled.div`
  margin: auto;
  max-width: 1143px;
  display: flex;
  justify-content: space-between;
  .menuItems {
    display: flex;

    li {
      color: #fff;
      list-style: none;
      display: flex;
      align-items: center;
      height: 100%;
      img {
        margin: 0 12px;
      }
      margin-left: 40px;
    }
  }
`;
