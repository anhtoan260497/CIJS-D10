import React from "react";
import "./FilmInfo.scss";

function FilmInfo(props) {
    const {backdrop_path, poster_path, original_title, overview, vote_average, director} = props.movieInfo
  return (
    <div className="movie-info-container">
      <img
        className="background"
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt=""
      />
      <div className="movie-info">
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt=""
        />
        <div className="info">
          <h3>{original_title}</h3>
          <div>
            <h3>Plot</h3>
            <p className="plot">
              {overview}
            </p>
          </div>

          <div className="score-director">
            <div>
              <h3>IMDB Rating</h3>
              <p>{vote_average}</p>
            </div>
            <div>
              <h3>Director</h3> <p>{director}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmInfo;
