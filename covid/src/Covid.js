import React, { Component } from "react";
import TimeCount from "./Components/TimeCount/TimeCount";
import Home from "./Home";
import {Route, BrowserRouter, Switch } from "react-router-dom";
import Prevent from "./Components/Prevent";
import About from "./Components/About/About";
class Covid extends Component {
  render() {
    return (
      <BrowserRouter>
      <TimeCount />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Quy-tac-5-khong" component={Prevent}/>
        <Route path="/About" component={About}/>  
      </Switch>
      </BrowserRouter>
    );
  }
}

export default Covid;
