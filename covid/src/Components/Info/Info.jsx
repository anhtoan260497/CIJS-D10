import React, { Component } from "react";
import "antd/dist/antd.css";
import "./Info.scss";
import TotalCase from "../TotalCase/TotalCase";
import TotalChart from "../TotalChart/TotalChart";
import "antd/dist/antd.css";
import { Button } from "antd";
import Map from "../MapAndTable/Map";
import Table from "../MapAndTable/Table";



class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCountries: [],
      chooseCountry: "Global",
      data: {},
      type: "Map of Country",
      countryCode : "vn"
    };
  }

  getDataClickCountry =(country,countryCode) => {
    if(country !== "Global") this.setState({ chooseCountry: country,countryCode : countryCode.toLowerCase() });
    else {this.setState({chooseCountry:"Global"})}
  };

  onChangeType = (e) => {
    this.setState({ type: e.target.innerText });
  };


  render() {
    return (
      <div className="container">
        <div className="first-container">
          <TotalCase getDataClickCountry={this.getDataClickCountry} />
          <TotalChart chooseCountry={this.state.chooseCountry} />
        </div>
        <div className="second-container">
          <div className="btn-container">
            <Button name="map" onClick={(e) => this.onChangeType(e)}>
              Map of Country
            </Button>
            <Button name="table" onClick={(e) => this.onChangeType(e)}>
              Table of Countries
            </Button>
          </div>
          {this.state.type === "Map of Country" ? <Map countryCode={this.state.countryCode} /> : <Table />}  {/* chuyển trạng thái button*/} 
        </div>
      </div>
    );
  }
}

export default Info;
