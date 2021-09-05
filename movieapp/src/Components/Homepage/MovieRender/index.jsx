import React, { Component } from "react";
import "./MovieRender.scss";
import MovieTag from "./MovieTag";
import Data from '../../../Data/Data'

class MovieRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularMovies: [],
    }
  }

  async componentDidMount() {
    let res = await Data.getPopularMovies();
    let data = [];
    for (let i = 0; i < 12; i++) {
      data.push(res.data.results[i]);
    }
    this.setState({ popularMovies: data },()=>{
    })
  }

  renderMovieTag = () => {
      return this.state.popularMovies.map(el=>{
        return <MovieTag popularMovies={el} key={el.id}/>
      })
  }

  render() {
    return (
      <div className="movie-render-container">
          {this.renderMovieTag()}
      </div>
    );
  }
}

export default MovieRender;
