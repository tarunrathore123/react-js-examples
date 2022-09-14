import styled from "styled-components";

const QnAContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 0px;
  border-top: 8px solid rgb(25, 25, 25);
  width: 100%;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const QnAContent = styled.div`
  width: 800px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const QnATitle = styled.h1`
  color: white;
  font-size: 42px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 27px;
  }
`;

const QnASection = styled.div`
  margin-top: 65px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const QnASubSection = styled.div``;

const QnASubTitle = styled.div`
  color: white;
  background-color: #303030;
  padding: 28px 0px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 24px;
  position: relative;
  cursor: pointer;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    padding: 20px 15px;
    font-size: 16px;
  }
`;

const QnASubDesc = styled.div`
  color: white;
  background-color: #303030;
  font-size: 21px;
  line-height: 1.6;
  border-top: 1px solid black;
  position: absolute;
  top: 0;
  left: 0;
  height: 0px;
  overflow: hidden;
  box-sizing: border-box;
  z-index: -1;
  padding-top: 30px;

  &.active {
    position: static;
    height: 240px;
    margin-top: 25px;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    padding: 0;
    padding-top: 20px;
    font-size: 15px;

    &.active {
      height: 240px;
    }
  }
`;

const handleQnATitle = (event) => {
  event.target.children[0].classList.toggle("active");
};

const QnA = () => {
  return (
    <QnAContainer>
      <QnAContent>
        <QnATitle>Frequently Asked Questions</QnATitle>
        <QnASection>
          <QnASubSection>
            <QnASubTitle onClick={handleQnATitle}>
              What is Netflix?
              <QnASubDesc>
                Netflix offers award-winning TV shows, movies, and Various
                contents such as animation and documentary can be connected to
                the Internet. A streaming service that can be watched on
                thousands of devices.
                <br></br>
                <br></br>
                As much as you want, whenever you want, without any ads at a low
                monthly rate Enjoy. Infinite content is prepared, and every week
                New TV shows and movies are available.
              </QnASubDesc>
            </QnASubTitle>
            <QnASubTitle onClick={handleQnATitle}>
              How much does Netflix cost?
              <QnASubDesc>
                Smartphones, tablets, smart TVs, laptops, streaming devices,
                etc. Watch Netflix on your device for a single monthly fee.
                <br></br>
                <br></br>
                Membership fees range from 9,500 won to 14,500 won per month.
                <br></br>
                There are no additional costs or commitments.
              </QnASubDesc>
            </QnASubTitle>
            <QnASubTitle onClick={handleQnATitle}>
              Where can I watch it?
              <QnASubDesc>
                You can watch anytime, anywhere on a variety of devices.
                <br></br>
                <br></br>
                Sign in with your Netflix account and go straight through
                netflix.com on your PC. You can watch, have an internet
                connection, and support the Netflix app. Devices (Smart TVs,
                Smartphones, Tablets, Streaming Media Players, You can watch it
                anytime, even on a game console, etc.).
              </QnASubDesc>
            </QnASubTitle>
            <QnASubTitle onClick={handleQnATitle}>
              How do I cancel my membership?
              <QnASubDesc>
                Netflix is easy and hassle-free. No cumbersome contracts, no
                commitments Because there is none.
                <br></br>
                Membership cancellation can also be completed online in two
                clicks. <br></br>
                <br></br>
                There are no cancellation fees, so you can start an account
                whenever you want.
              </QnASubDesc>
            </QnASubTitle>
            <QnASubTitle onClick={handleQnATitle}>
              What content can I watch on Netflix?
              <QnASubDesc>
                Netflix offers feature films, documentaries, TV shows,
                animations, Securing numerous content including award-winning
                Netflix originals.
                <br></br>
                <br></br>
                Watch your favorite content, whenever you want, as much as you
                want.
              </QnASubDesc>
            </QnASubTitle>
          </QnASubSection>
        </QnASection>
      </QnAContent>
    </QnAContainer>
  );
};

export default QnA;
