import React, { Component } from "react";
import "./MovieRender.scss";
import MovieTag from "./MovieTag";
import Data from "../../../Data/Data";
import TrailerHover from "./MovieTag/TrailerHover";
import { Fragment } from "react/cjs/react.production.min";
import SearchBar from "../SearchBar";

class MovieRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      data: [],

      isPopularMovies: true,
      isTopRatedMovies: false,
      isUpComingMovies: false,
      isSearch: false, // lấy giá trị từ components Container - Home

      trailer: [],
      key: "",
      onTrailer: false,
      search: "",
      isLoading: false,
    };
  }

  // Mặc định lúc Mount đầu tiên sẽ luôn là Popular
  async componentDidMount() {
    let dataPopular = [];
    let resPopular = await Data.getPopularMovies(this.state.page);
    for (let i = 0; i < 12; i++) {
      dataPopular.push(resPopular.data.results[i]);
    }
    this.setState({ data: dataPopular });
  }

  // Tạo nút Popular, Upcoming và Top Rated, ấn vào cái nào, lấy Data cái đó set lại state
  onClickButton = async (e) => {
    if (e.target.name === "isPopularMovies") {
      let dataPopular = [];
      let resPopular = await Data.getPopularMovies(1);
      for (let i = 0; i < 12; i++) {
        dataPopular.push(resPopular.data.results[i]);
      } // Lấy 12 phim
      this.setState({
        isPopularMovies: true,
        isTopRatedMovies: false,
        isUpComingMovies: false,
        onTrailer: false,
        data: dataPopular,
        page:1
      });
    } else if (e.target.name === "isTopRatedMovies") {
      let dataTopRated = [];
      let resTopRated = await Data.getTopRatedMovies(1);
      for (let i = 0; i < 12; i++) {
        dataTopRated.push(resTopRated.data.results[i]);
      }
      this.setState({
        isPopularMovies: false,
        isTopRatedMovies: true,
        isUpComingMovies: false,
        onTrailer: false,
        data: dataTopRated,
        page:1
      });
    } else {
      let dataUpComing = [];
      let resUpComing = await Data.getUpComingMovies(1);
      for (let i = 0; i < 12; i++) {
        dataUpComing.push(resUpComing.data.results[i]);
      }
      this.setState({
        isPopularMovies: false,
        isTopRatedMovies: false,
        isUpComingMovies: true,
        data: dataUpComing,
        onTrailer: false,
        page:1
      });
    }
  };

  //Lấy ID để lấy trailer
  onGetId = async (id) => {
    let key = "";
    let resVideo = await Data.getVideos(id);
    this.setState({ trailer: resVideo.data.results }, () => {
      let arr = this.state.trailer.filter((el) => {
        return el.name.includes("Official") || el.name.includes("Trailer");
      });
      if (arr.length !== 0) {
        key = arr[0].key;
        this.setState({ key: key, onTrailer: true });
      }
    }); // Lấy key của video
  };

  //Render Movies
  renderMovieTag = () => {
    return this.state.data.map((el) => {
      return (
        <MovieTag
          history={this.props.history}
          popularMovies={el}
          key={el.id}
          onGetId={this.onGetId}
        />
      );
    });
  };

  //Tắt trailer
  turnOffTrailer = () => {
    this.setState({ onTrailer: false });
  };

  onSearch = (e) => {
    this.setState(
      {
        search: e.target.value,
        isPopularMovies: false,
        isTopRatedMovies: false,
        isUpComingMovies: false,
        isSearch: true,
      }, // Nhập ký tự vào thì cho isSearch bằng True
      async () => {
        // Lấy Data
        if (this.state.search.length === 0) {
          //Nếu không có gì trong thanh search thì render lại phần Popular
          let dataPopular = [];
          let resPopular = await Data.getPopularMovies(this.state.page);
          for (let i = 0; i < 12; i++) {
            // Lấy 12 phim để responsive giao diện
            dataPopular.push(resPopular.data.results[i]);
          }
          this.setState({ data: dataPopular, isSearch: false });
        } else {
          // Nếu có thì Render phần Search
          let resSearch = await Data.getSearch(this.state.search);
          this.setState({ data: resSearch.data.results });
        }
      }
    );
  };

  loadMore = async () => {
    if (this.state.isPopularMovies) {
      //Trường hợp lấy Popular Movie
      let newMovies = [...this.state.data]; //Clone lại data bên trên
      this.setState({ isLoading: true }); // Cho gif loading
      let resPopular = await Data.getPopularMovies(this.state.page + 1); // Lấy Data Page 2
      for (let i = 0; i < 12; i++) {
        newMovies.push(resPopular.data.results[i]); // tạo lại mảng data mới
      }
      this.setState({
        isLoading: false,
        data: newMovies,
        page: this.state.page + 1,
      }); // tắt loading, set lại data để render và chỉnh số page đang lấy +1
    } else if (this.state.isTopRatedMovies) {
      //Trường hợp Top Rated
      //Trường hợp lấy Popular Movie
      let newMovies = [...this.state.data];
      this.setState({ isLoading: true });
      let resTopRated = await Data.getTopRatedMovies(this.state.page + 1); //
      for (let i = 0; i < 12; i++) {
        newMovies.push(resTopRated.data.results[i]);
      }
      this.setState({
        isLoading: false,
        data: newMovies,
        page: this.state.page + 1,
      });
    } else if (this.state.isUpComingMovies) {
      //Trường hợp lấy Upcoming Movie
      let newMovies = [...this.state.data];
      this.setState({ isLoading: true });
      let resUpComing = await Data.getUpComingMovies(this.state.page + 1);
      for (let i = 0; i < 12; i++) {
        newMovies.push(resUpComing.data.results[i]);
      }
      this.setState({
        isLoading: false,
        data: newMovies,
        page: this.state.page + 1,
      });
    }
  };

  render() {
    return (
      <Fragment>
        <SearchBar onSearch={this.onSearch} />
        <div className="buttons">
          <button
            className="popular button"
            onClick={(e) => this.onClickButton(e)}
            name="isPopularMovies"
          >
            Popular
          </button>
          <button
            className="top-rated button"
            onClick={(e) => this.onClickButton(e)}
            name="isTopRatedMovies"
          >
            Top Rated
          </button>
          <button
            className="up-coming button"
            onClick={(e) => this.onClickButton(e)}
            name="isUpComingMovies"
          >
            Up Coming
          </button>
        </div>
        <div className="movie-render-container" onClick={this.turnOffTrailer}>
          {this.state.onTrailer ? <TrailerHover id={this.state.key} /> : null}
          {this.renderMovieTag()}
        </div>
        {this.state.isLoading ? (
          <div className="loading">
            <img
              src={process.env.PUBLIC_URL + "/Images/loading.gif"}
              alt="non"
            />{" "}
          </div>
        ) : (
          <div className="load-more-container">
            <button className="load-more" onClick={this.loadMore}>
              Load More
            </button>
          </div>
        )}
      </Fragment>
    );
  }
}

export default MovieRender;
