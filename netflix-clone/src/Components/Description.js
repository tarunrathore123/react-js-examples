import styled from "styled-components";
import iconTV from "../assets/icon_tv.png";
import iconMobile from "../assets/icon_mobile.jpg";
import iconDevice from "../assets/icon_device.png";
import iconKid from "../assets/icon_kid.png";
import videoTV from "../assets/video_tv.m4v";
import videoDevice from "../assets/video_device.mp4";

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const DescContainer = styled.div`
  width: 100%;
`;

const DescContent = styled.div`
  padding: 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-top: 8px solid rgb(25, 25, 25);

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const DescSubContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1280px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const DescTitle = styled.div`
  color: white;
  flex: 0.8;
  padding: 0 75px;

  @media (max-width: 768px) {
    padding: 0;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }
`;

const DescH1 = styled.h1`
  font-size: 46px;
  margin-bottom: 20px;
  line-height: 1.3;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const DescP = styled.p`
  font-size: 27px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 1.5;
  }
`;

const DescImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
`;

const DescImage = styled.img`
  width: 520px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const DescVideoTV = styled.video`
  position: absolute;
  top: 49%;
  left: 49%;
  transform: translate(-50%, -50%);
  width: 382px;
  z-index: -1;

  @media (max-width: 768px) {
    top: 45%;
    width: 285px;
  }
`;

const DescVideoDevice = styled.video`
  position: absolute;
  top: 33%;
  left: 49.5%;
  transform: translate(-50%, -50%);
  width: 320px;
  z-index: -1;

  @media (max-width: 768px) {
    width: 250px;
  }
`;

const Description = () => {
  return (
    <Container>
      <DescContainer>
        <DescContent>
          <DescSubContent>
            <DescTitle>
              <DescH1>Have fun with your TV.</DescH1>
              <DescP>
                Smart TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray Watch
                on various devices such as players.
              </DescP>
            </DescTitle>
            <DescImageContainer>
              <DescImage src={iconTV}></DescImage>
              <DescVideoTV src={videoTV} autoPlay muted loop></DescVideoTV>
            </DescImageContainer>
          </DescSubContent>
        </DescContent>
        <DescContent>
          <DescSubContent>
            <DescImageContainer>
              <DescImage src={iconMobile}></DescImage>
            </DescImageContainer>
            <DescTitle>
              <DescH1>
                Save your favorite content
                <br />
                Watch offline.
              </DescH1>
              <DescP>Easily save and enjoy seamlessly.</DescP>
            </DescTitle>
          </DescSubContent>
        </DescContent>
        <DescContent>
          <DescSubContent>
            <DescTitle>
              <DescH1>
                On various devices
                <br />
                You can watch.
              </DescH1>
              <DescP>
                Various movies and TV shows on smartphones, tablets, laptops,
                and TVs Stream Unlimited. There is absolutely no extra charge.
              </DescP>
            </DescTitle>
            <DescImageContainer>
              <DescImage src={iconDevice}></DescImage>
              <DescVideoDevice
                src={videoDevice}
                autoPlay
                muted
                loop
              ></DescVideoDevice>
            </DescImageContainer>
          </DescSubContent>
        </DescContent>
        <DescContent>
          <DescSubContent>
            <DescImageContainer>
              <DescImage src={iconKid}></DescImage>
            </DescImageContainer>
            <DescTitle>
              <DescH1>
                profile for children
                <br />
                make it
              </DescH1>
              <DescP>
                An exciting adventure to enjoy with your favorite characters in
                your own space. to your children Present this special
                experience. It's free if you're a Netflix member.
              </DescP>
            </DescTitle>
          </DescSubContent>
        </DescContent>
      </DescContainer>
    </Container>
  );
};

export default Description;
