import React, { Component } from "react";
import "./MovieTag.scss";

class MovieTag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularFilm: [],
      isHover: true,
    };
  }

  render() {
    const { poster_path, original_title, original_language, release_date } =
      this.props.popularMovies;
    return (
      <div className="movie-tag">
        <div className="play-button">
          <img src={process.env.PUBLIC_URL + "Images/playbutton.png"} alt="" />
        </div>
        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" />
        <div className="movie-name">
          <p>P</p>
          <h3>{original_title}</h3>
        </div>
        <div className="movie-release">
          <p>Language: {original_language}</p>
          <p>{release_date}</p>
        </div>
      </div>
    );
  }
}

export default MovieTag;
