import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Loader from "Components/Loader";
import Footer from "Components/Footer";
import noPoster from "../../assets/noPoster.png";
import noActor from "../../assets/noActor.png";
import noCompany2 from "../../assets/noCompany2.png";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const BlurBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: url(${(props) => props.imageUrl}) no-repeat center center;
  background-size: cover;
  filter: blur(5px);
  opacity: 0.2;
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  flex-direction: column;
  font-family: "Do Hyeon", sans-serif;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const CoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1280px;
  max-width: 1280px;
  color: white;
  margin-top: 120px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 75px;
  }
`;

const CoverLink = styled.a`
  width: 340px;

  @media (max-width: 768px) {
    width: auto;
  }
`;

const Cover = styled.div`
  width: 340px;
  height: 510px;
  background: url(${(props) => props.imageUrl}) no-repeat center center;
  background-size: cover;
  border-radius: 15px;
  box-shadow: rgb(0 0 0 / 50%) 0px 7px 10px, rgb(0 0 0 / 24%) 0px -12px 30px,
    rgb(0 0 0 / 24%) 0px 4px 6px, rgb(0 0 0 / 34%) 0px 12px 13px,
    rgb(0 0 0 / 18%) 0px -3px 5px;
  transition: 0.5s;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    width: 260px;
    height: 400px;
  }
`;

const CoverHeading = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const CoverMiddle = styled.div``;

const Data = styled.div`
  padding-left: 45px;

  @media (max-width: 768px) {
    padding-left: 0;
    margin-top: 30px;
  }
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 36px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const SubTitle = styled.h2`
  font-size: 22px;
  margin-top: 25px;
  margin-bottom: 16px;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 20px;
  }
`;

const GenreContainer = styled.div`
  font-size: 18px;
  color: gray;
  margin-bottom: 6px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const DateRunTimeContainer = styled.div`
  font-size: 18px;
  color: gray;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const VoteContainer = styled.div`
  font-size: 18px;
  color: white;
  margin-top: 14px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const VoteStrong = styled.strong`
  font-size: 22px;
  color: dodgerblue;
  margin-left: 7px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Divider = styled.span`
  color: gray;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Overview = styled.p`
  font-size: 20px;
  line-height: 1.6;
  letter-spacing: 1px;
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: 17px;
    margin-top: 15px;
  }
`;

const Item = styled.span``;

const Keywords = styled.div`
  margin-top: 35px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const KeywordTitle = styled.h1`
  font-size: 18px;
  color: gray;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const KeywordContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 15px;
`;

const KeywordSpan = styled.span`
  color: #fed330;
  border: 1px solid #fed330;
  background-color: transparent;
  padding: 7px 12px;
  box-sizing: border-box;
  margin-right: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 17px;
  border-radius: 5px;

  &:hover {
    color: white;
    background-color: #fed330;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TeaserContainer = styled.div`
  border-top: 1px solid gray;
  margin-top: 100px;
  padding-top: 30px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const TeaserTitle = styled.h1`
  font-size: 25px;
`;

const TeaserVideo = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const IframeContainer = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 50px;
    border-bottom: 1px solid gray;
    padding-bottom: 30px;

    &:last-child {
      margin-bottom: 0px;
      border-bottom: none;
    }
  }
`;

const Iframe = styled.iframe`
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0px;
  }
`;

const IframeDesc = styled.h2`
  margin-top: 12px;
  font-size: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
    font-size: 19px;
  }
`;

const ActorContainer = styled.div`
  border-top: 1px solid gray;
  margin-top: 100px;
  padding-top: 30px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const ActorTitle = styled.h1`
  font-size: 25px;
`;

const ActorImageContainer = styled.div`
  display: flex;
  margin-top: 25px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const ActorImage = styled.div`
  margin-right: 30px;
  text-align: center;
  width: 120px;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    width: 100px;
    margin-right: 15px;
    margin-bottom: 22px;
  }
`;

const ActorPhoto = styled.div`
  background: url(${(props) =>
      props.bgUrl ? `https://image.tmdb.org/t/p/w500${props.bgUrl}` : noActor})
    no-repeat center center;
  background-size: cover;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
  border: 5px solid white;

  &:hover {
    border: 5px solid #fed330;
    transform: scale(1.08);
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const ActorName = styled.h2`
  margin-top: 15px;
  height: 30px;
  font-size: 16px;
`;

const ActorCharacter = styled.p`
  color: gray;
  margin-top: 10px;
  font-size: 14px;

  @media (max-width: 768px) {
    margin-top: 8px;
    font-size: 13px;
  }
`;

const CompanyContainer = styled.div`
  margin-top: 80px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const CompanyTitle = styled.div`
  font-size: 25px;
`;

const CompanyContent = styled.div`
  margin-top: 20px;
`;

const CompanyName = styled.h2`
  font-size: 22px;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CompanyImage = styled.div`
  background: url(${(props) =>
      props.bgUrl
        ? `https://image.tmdb.org/t/p/w500${props.bgUrl}`
        : noCompany2})
    no-repeat center left;
  background-size: contain;
  height: 70px;
  max-height: 70px;
`;

const CompanyMoney = styled.div`
  font-size: 20px;
  margin-top: 15px;
  display: flex;
  color: white;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const CompanyDivider = styled.div`
  margin: 0 8px;
`;

const Budget = styled.h2``;

const Revenue = styled.h2``;

const SplideContainer = styled.div`
  border-top: 1px solid gray;
  margin-top: 100px;
  padding-top: 30px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const SplideTitle = styled.h1`
  font-size: 25px;
  margin-bottom: 30px;
`;

const SplideLink = styled.a`
  height: 100%;
  display: inline-block;
`;

const SplideImage = styled.img`
  width: 100%;
  cursor: pointer;
`;

const ReviewContainer = styled.div`
  border-top: 1px solid gray;
  margin-top: 100px;
  padding-top: 30px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const ReviewTitle = styled.h1`
  font-size: 25px;
  margin-bottom: 30px;
`;

const ReviewContent = styled.div``;

const Review = styled.div`
  display: flex;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const ReviewImageContent = styled.div``;

const ReviewImage = styled.img`
  width: 75px;
  border-radius: 50%;
`;

const ReviewSubContent = styled.div`
  margin-left: 22px;
`;

const ReviewName = styled.span`
  font-size: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

const ReviewDivider = styled.span`
  margin-left: 10px;
  margin-right: 10px;

  @media (max-width: 768px) {
    font-size: 17px;
    margin-left: 7px;
    margin-right: 7px;
  }
`;

const ReviewDate = styled.span`
  color: white;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

const ReviewRating = styled.span`
  color: gold;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 19px;
  }
`;

const ReviewOverview = styled.p`
  margin-top: 13px;
  margin-bottom: 10px;
  line-height: 1.5;
  font-size: 17px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 0px 12px 12px 12px;
  box-sizing: border-box;
  border: 3px solid white;
  cursor: pointer;
  color: white;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 15px;
  }
`;

const ReviewLink = styled.a`
  color: white;

  &:visited {
    color: white;
  }
  &:active {
    color: white;
  }
  &:link {
    color: white;
  }
`;

const RecommendContainer = styled.div`
  border-top: 1px solid gray;
  margin-top: 100px;
  width: 100%;
  color: white;
  padding: 30px 0px;
  padding-bottom: 120px;
  max-width: 1600px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
    padding-bottom: 40px;
  }
`;

const RecommendTitle = styled.h1`
  font-size: 25px;
  margin-bottom: 30px;
`;

const RecommendContent = styled.div`
  border-radius: 7px;
`;

const RecommendSubContent = styled.div`
  transition: 0.5s;
  box-shadow: rgb(0 0 0 / 35%) 0px 4px 6px 0px;
  border-radius: 7px;

  &:hover {
    transform: scale(1.03);
  }
`;

const RecommendLink = styled.a`
  display: block;
  background: rgba(0, 0, 0, 0.5)
    url(${(props) =>
      props.bgUrl
        ? `https://image.tmdb.org/t/p/original${props.bgUrl}`
        : noPoster})
    no-repeat center center;
  background-size: cover;
  height: 270px;
  cursor: pointer;
  position: relative;
  border-radius: 7px;
  color: white;
`;

const RecommendSubTitle = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

const RecommendName = styled.div`
  font-size: 17px;
  margin-bottom: 5px;
`;

const RecommendRating = styled.div`
  font-size: 15px;
`;

const GototopButton = styled.button`
  position: fixed;
  bottom: 60px;
  right: 60px;
  z-index: 200;
  width: 50px;
  height: 50px;
  background: linear-gradient(to right, #536976, #292e49);
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  border: none;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 3px 2px;

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    bottom: 20px;
    right: 20px;
  }
`;

const DetailPresenter = ({
  result,
  error,
  loading = true,
  isMovie,
  recommendations,
  cast,
  keywords,
  reviews,
  backdrops,
  posters,
  tvDetail2,
}) => {
  const checkPC = "win16|win32|win64|macintel|mac";
  const checkPCMobileBool =
    checkPC.indexOf(navigator.platform.toLowerCase()) < 0;

  return loading ? (
    <Loader />
  ) : (
    <Container>
      <HelmetProvider>
        <Helmet>
          <title>{result.title ? result.title : result.name}</title>
        </Helmet>
      </HelmetProvider>

      <BlurBackground
        imageUrl={
          result.backdrop_path
            ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
            : `https://image.tmdb.org/t/p/original${result.poster_path}`
        }
      ></BlurBackground>
      <Content>
        <CoverContainer>
          <CoverHeading>
            <CoverLink href={result.homepage ? result.homepage : "#"}>
              <Cover
                imageUrl={
                  result.poster_path
                    ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                    : `https://image.tmdb.org/t/p/original${result.backdrop_path}`
                }
              ></Cover>
            </CoverLink>
            <Data>
              <Title>{result.title ? result.title : result.name}</Title>
              <SubTitle>{result.tagline ? result.tagline : ""}</SubTitle>
              <GenreContainer>
                <Item>
                  {result?.genres?.map((genre, index) =>
                    index === result.genres.length - 1
                      ? genre.name
                      : `${genre.name}▪`
                  )}
                </Item>
              </GenreContainer>
              <DateRunTimeContainer>
                <Item>
                  {result.release_date
                    ? result.release_date
                    : result.first_air_date}
                </Item>
                <Divider>▪</Divider>
                <Item>
                  {result.runtime || result.runtime === 0
                    ? result.runtime
                    : result.episode_run_time[0]}
                  minute
                </Item>
              </DateRunTimeContainer>
              <VoteContainer>
                <Item>
                  Rating
                  <VoteStrong>{result?.vote_average}</VoteStrong>
                </Item>
              </VoteContainer>
              <Overview>{result?.overview}</Overview>
              <Keywords>
                <KeywordTitle>keyword</KeywordTitle>
                <KeywordContent>
                  {keywords.length > 0
                    ? keywords.map(
                        (keyword, index) =>
                          index < 15 && (
                            <KeywordSpan key={index}>
                              {keyword.name && "#" + keyword.name}
                            </KeywordSpan>
                          )
                      )
                    : ""}
                </KeywordContent>
              </Keywords>
            </Data>
          </CoverHeading>

          <CoverMiddle>
            <TeaserContainer>
              <TeaserTitle>Trailer</TeaserTitle>
              <TeaserVideo>
                {isMovie === true && result?.videos?.results[0]?.key && (
                  <IframeContainer>
                    <Iframe
                      src={`https://www.youtube.com/embed/${result.videos.results[0].key}?playlist=${result.videos.results[0].key}`}
                      width="420"
                      height="280"
                      frameborder="0"
                      allow="autoplay; fullscreen"
                    ></Iframe>
                    <IframeDesc>{result?.videos?.results[0]?.name}</IframeDesc>
                  </IframeContainer>
                )}

                {isMovie === true && result?.videos?.results[1]?.key && (
                  <IframeContainer>
                    <Iframe
                      src={`https://www.youtube.com/embed/${result.videos.results[1].key}?playlist=${result.videos.results[1].key}`}
                      width="420"
                      height="280"
                      frameborder="0"
                      allow="autoplay; fullscreen"
                    ></Iframe>
                    <IframeDesc>{result?.videos?.results[1]?.name}</IframeDesc>
                  </IframeContainer>
                )}

                {isMovie === true && result?.videos?.results[2]?.key && (
                  <IframeContainer>
                    <Iframe
                      src={`https://www.youtube.com/embed/${result.videos.results[2].key}?playlist=${result.videos.results[2].key}`}
                      width="420"
                      height="280"
                      frameborder="0"
                      allow="autoplay; fullscreen"
                    ></Iframe>
                    <IframeDesc>{result?.videos?.results[2]?.name}</IframeDesc>
                  </IframeContainer>
                )}

                {isMovie === false &&
                  tvDetail2.length > 0 &&
                  tvDetail2[0]?.key && (
                    <IframeContainer>
                      <Iframe
                        src={`https://www.youtube.com/embed/${tvDetail2[0].key}?playlist=${tvDetail2[0].key}`}
                        width="420"
                        height="280"
                        frameborder="0"
                        allow="autoplay; fullscreen"
                      ></Iframe>
                      <IframeDesc>{tvDetail2[0]?.name}</IframeDesc>
                    </IframeContainer>
                  )}

                {isMovie === false &&
                  tvDetail2.length > 0 &&
                  tvDetail2[1]?.key && (
                    <IframeContainer>
                      <Iframe
                        src={`https://www.youtube.com/embed/${tvDetail2[1].key}?playlist=${tvDetail2[1].key}`}
                        width="420"
                        height="280"
                        frameborder="0"
                        allow="autoplay; fullscreen"
                      ></Iframe>
                      <IframeDesc>{tvDetail2[1]?.name}</IframeDesc>
                    </IframeContainer>
                  )}

                {isMovie === false &&
                  tvDetail2.length > 0 &&
                  tvDetail2[2]?.key && (
                    <IframeContainer>
                      <Iframe
                        src={`https://www.youtube.com/embed/${tvDetail2[2].key}?playlist=${tvDetail2[2].key}`}
                        width="420"
                        height="280"
                        frameborder="0"
                        allow="autoplay; fullscreen"
                      ></Iframe>
                      <IframeDesc>{tvDetail2[2]?.name}</IframeDesc>
                    </IframeContainer>
                  )}
              </TeaserVideo>
            </TeaserContainer>

            <ActorContainer>
              <ActorTitle>Actor</ActorTitle>
              <ActorImageContainer>
                {cast &&
                  cast.map((cast, index) =>
                    index < 6 ? (
                      <ActorImage key={index}>
                        <ActorPhoto bgUrl={cast?.profile_path}></ActorPhoto>
                        <ActorName>{cast?.name}</ActorName>
                        <ActorCharacter>{cast?.character}</ActorCharacter>
                      </ActorImage>
                    ) : (
                      ""
                    )
                  )}
              </ActorImageContainer>
              <CompanyContainer>
                <CompanyTitle>Producer</CompanyTitle>
                <CompanyContent>
                  <CompanyImage
                    bgUrl={result?.production_companies[0]?.logo_path}
                  ></CompanyImage>
                  <CompanyName>
                    {result?.production_companies[0]?.name} (
                    {result?.production_companies[0]?.origin_country})
                  </CompanyName>
                </CompanyContent>
                <CompanyMoney>
                  {isMovie === true && (
                    <>
                      <Budget>
                        💰Budget: ${result?.budget?.toLocaleString("EN")}
                      </Budget>
                      <CompanyDivider>|</CompanyDivider>
                      <Revenue>
                        💰Revenue: ${result?.revenue?.toLocaleString("EN")}
                      </Revenue>
                    </>
                  )}
                </CompanyMoney>
              </CompanyContainer>
            </ActorContainer>

            <SplideContainer>
              <SplideTitle>Images</SplideTitle>
              {checkPCMobileBool ? (
                <Splide
                  options={{
                    rewind: true,
                    perPage: 2,
                    perMove: 2,
                    gap: "1rem",
                  }}
                >
                  {backdrops?.map(
                    (backdrop, index) =>
                      backdrop.file_path && (
                        <SplideSlide key={index}>
                          <SplideLink
                            href={`https://image.tmdb.org/t/p/original${backdrop.file_path}`}
                            target="_blank"
                          >
                            <SplideImage
                              src={`https://image.tmdb.org/t/p/original${backdrop.file_path}`}
                              alt=""
                            />
                          </SplideLink>
                        </SplideSlide>
                      )
                  )}
                </Splide>
              ) : (
                <Splide
                  options={{
                    rewind: true,
                    perPage: 3,
                    perMove: 1,
                    gap: "1rem",
                  }}
                >
                  {backdrops?.map(
                    (backdrop, index) =>
                      backdrop.file_path && (
                        <SplideSlide key={index}>
                          <SplideLink
                            href={`https://image.tmdb.org/t/p/original${backdrop.file_path}`}
                            target="_blank"
                          >
                            <SplideImage
                              src={`https://image.tmdb.org/t/p/original${backdrop.file_path}`}
                              alt=""
                            />
                          </SplideLink>
                        </SplideSlide>
                      )
                  )}
                </Splide>
              )}
            </SplideContainer>

            <ReviewContainer>
              <ReviewTitle>
                Reviews ({reviews ? reviews.length : "0"})
              </ReviewTitle>
              <ReviewContent>
                {reviews?.map(
                  (review, index) =>
                    index < 5 && (
                      <Review key={index}>
                        <ReviewImageContent>
                          <ReviewImage src={noActor}></ReviewImage>
                        </ReviewImageContent>
                        <ReviewSubContent>
                          <ReviewName>
                            {review.author
                              ? review.author.substring(0, 15)
                              : review.author_details.username.substring(0, 15)}
                            <ReviewDivider>|</ReviewDivider>
                            <ReviewDate>
                              {review?.created_at?.substring(0, 10)}
                            </ReviewDate>
                            <ReviewDivider>|</ReviewDivider>
                            <ReviewRating>
                              Rating {review?.author_details?.rating}
                            </ReviewRating>
                          </ReviewName>
                          <ReviewOverview>
                            {checkPCMobileBool ? (
                              <ReviewLink href={review?.url}>
                                {review?.content.substring(0, 150) + ".."}
                              </ReviewLink>
                            ) : (
                              <ReviewLink href={review?.url}>
                                {review?.content.substring(0, 900) + ".."}
                              </ReviewLink>
                            )}
                          </ReviewOverview>
                        </ReviewSubContent>
                      </Review>
                    )
                )}
              </ReviewContent>
            </ReviewContainer>
          </CoverMiddle>
        </CoverContainer>
        <RecommendContainer>
          <RecommendTitle>Recommended Movies/Shows</RecommendTitle>
          <RecommendContent>
            {checkPCMobileBool ? (
              <Splide
                options={{ rewind: true, perPage: 2, perMove: 2, gap: "1rem" }}
              >
                {recommendations?.map((recommendation) => (
                  <SplideSlide key={recommendation.id}>
                    <RecommendSubContent>
                      <RecommendLink
                        href={
                          recommendation.media_type === "movie"
                            ? `https://netflix-gw.netlify.app/movie/${recommendation.id}`
                            : `https://netflix-gw.netlify.app/tv/${recommendation.id}`
                        }
                        bgUrl={recommendation?.poster_path}
                        target="_blank"
                      >
                        <RecommendSubTitle>
                          <RecommendName>
                            {recommendation.title
                              ? recommendation.title
                              : recommendation.name}
                          </RecommendName>
                          <RecommendRating>
                            ⭐
                            {String(recommendation?.vote_average).substring(
                              0,
                              3
                            )}
                          </RecommendRating>
                        </RecommendSubTitle>
                      </RecommendLink>
                    </RecommendSubContent>
                  </SplideSlide>
                ))}
              </Splide>
            ) : (
              <Splide
                options={{ rewind: true, perPage: 8, perMove: 1, gap: "1rem" }}
              >
                {recommendations?.map((recommendation) => (
                  <SplideSlide key={recommendation.id}>
                    <RecommendSubContent>
                      <RecommendLink
                        href={
                          recommendation.media_type === "movie"
                            ? `https://netflix-gw.netlify.app/movie/${recommendation.id}`
                            : `https://netflix-gw.netlify.app/tv/${recommendation.id}`
                        }
                        bgUrl={recommendation?.poster_path}
                        target="_blank"
                      >
                        <RecommendSubTitle>
                          <RecommendName>
                            {recommendation.title
                              ? recommendation.title
                              : recommendation.name}
                          </RecommendName>
                          <RecommendRating>
                            ⭐
                            {String(recommendation?.vote_average).substring(
                              0,
                              3
                            )}
                          </RecommendRating>
                        </RecommendSubTitle>
                      </RecommendLink>
                    </RecommendSubContent>
                  </SplideSlide>
                ))}
              </Splide>
            )}
          </RecommendContent>
        </RecommendContainer>
      </Content>
      <Footer />
      <GototopButton onClick={() => window.scrollTo(0, 0)}>
        <i
          className="fas fa-arrow-up"
          style={{ color: "white", fontSize: "25px" }}
        />
      </GototopButton>
    </Container>
  );
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool,
  isMovie: PropTypes.bool,
  recommendations: PropTypes.array,
  cast: PropTypes.array,
  keywords: PropTypes.array,
  reviews: PropTypes.array,
  backdrops: PropTypes.array,
  posters: PropTypes.array,
  tvDetail2: PropTypes.array,
};

export default DetailPresenter;
