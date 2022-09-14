import React from "react";
import { moviesApi, tvApi } from "api";
import DetailPresenter from "./DetailPresenter";

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);

    const {
      location: { pathname },
    } = props;

    this.state = {
      result: null,
      error: null,
      lodaing: true,
      isMovie: pathname.includes("/movie/"),
      recommendations: null,
      cast: null,
      keywords: null,
      reviews: null,
      backdrops: null,
      posters: null,
      tvDetail2: null,
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;

    const parsedId = parseInt(id);

    if (isNaN(parsedId)) {
      push("/");
      return;
    }

    let result = null;
    const { isMovie } = this.state;

    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));

        const {
          data: { results: recommendations },
        } = await moviesApi.recommendations(parsedId);

        const {
          data: { cast },
        } = await moviesApi.credits(parsedId);

        const {
          data: { keywords },
        } = await moviesApi.keywords(parsedId);

        const {
          data: { results: reviews },
        } = await moviesApi.reviews(parsedId);

        const {
          data: { backdrops },
          data: { posters },
        } = await moviesApi.images(parsedId);

        this.setState({ recommendations, cast, keywords, reviews, backdrops: backdrops && backdrops, posters: posters && posters });
      } else {
        ({ data: result } = await tvApi.tvDetail(parsedId));

        const {
          data: { results: recommendations },
        } = await tvApi.recommendations(parsedId);

        const {
          data: { cast },
        } = await tvApi.credits(parsedId);

        const {
          data: { results: keywords },
        } = await tvApi.keywords(parsedId);

        const {
          data: { results: reviews },
        } = await tvApi.reviews(parsedId);

        const {
          data: { backdrops },
          data: { posters },
        } = await tvApi.images(parsedId);

        const {
          data: {
            videos: { results: tvDetail2 },
          },
        } = await tvApi.tvDetail2(parsedId);

        this.setState({ recommendations, cast, keywords, reviews, backdrops: backdrops && backdrops, posters: posters && posters, tvDetail2 });
      }
    } catch (error) {
      console.log(error);
      this.setState({ error: "Can't find Anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    return <DetailPresenter {...this.state} />;
  }
}

export default DetailContainer;
