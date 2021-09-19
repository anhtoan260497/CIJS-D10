import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import "./Info.scss";
import TotalCase from "../TotalCase/TotalCase";
// import TotalTable from "../TotalTable/TotalTable";
import TotalChart from "../TotalChart/TotalChart";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCountries: [],
      chooseCountry: "Global",
      data: {},
    };
  }

  getDataClickCountry = async (country) => {
    this.setState({chooseCountry:country})
  };

  render() {
    return (
      <Fragment>
        <div className="first-container">
          <TotalCase getDataClickCountry={this.getDataClickCountry} />
          <TotalChart chooseCountry={this.state.chooseCountry}/>
        </div>
      </Fragment>
    );
  }
}

export default Info;
