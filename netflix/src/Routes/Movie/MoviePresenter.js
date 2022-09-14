import { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import PropTypes from "prop-types";
import styled from "styled-components";
import uniqBy from "lodash.uniqby";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import useInfiniteScroll from "useInfiniteScroll";
import { moviesApi } from "api";

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
    margin: 0 5px;
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

const MoviePresenter = ({
  nowPlaying,
  upcoming,
  popular,
  topRated,
  error,
  loading,
  nowPlayingInfinite,
  popularInfinite,
  upcomingInfinite,
  topRatedInfinite,
}) => {
  const {
    location: { pathname },
  } = window;

  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const page = useInfiniteScroll();

  const getInfiniteApi = async () => {
    if (page !== 1) {
      if (pathname === "/movie") {
        try {
          const {
            data: { results: newPopularMovies },
          } = await moviesApi.popularInfinite(page);
          const totalMovies = [...popularMovies, ...newPopularMovies];
          const uniqByMovies = uniqBy(totalMovies, "id");

          setPopularMovies(uniqByMovies);
        } catch (error) {
          console.log(error);
        }
      } else if (pathname === "/movie/now-playing") {
        try {
          const {
            data: { results: newNowPlayingMovies },
          } = await moviesApi.nowPlayingInfinite(page);
          const totalMovies = [...nowPlayingMovies, ...newNowPlayingMovies];
          const uniqByMovies = uniqBy(totalMovies, "id");

          setNowPlayingMovies(uniqByMovies);
        } catch (error) {
          console.log(error);
        }
      } else if (pathname === "/movie/upcoming") {
        try {
          const {
            data: { results: newUpcomingMovies },
          } = await moviesApi.upcomingInfinite(page);
          const totalMovies = [...upcomingMovies, ...newUpcomingMovies];
          const uniqByMovies = uniqBy(totalMovies, "id");

          setUpcomingMovies(uniqByMovies);
        } catch (error) {
          console.log(error);
        }
      } else if (pathname === "/movie/top-rated") {
        try {
          const {
            data: { results: newTopRatedMovies },
          } = await moviesApi.topRatedInfinite(page);
          const totalMovies = [...topRatedMovies, ...newTopRatedMovies];
          const uniqByMovies = uniqBy(totalMovies, "id");

          setTopRatedMovies(uniqByMovies);
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
          <title>Netflix - Movies</title>
        </Helmet>
      </HelmetProvider>

      {popular && popular.length > 0 && pathname === "/movie" && (
        <TitleContainer>
          <TitleContent>
            <Title>Popular Movies</Title>
            <SubTitle>
              Get a list of currently popular movies.
              <br />
              The movie list is automatically updated daily.
            </SubTitle>
          </TitleContent>
        </TitleContainer>
      )}

      {nowPlaying &&
        nowPlaying.length > 0 &&
        pathname === "/movie/now-playing" && (
          <TitleContainer>
            <TitleContent>
              <Title>Movies currently showing</Title>
              <SubTitle>
                Get a list of currently playing movies.
                <br />
                Find all movies showing within a specified date.
              </SubTitle>
            </TitleContent>
          </TitleContainer>
        )}

      {upcoming && upcoming.length > 0 && pathname === "/movie/upcoming" && (
        <TitleContainer>
          <TitleContent>
            <Title>Movies scheduled to be shown</Title>
            <SubTitle>
              Get a list of upcoming movies.
              <br />
              Find upcoming movies within a specified date.
            </SubTitle>
          </TitleContent>
        </TitleContainer>
      )}

      {topRated && topRated.length > 0 && pathname === "/movie/top-rated" && (
        <TitleContainer>
          <TitleContent>
            <Title>Highly rated movies</Title>
            <SubTitle>
              Get a list of the highest rated movies among all movies.
              <br />
              Sort by top rated movies.
            </SubTitle>
          </TitleContent>
        </TitleContainer>
      )}

      <ButtonContainer>
        <ButtonContent>
          <ButtonLink to="/movie" current={pathname === "/movie" && true}>
            Popular Movies
          </ButtonLink>
          <ButtonLink
            to="/movie/now-playing"
            current={pathname === "/movie/now-playing" && true}
          >
            Currently Showing
          </ButtonLink>
          <ButtonLink
            to="/movie/upcoming"
            current={pathname === "/movie/upcoming" && true}
          >
            To be screened
          </ButtonLink>
          <ButtonLink
            to="/movie/top-rated"
            current={pathname === "/movie/top-rated" && true}
          >
            Highly rated movies
          </ButtonLink>
        </ButtonContent>
      </ButtonContainer>

      {popular && popular.length > 0 && pathname === "/movie" && (
        <Section title="popular movies">
          {popular.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date ? movie.release_date : ""}
              isMovie={true}
              overview={movie.overview}
              popularity={movie.popularity && Math.round(movie.popularity)}
            ></Poster>
          ))}
        </Section>
      )}

      {popularInfinite && popularInfinite.length > 0 && pathname === "/movie" && (
        <Section title="Popular Movies">
          {popularMovies.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date ? movie.release_date : ""}
              isMovie={true}
              overview={movie.overview}
              popularity={movie.popularity && Math.round(movie.popularity)}
            ></Poster>
          ))}
        </Section>
      )}

      {nowPlaying &&
        nowPlaying.length > 0 &&
        pathname === "/movie/now-playing" && (
          <Section title="Currently Showing">
            {nowPlaying.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.title}
                rating={movie.vote_average}
                year={movie.release_date ? movie.release_date : ""}
                isMovie={true}
                overview={movie.overview}
                popularity={movie.popularity && Math.round(movie.popularity)}
              ></Poster>
            ))}
          </Section>
        )}

      {nowPlayingInfinite &&
        nowPlayingInfinite.length > 0 &&
        pathname === "/movie/now-playing" && (
          <Section title="Currently Showing">
            {nowPlayingMovies.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.title}
                rating={movie.vote_average}
                year={movie.release_date ? movie.release_date : ""}
                isMovie={true}
                overview={movie.overview}
                popularity={movie.popularity && Math.round(movie.popularity)}
              ></Poster>
            ))}
          </Section>
        )}

      {upcoming && upcoming.length > 0 && pathname === "/movie/upcoming" && (
        <Section title="To be screened">
          {upcoming.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date ? movie.release_date : ""}
              isMovie={true}
              overview={movie.overview}
              popularity={movie.popularity && Math.round(movie.popularity)}
            ></Poster>
          ))}
        </Section>
      )}

      {upcomingInfinite &&
        upcomingInfinite.length > 0 &&
        pathname === "/movie/upcoming" && (
          <Section title="To be screened">
            {upcomingMovies.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.title}
                rating={movie.vote_average}
                year={movie.release_date ? movie.release_date : ""}
                isMovie={true}
                overview={movie.overview}
                popularity={movie.popularity && Math.round(movie.popularity)}
              ></Poster>
            ))}
          </Section>
        )}

      {topRated && topRated.length > 0 && pathname === "/movie/top-rated" && (
        <Section title="highly rated movies">
          {topRated.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date ? movie.release_date : ""}
              isMovie={true}
              overview={movie.overview}
              popularity={movie.popularity && Math.round(movie.popularity)}
            ></Poster>
          ))}
        </Section>
      )}

      {topRatedInfinite &&
        topRatedInfinite.length > 0 &&
        pathname === "/movie/top-rated" && (
          <Section title="highly rated movies">
            {topRatedMovies.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.title}
                rating={movie.vote_average}
                year={movie.release_date ? movie.release_date : ""}
                isMovie={true}
                overview={movie.overview}
                popularity={movie.popularity && Math.round(movie.popularity)}
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

MoviePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  popularInfinite: PropTypes.array,
  nowPlayingInfinite: PropTypes.array,
  upcomingInfinite: PropTypes.array,
  topRatedInfinite: PropTypes.array,
};

export default withRouter(MoviePresenter);
