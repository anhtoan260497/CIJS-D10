import React, { Component } from "react";
import "./MovieRender.scss";
import MovieTag from "./MovieTag";
import Data from '../../../Data/Data'
import TrailerHover from "./MovieTag/TrailerHover";

class MovieRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularMovies: [],
      trailer : [],
      key:"",
      onTrailer:false,
    }
  }

  async componentDidMount() {
   try {
    let resPopular = await Data.getPopularMovies();
    let data = [];
    for (let i = 0; i < 12; i++) {
      data.push(resPopular.data.results[i]);
    }
    this.setState({ popularMovies: data })
  } catch {
    
  }
   }// Lấy Data cho Popular

  onGetId = async id => {
    let key = ""
    let trailer = await Data.getVideos(id)
    this.setState({trailer:trailer.data.results},()=>{
      let arr = this.state.trailer.filter(el => {
        return el.name.includes("Official")
      })
      key = arr[0].key
      this.setState({key:key,onTrailer:true})
    }) // Lấy key của video 
  }



  renderMovieTag = () => {
      return this.state.popularMovies.map(el=>{
        return <MovieTag popularMovies={el} onStopVideo={this.onStopVideo} key={el.id} onGetId={this.onGetId}/>
      })
  }

  turnOffTrailer = () => {
    this.setState({onTrailer:false})
  }

  render() {
    return (
      <div className="movie-render-container" onClick={this.turnOffTrailer}>
        {this.state.onTrailer ?<TrailerHover id={this.state.key} />: null}
          {this.renderMovieTag()}
      </div>
    );
  }
}

export default MovieRender;
