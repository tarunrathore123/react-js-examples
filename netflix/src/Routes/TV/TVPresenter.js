import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import PropTypes from "prop-types";
import styled from "styled-components";
import uniqBy from "lodash.uniqby";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import useInfiniteScroll from "useInfiniteScroll";
import { tvApi } from "api";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 65px;
`;

const TitleContainer = styled.div`
  margin-top: 90px;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

const TitleContent = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 40px;
  color: white;
  margin-bottom: 25px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const SubTitle = styled.p`
  font-size: 18px;
  color: gray;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const ButtonContent = styled.div`
  display: flex;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const ButtonLink = styled(Link)`
  color: white;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#E30914" : "transparent")};
  color: ${(props) => (props.current ? "#E30914" : "white")};
  margin: 0 15px;
  padding: 10px 10px;
  box-sizing: border-box;
  font-size: 17px;
  font-weight: bold;

  @media (max-width: 768px) {
    margin: 0 1px;
    font-size: 13px;
    font-weight: normal;
  }
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

const TVPresenter = ({
  topRated,
  popular,
  airingToday,
  onTheAir,
  error,
  loading,
  popularInfinite,
  airingTodayInfinite,
  onTheAirInfinite,
  topRatedInfinite,
}) => {
  const {
    location: { pathname },
  } = window;

  const [popularTV, setPopularTV] = useState([]);
  const [airingTodayTV, setAiringTodayTV] = useState([]);
  const [onTheAirTV, setonTheAirTV] = useState([]);
  const [topRatedTV, setTopRatedTV] = useState([]);
  const page = useInfiniteScroll();

  const getInfiniteApi = async () => {
    if (page !== 1) {
      if (pathname === "/tv") {
        try {
          const {
            data: { results: newPopularTV },
          } = await tvApi.popularInfinite(page);
          const totalTV = [...popularTV, ...newPopularTV];
          const uniqByTV = uniqBy(totalTV, "id");

          setPopularTV(uniqByTV);
        } catch (error) {
          console.log(error);
        }
      } else if (pathname === "/tv/airing-today") {
        try {
          const {
            data: { results: newNowPlayingTV },
          } = await tvApi.airingTodayInfinite(page);
          const totalTV = [...airingTodayTV, ...newNowPlayingTV];
          const uniqByTV = uniqBy(totalTV, "id");

          setAiringTodayTV(uniqByTV);
        } catch (error) {
          console.log(error);
        }
      } else if (pathname === "/tv/on-the-air") {
        try {
          const {
            data: { results: newUpcomingTV },
          } = await tvApi.onTheAirInfinite(page);
          const totalTV = [...onTheAirTV, ...newUpcomingTV];
          const uniqByTV = uniqBy(totalTV, "id");

          setonTheAirTV(uniqByTV);
        } catch (error) {
          console.log(error);
        }
      } else if (pathname === "/tv/top-rated") {
        try {
          const {
            data: { results: newTopRatedTV },
          } = await tvApi.topRatedInfinite(page);
          const totalTV = [...topRatedTV, ...newTopRatedTV];
          const uniqByTV = uniqBy(totalTV, "id");

          setTopRatedTV(uniqByTV);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  useEffect(() => {
    getInfiniteApi();
  }, [page]);

  return loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      <HelmetProvider>
        <Helmet>
          <title>Netflix - TV</title>
        </Helmet>
      </HelmetProvider>

      {popular && popular.length > 0 && pathname === "/tv" && (
        <TitleContainer>
          <TitleContent>
            <Title>Popular TV shows</Title>
            <SubTitle>
              Get a list of currently popular TV shows.
              <br />
              The TV program list is automatically updated daily.
            </SubTitle>
          </TitleContent>
        </TitleContainer>
      )}

      {airingToday &&
        airingToday.length > 0 &&
        pathname === "/tv/airing-today" && (
          <TitleContainer>
            <TitleContent>
              <Title>Shows currently showing</Title>
              <SubTitle>
                Get a list of currently showing TV shows.
                <br />
                Get a list based on today's date.
              </SubTitle>
            </TitleContent>
          </TitleContainer>
        )}

      {onTheAir && onTheAir.length > 0 && pathname === "/tv/on-the-air" && (
        <TitleContainer>
          <TitleContent>
            <Title>Programs scheduled to show</Title>
            <SubTitle>
              Get a list of upcoming TV shows.
              <br />
              Find programs with episodes that will show within a week.
            </SubTitle>
          </TitleContent>
        </TitleContainer>
      )}

      {topRated && topRated.length > 0 && pathname === "/tv/top-rated" && (
        <TitleContainer>
          <TitleContent>
            <Title>Top Rated TV Shows</Title>
            <SubTitle>
              Get the highest rated shows among all TV shows.
              <br />
              Sort by programs with the highest ratings.
            </SubTitle>
          </TitleContent>
        </TitleContainer>
      )}

      <ButtonContainer>
        <ButtonContent>
          <ButtonLink to="/tv" current={pathname === "/tv" && true}>
            Popular Movies
          </ButtonLink>
          <ButtonLink
            to="/tv/airing-today"
            current={pathname === "/tv/airing-today" && true}
          >
            Currently Showing
          </ButtonLink>
          <ButtonLink
            to="/tv/on-the-air"
            current={pathname === "/tv/on-the-air" && true}
          >
            To be showed
          </ButtonLink>
          <ButtonLink
            to="/tv/top-rated"
            current={pathname === "/tv/top-rated" && true}
          >
            Highly rated shows
          </ButtonLink>
        </ButtonContent>
      </ButtonContainer>

      {popular && popular.length > 0 && pathname === "/tv" && (
        <Section title="Popular Movies">
          {popular.map((tv) => (
            <Poster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.name}
              rating={tv.vote_average}
              year={tv.first_air_date ? tv.first_air_date : ""}
              isMovie={false}
              popularity={tv.popularity && Math.round(tv.popularity)}
            ></Poster>
          ))}
        </Section>
      )}

      {popularInfinite && popularInfinite.length > 0 && pathname === "/tv" && (
        <Section title="Popular Movies">
          {popularTV.map((tv) => (
            <Poster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.name}
              rating={tv.vote_average}
              year={tv.first_air_date ? tv.first_air_date : ""}
              isMovie={false}
              popularity={tv.popularity && Math.round(tv.popularity)}
            ></Poster>
          ))}
        </Section>
      )}

      {airingToday &&
        airingToday.length > 0 &&
        pathname === "/tv/airing-today" && (
          <Section title="Currently Showing">
            {airingToday.map((tv) => (
              <Poster
                key={tv.id}
                id={tv.id}
                imageUrl={tv.poster_path}
                title={tv.name}
                rating={tv.vote_average}
                year={tv.first_air_date ? tv.first_air_date : ""}
                isMovie={false}
                popularity={tv.popularity && Math.round(tv.popularity)}
              ></Poster>
            ))}
          </Section>
        )}

      {airingTodayInfinite &&
        airingTodayInfinite.length > 0 &&
        pathname === "/tv/airing-today" && (
          <Section title="Currently Showing">
            {airingTodayTV.map((tv) => (
              <Poster
                key={tv.id}
                id={tv.id}
                imageUrl={tv.poster_path}
                title={tv.name}
                rating={tv.vote_average}
                year={tv.first_air_date ? tv.first_air_date : ""}
                isMovie={false}
                popularity={tv.popularity && Math.round(tv.popularity)}
              ></Poster>
            ))}
          </Section>
        )}

      {onTheAir && onTheAir.length > 0 && pathname === "/tv/on-the-air" && (
        <Section title="To be showed">
          {onTheAir.map((tv) => (
            <Poster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.name}
              rating={tv.vote_average}
              year={tv.first_air_date ? tv.first_air_date : ""}
              isMovie={false}
              popularity={tv.popularity && Math.round(tv.popularity)}
            ></Poster>
          ))}
        </Section>
      )}

      {onTheAirInfinite &&
        onTheAirInfinite.length > 0 &&
        pathname === "/tv/on-the-air" && (
          <Section title="To be showed">
            {onTheAirTV.map((tv) => (
              <Poster
                key={tv.id}
                id={tv.id}
                imageUrl={tv.poster_path}
                title={tv.name}
                rating={tv.vote_average}
                year={tv.first_air_date ? tv.first_air_date : ""}
                isMovie={false}
                popularity={tv.popularity && Math.round(tv.popularity)}
              ></Poster>
            ))}
          </Section>
        )}

      {topRated && topRated.length > 0 && pathname === "/tv/top-rated" && (
        <Section title="Top rated shows">
          {topRated.map((tv) => (
            <Poster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              title={tv.name}
              rating={tv.vote_average}
              year={tv.first_air_date ? tv.first_air_date : ""}
              isMovie={false}
              popularity={tv.popularity && Math.round(tv.popularity)}
            ></Poster>
          ))}
        </Section>
      )}

      {topRatedInfinite &&
        topRatedInfinite.length > 0 &&
        pathname === "/tv/top-rated" && (
          <Section title="Top rated shows">
            {topRatedTV.map((tv) => (
              <Poster
                key={tv.id}
                id={tv.id}
                imageUrl={tv.poster_path}
                title={tv.name}
                rating={tv.vote_average}
                year={tv.first_air_date ? tv.first_air_date : ""}
                isMovie={false}
                popularity={tv.popularity && Math.round(tv.popularity)}
              ></Poster>
            ))}
          </Section>
        )}

      <GototopButton onClick={() => window.scrollTo(0, 0)}>
        <i
          className="fas fa-arrow-up"
          style={{ color: "white", fontSize: "25px" }}
        ></i>
      </GototopButton>

      {error && <Message text={error}></Message>}
    </Container>
  );
};

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  onTheAir: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
