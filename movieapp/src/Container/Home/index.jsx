import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Carousel from "../../Components/Homepage/Carousel";
import "./Home.scss";
import Data from '../../Data/Data'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            popularMovies : []
        }
    }

componentDidMount = async () => {
 let res = await Data.getPopularMovies()
 let data = []
 for(let i = 0; i < 6 ; i++) {
     data.push(res.data.results[i])
 }
 this.setState({popularMovies:data}) // lấy data film popular và lấy ra 6 phim setState
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
          <h4>React Movie Finder</h4>
        </div>
        <Carousel popularMovies={this.state.popularMovies}/>
      </Fragment>
    );
  }
}

export default Home;
