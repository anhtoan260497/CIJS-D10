import React, { Component } from "react";
import ActorRender from "../../Components/FilmInfoPage/ActorRender";
import FilmInfo from "../../Components/FilmInfoPage/FilmInfo";
import Data from "../../Data/Data";
import "./Movie.scss";

class Movie extends Component {
  constructor(props){
    super(props)
    this.state = {
      movieInfo:{},
    }
  }

    onBackToHome = () =>{
        this.props.history.push("/")
    }

componentDidMount = async () => {
    let resMovieInfo = await Data.getMovieInfo(this.props.id)
    this.setState({movieInfo:resMovieInfo.data},()=>{
    })
}

  render() {
    const {runtime,revenue,budget} = this.state.movieInfo
    return (
      <div>
          <div className="movie-header-container">
              <div className="movie-header"><button onClick={this.onBackToHome}>Home</button><span>| {this.state.movieInfo.title}</span></div>
          </div>
        <FilmInfo movieInfo={this.state.movieInfo}/>
        <div className="budget-container">
          <div><img src={process.env.PUBLIC_URL + "/Images/clock.png"} alt=""/><span>{runtime} minutes</span></div>
          <div><img src={process.env.PUBLIC_URL + "/Images/budget.png"} alt=""/><span>${budget}</span></div>
          <div><img src={process.env.PUBLIC_URL + "/Images/money.png"} alt=""/><span>${revenue}</span></div>
        </div>
        <h3 style={{fontFamily: "Balsamiq Sans",marginLeft:"1.5em",fontSize:"2em"}}>Actors</h3>
        <ActorRender id={this.props.id}/>
      </div>
    );
  }
}

export default Movie;
