import React, { Component } from "react";
import './TimeCount.css'

class TimeCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 1,
    };
  }

  // Function

  // Date
  onLoadDate = () => {
    let today = new Date(); // get current date
    let day = today.getDate(); // get date
    let month = today.toLocaleString("default", { month: "short" }); // get month with 3 letters
    let year = today.getFullYear(); // get full year
    let weekday = today.toLocaleString("default", { weekday: "short" }); // get name of current weekday
    return (
      <div className="date">
        {" "}
        {weekday} {day} {month} {year}
      </div>
    );
  };

  onLoadTime = () => {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    return (
      <div className="time">
        {hour} : {minute} : {second}
      </div>
    );
  };

  componentDidMount = () => {
    this.renderDate = setInterval(() => {
      this.onLoadDate();
      this.setState({ date: this.state.date + 1 });
    }, 1000);
    this.renderTime = setInterval(() => {
      this.onLoadTime();
    }, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.renderDate);
  };

  render() {
    return (
        <div className="header">
          <header>Tracking COVID App</header>
          <div className="current-time">
            {this.onLoadDate()}
            <h1 style={{ fontSize: "32px" }}>|</h1>
            {this.onLoadTime()}
          </div>
        </div>
    );
  }
}

export default TimeCount;
