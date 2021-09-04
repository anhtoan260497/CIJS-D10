import React, { Component } from "react";
import Slider from "react-slick";
import Data from "../../../Data/Data";
import "./Carousel.scss";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.state = {
      popularMovies: [],
    };
  }
  play() {
    this.slider.slickPlay();
  }

  componentDidMount = async () => {
    let res = await Data.getPopularMovies();
    let data = [];
    for (let i = 0; i < 6; i++) {
      data.push(res.data.results[i]);
    }
    this.setState({ popularMovies: data }, () => {
      console.log(this.state.popularMovies);
    }); // lấy data film popular và lấy ra 6 phim setState
  };

  renderPopularMovies = () => {
    return this.state.popularMovies.map((el) => {
      console.log(el.backdrop_path, el.original_title);
      return (
        <div className="popular-container">
            <img
            className ="popular-image"
              src={`https://image.tmdb.org/t/p/original${el.backdrop_path}`}
              alt=""
            />
            <div className="description-container">
              <h3 className="popular-name">{el.original_title}</h3>
              <h3 className="popular-description">
                {el.overview}
              </h3>
            </div>
          </div>
      );
    });
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      adaptiveHeight:true,  
    };
    return (
      <div>
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          {this.renderPopularMovies()}
        </Slider>
        <div style={{ textAlign: "center" }}></div>
      </div>
    );
  }
}
