import React, { Component } from "react";
import Home from "./Container/Home";
import { Link, Switch, BrowserRouter, Route } from "react-router-dom";
import Movie from "./Container/Movie";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "",
    };

  }

  getId = id => {
    this.setState({id:id}) // Lấy được ID từ components MovieTag
  }


  render() {
    return (
      <BrowserRouter>
        <Link to="/" className="title">
          <img
            className="logo"
            src={process.env.PUBLIC_URL + "Images/ReactLogo.jpg"}
            alt=""
          />
          <h4>Movie Finder</h4>
        </Link>
        <Switch>
          <Route exact path="/"render={(props) => <Home {...props} getId={this.getId} />}/>
          <Route path="/movie/:id"render={(props) => <Movie {...props} id={this.state.id}/>}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
