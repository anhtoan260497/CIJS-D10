import React, { Component } from "react";
import "./MovieTag.scss";
import { Link } from "react-router-dom";

class MovieTag extends Component {
  render() {
    const { poster_path, original_title, original_language, release_date, id } =
      this.props.popularMovies;
    return (
      <div className="movie-tag">
        <div
          className="play-button"
          onClick={() => this.props.onGetId(id)}
        >
          <img src={process.env.PUBLIC_URL + "Images/playbutton.png"} alt="" />
        </div>
        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" />
        <Link to="/lo" className="movie-name">
          <p>P</p>
          <h3>{original_title}</h3>
        </Link>
        <div className="movie-release">
          <p>Language: {original_language}</p>
          <p>{release_date}</p>
        </div>
      </div>
    );
  }
}

export default MovieTag;
