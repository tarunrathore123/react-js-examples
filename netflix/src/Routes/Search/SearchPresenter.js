import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 160px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 110px;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 19px;
  }
`;

const Form = styled.form`
  position: relative;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    width: 85%;
    margin-bottom: 10px;
  }
`;

const Input = styled.input`
  font-size: 20px;
  border: none;
  outline: none;
  background-color: transparent;
  width: 660px;
  padding: 15px 20px;
  background-color: white;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
    padding: 15px 10px;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  font-size: 20px;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #e30914;
  color: white;
  padding: 14px 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  box-sizing: border-box;
`;

const ButtonContent = styled.div`
  display: flex;
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
    font-size: 15px;
    font-weight: normal;
  }
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateSearchTerm,
}) => {
  const {
    location: { pathname },
  } = window;

  return (
    <Container>
      <HelmetProvider>
        <Helmet>
          <title>Netflix - Search</title>
        </Helmet>
      </HelmetProvider>

      <Title>
        There are millions of movies and TV shows.
        <br />
        Search right now.
      </Title>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Search for a movie or TV show."
          value={searchTerm}
          onChange={updateSearchTerm}
        ></Input>
        <Button onSubmit={handleSubmit}>Search</Button>
      </Form>

      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <ButtonContainer>
            <ButtonContent>
              <ButtonLink to="/search" current={pathname === "/search" && true}>
                Movie
              </ButtonLink>
              <ButtonLink
                to="/search/result-tv"
                current={pathname === "/search/result-tv" && true}
              >
                TV show
              </ButtonLink>
            </ButtonContent>
          </ButtonContainer>

          {movieResults && movieResults.length > 0 && pathname === "/search" && (
            <Section title="Movie">
              {movieResults.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.title}
                  rating={movie.vote_average}
                  year={movie.release_date ? movie.release_date : ""}
                  isMovie={true}
                  popularity={movie.popularity && Math.round(movie.popularity)}
                ></Poster>
              ))}
            </Section>
          )}

          {tvResults &&
            tvResults.length > 0 &&
            pathname === "/search/result-tv" && (
              <Section title="TV shows">
                {tvResults.map((tv) => (
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
        </>
      )}
      {error && <Message text={error}></Message>}
      {movieResults &&
        tvResults &&
        movieResults.length === 0 &&
        tvResults.length === 0 && <Message text="Nothing Found"></Message>}
    </Container>
  );
};

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  updateSearchTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
