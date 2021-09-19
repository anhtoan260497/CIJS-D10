import React, { Component } from "react";
import TimeCount from "./Components/TimeCount/TimeCount";
import Home from "./Home";
class Covid extends Component {
  render() {
    return (
      <div>
        <TimeCount />
        <Home />
      </div>
    );
  }
}

export default Covid;
