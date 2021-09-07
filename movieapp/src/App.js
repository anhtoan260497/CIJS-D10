import React, { Component } from "react";
import Home from "./Container/Home";
import {Link,Switch, BrowserRouter, Route } from "react-router-dom";
import Movie from "./Container/Movie";
import './App.css'



class App extends Component {
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
          <Route exact path="/" component={Home}></Route>
          <Route path="/movie/:id" component={Movie}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
