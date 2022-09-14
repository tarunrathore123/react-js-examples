import React from "react";
import styled from "styled-components";

const CardWithSlideUpHoverEffect = () => {
  return (
    <Div>
      <ul class="cards">
        <li>
          <a href="" class="card">
            <img
              src={"https://i.imgur.com/oYiTqum.jpg"}
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  class="card__thumb"
                  src={"https://i.imgur.com/7D7I6dI.png"}
                  alt=""
                />
                <div class="card__header-text">
                  <h3 class="card__title">Jessica Parker</h3>
                  <span class="card__status">1 hour ago</span>
                </div>
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="" class="card">
            <img
              src={"https://i.imgur.com/2DhmtJ4.jpg"}
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  class="card__thumb"
                  src={"https://i.imgur.com/sjLMNDM.png"}
                  alt=""
                />
                <div class="card__header-text">
                  <h3 class="card__title">kim Cattrall</h3>
                  <span class="card__status">3 hours ago</span>
                </div>
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="" class="card">
            <img
              src={"https://i.imgur.com/oYiTqum.jpg"}
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  class="card__thumb"
                  src={"https://i.imgur.com/7D7I6dI.png"}
                  alt=""
                />
                <div class="card__header-text">
                  <h3 class="card__title">Jessica Parker</h3>
                  <span class="card__tagline">
                    Lorem ipsum dolor sit amet consectetur
                  </span>
                  <span class="card__status">1 hour ago</span>
                </div>
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="" class="card">
            <img
              src={"https://i.imgur.com/2DhmtJ4.jpg"}
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  class="card__thumb"
                  src={"https://i.imgur.com/sjLMNDM.png"}
                  alt=""
                />
                <div class="card__header-text">
                  <h3 class="card__title">kim Cattrall</h3>
                  <span class="card__status">3 hours ago</span>
                </div>
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
      </ul>
    </Div>
  );
};

export default CardWithSlideUpHoverEffect;

export const Div = styled.div`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Noto Sans JP", sans-serif;
    background-color: #fef8f8;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 480px;
    gap: 2rem;
    margin: 4rem 5vw;
    padding: 0;
    list-style-type: none;
  }

  .card {
    position: relative;
    display: block;

    overflow: hidden;

    .card__image {
      width: 100%;
      height: 100%;
    }
    .card__overlay {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;

      background: #fff;
      padding: 20px 40px;

      transform: translateY(100%);

      .card__header {
        display: flex;
        align-items: center;
        position: relative;

        transform: translateY(-100%);
        .card__thumb {
          width: 50px;
          height: 50px;
          border: 50%;
          margin-right: 20px;
        }

        .card__arc {
          position: absolute;
          width: 80px;
          height: 80px;
        }
      }

      .card__description {
        padding-top: 20px;
      }
    }
  }
  .card:hover .card__overlay {
    transform: translateY(0);
    .card__header {
      transform: translateY(0);
    }
  }
`;
