import React, { Component } from "react";
import Home from "./Container/Home";
import {Switch, BrowserRouter, Route } from "react-router-dom";
import Movie from "./Container/Movie";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/movie/:name" component={Movie}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
