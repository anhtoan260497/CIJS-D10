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
    // if (country !== "Global") {
    //   let resDayOne = await Data.caseDayOne(country);
    //   let dataDayOne = resDayOne.data
    //   let idx = dataDayOne.findIndex(el => el.Date === "2021-01-01T00:00:00Z")
    //   dataDayOne.slice(0,idx)
    //   this.setState({dayOne : dataDayOne})
    // } else {
    //   let resDayOne = await Data.caseDayOneGlobal()
    //   this.setState({dayOne:resDayOne.data})
    // }
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
