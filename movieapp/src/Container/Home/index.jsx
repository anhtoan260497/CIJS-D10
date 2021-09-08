import React, { Component, Fragment } from "react";
// import { Link } from "react-router-dom";
import Carousel from "../../Components/Homepage/Carousel";
import MovieRender from "../../Components/Homepage/MovieRender/index";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Carousel />
        <MovieRender getId={this.props.getId} history={this.props.history}/>
      </Fragment>
    );
  }
}

export default Home;
