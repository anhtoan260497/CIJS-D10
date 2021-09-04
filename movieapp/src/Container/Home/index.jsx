import React, { Component, Fragment } from "react";
// import { Link } from "react-router-dom";
import Carousel from "../../Components/Homepage/Carousel";
import SearchBar from "../../Components/Homepage/SearchBar";
import "./Home.scss";
// import Data from '../../Data/Data'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
    }



  render() {
    return (
      <Fragment>
        <div className="title">
          <img
            className="logo"
            src={process.env.PUBLIC_URL + "Images/ReactLogo.jpg"}
            alt=""
          />
          <h4>Movie Finder</h4>
        </div>
        <Carousel/>
        <SearchBar />
      </Fragment>
    );
  }
}

export default Home;
