import React from 'react';
import styled from 'styled-components';

class CitiesSlider extends React.Component {
  constructor(props) {
    super(props);
    this.IMAGE_PARTS = 4;
    this.changeTO = null;
    this.AUTOCHANGE_TIME = 4000;
    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
    this.slides = slides;
    console.log(this.slides);
  }
  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }
  componentDidMount() {
    this.runAutoChangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }
  runAutoChangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutoChangeTO();
    }, this.AUTOCHANGE_TIME);
  }
  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = this.slides;
    const prevSlide = this.state.activeSlide;
    const activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }
  render() {
    const { activeSlide, prevSlide, sliderReady } = this.props;
    return (
      <Wrapper>
        <div className={`slider ${sliderReady ? 's--ready' : ''}`}>
          <p className="slider__top-heading">Travelers</p>
          <div className="slider__slides">
            {this.slides.map((slide, index) => (
              <div
                className={`slider__slide ${
                  activeSlide === index ? 's--active' : ''
                } ${prevSlide === index ? 's--prev' : ''}`}
                key={slide.city}
              >
                <div className="slider__slide-content">
                  <h3 className="slider__slide-subheading">
                    {slide.country || slide.city}
                  </h3>
                  <h2 className="slider__slide-heading">
                    {slide.city.split('').map((l) => (
                      <span>{l}</span>
                    ))}
                  </h2>
                  <p className="slider__slide-readmore">read more</p>
                </div>
                <div className="slider__slide-parts">
                  {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                    <div className="slider__slide-part" key={i}>
                      <div
                        className="slider__slide-part-inner"
                        style={{ backgroundImage: `url(${slide.img})` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div
            className="slider__control"
            onClick={() => this.changeSlides(-1)}
          />
          <div
            className="slider__control slider__control--right"
            onClick={() => this.changeSlides(1)}
          />
        </div>
      </Wrapper>
    );
  }
}

export default CitiesSlider;

const slides = [
  {
    city: 'Paris',
    country: 'France',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg',
  },
  {
    city: 'Singapore',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg',
  },
  {
    city: 'Prague',
    country: 'Czech Republic',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg',
  },
  {
    city: 'Amsterdam',
    country: 'Netherlands',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg',
  },
  {
    city: 'Moscow',
    country: 'Russia',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg',
  },
];

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  background: #000;

  --numOfParts: 4;
  --animTime: 1s;
  --stagger: 0.08s;
  --sliderReadyTrans: all var(--animTime) / 2 var(-var(--animTime));
  --maxLettersStagger: 6;
  --letterStagger: 0.1s;

  .slider {
    overflow: hidden;
    position: relative;
    height: 100vh;
    color: #fff;

    @mixin sliderReady {
      .slider.s--ready & {
        @content;
      }
    }

    &__top-heading {
      z-index: var(--numOfParts) * 3;
      position: absolute;
      left: 0;
      top: 100px;
      width: 100%;
      text-align: center;
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: 2.5px;
      transition: var(--sliderReadyTrans);
      transform: translateY(-30px);
      opacity: 0;

      @include sliderReady {
        transform: translateY(0);
        opacity: 1;
      }
    }

    &__slides {
      position: relative;
      height: 100%;
    }

    &__slide {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;

      &.s--active {
        pointer-events: auto;
      }

      @mixin slidePrev {
        .slider__slide.s--prev & {
          @content;
        }
      }

      @mixin slideActive {
        .slider__slide.s--active & {
          @content;
        }
      }

      &-content {
        z-index: var(--numOfParts) + 2;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        text-transform: uppercase;
        line-height: 1;
      }

      @mixin subTextsActiveSlide {
        opacity: 0;
        transition: var(--animTime) / 2;

        @include slideActive {
          transition-delay: var(--animTime) * 0.65;
          opacity: 1;
          transform: translateY(0);
        }
      }

      &-subheading {
        margin-bottom: 20px;
        font-size: 24px;
        letter-spacing: 2px;
        transform: translateY(20px);

        @include subTextsActiveSlide;
      }

      &-heading {
        $fontSize: 60px;

        display: flex;
        margin-bottom: 20px;
        font-size: $fontSize;
        letter-spacing: 12px;

        span {
          display: block;
          opacity: 0;
          transform: translateY($fontSize * -1);
          transition: all var(--animTime) / 3;

          @include slidePrev {
            transform: translateY($fontSize);
          }

          @include slideActive {
            opacity: 1;
            transform: translateY(0);
          }

          @for $i from 1 through var(--maxLettersStagger) {
            &:nth-child(#{$i}) {
              $delay: var(--letterStagger) * ($i - 1);

              transition-delay: $delay;

              @include slideActive {
                transition-delay: $delay + var(--animTime) / 3;
              }
            }
          }

          &:nth-child(n + #{var(--maxLettersStagger) + 1}) {
            $delay: var(--letterStagger) * var(--maxLettersStagger);

            transition-delay: $delay;

            @include slideActive {
              transition-delay: $delay + var(--animTime) / 3;
            }
          }
        }
      }

      &-readmore {
        position: relative;
        font-size: 14px;
        text-transform: lowercase;
        backface-visibility: hidden;
        transform: translateY(-20px);
        cursor: pointer;

        @include subTextsActiveSlide;

        &:before {
          content: '';
          position: absolute;
          left: -2px;
          top: -3px;
          width: calc(100% + 4px);
          height: calc(100% + 6px);
          background: rgba(255, 255, 255, 0.4);
          transform: scaleX(0.3);
          transform-origin: 0 50%;
          transition: transform 0.3s;
        }

        &:hover:before {
          transform: scaleX(1);
        }
      }

      &-parts {
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        width: 100%;
        height: 100%;

        &:after {
          content: '';
          z-index: var(--numOfParts) + 1;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.1);
        }
      }

      &-part {
        $partW: (100vw / var(--numOfParts));

        position: relative;
        width: percentage(1 / var(--numOfParts));
        height: 100%;

        $partRef: &;
        $imageFadeAT: var(--animTime) / 4;

        &-inner {
          overflow: hidden;
          position: relative;
          width: 100%;
          height: 100%;
          background-size: 0 0;
          background-repeat: no-repeat;
          transition: transform var(--animTime) / 2 ease-in-out;

          &:before {
            content: '';
            position: absolute;
            width: 100vw;
            height: 100%;
            background-image: inherit;
            background-size: cover;
            background-position: center center;
            transition: opacity $imageFadeAT;
            opacity: 0;
          }

          @for $i from 1 through var(--numOfParts) {
            #{$partRef}:nth-child(#{$i}) & {
              $delayOut: (var(--numOfParts) - $i) * var(--stagger);
              $delayIn: $i * var(--stagger) + var(--animTime) / 5;

              z-index: var(--numOfParts) - $i;
              transition-delay: $delayOut;
              transform: translateX(percentage($i / var(--numOfParts) * -1.3));

              @include slideActive {
                transition-delay: $delayIn;
              }

              &:before {
                left: $partW * ($i - 1) * -1;
                transition-delay: $delayOut + $imageFadeAT/2;

                @include slideActive {
                  transition-delay: $delayIn;
                }
              }
            }
          }

          @include slideActive {
            transform: translateX(0);
            transition-timing-function: ease;

            &:before {
              opacity: 1;
            }
          }
        }
      }
    }

    &__control {
      $size: 50px;

      z-index: 100;
      position: absolute;
      left: 50px;
      top: 50%;
      width: $size;
      height: $size;
      margin-top: $size/-2;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.4);
      transform: translateX($size * -1);
      opacity: 0;
      transition: var(--sliderReadyTrans);
      cursor: pointer;

      &:before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        width: 20px;
        height: 20px;
        margin-left: -10px;
        margin-top: -10px;
        border: 2px solid #000;
        border-bottom: none;
        border-right: none;
        transform: translateX(5px) rotate(-45deg);
      }

      &--right {
        left: auto;
        right: 50px;
        transform: translateX($size);

        &:before {
          transform: translateX(-5px) rotate(135deg);
        }
      }

      @include sliderReady {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }

  .icon-link {
    z-index: 100;
    position: absolute;
    left: 5px;
    bottom: 5px;
    width: 32px;

    img {
      width: 100%;
      vertical-align: top;
    }

    &--twitter {
      left: auto;
      right: 5px;
    }
  }
`;
