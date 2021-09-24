import React, { Component } from "react";
import TimeCount from "./Components/TimeCount/TimeCount";
import Home from "./Home";
import {Route, BrowserRouter, Switch } from "react-router-dom";
import Prevent from "./Components/5 No";
class Covid extends Component {
  render() {
    return (
      <BrowserRouter>
      <TimeCount />


      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/quy-tac-5-khong" component={Prevent}/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default Covid;
