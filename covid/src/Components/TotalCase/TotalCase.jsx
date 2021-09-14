import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { Select } from "antd";
import "./TotalCase.scss";
import Data from "../../Data/Data";
const { Option } = Select;

class TotalCase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nation: "",
      allCountries: [],
      chooseCountry: "Global",
      data: {},
    };
  }

  handleClickCountry = async (country) => {
    this.setState({ chooseCountry: country }, async () => {
      if (this.state.chooseCountry === "Global") {
        let resData = await Data.globalData();
        this.setState({ data: resData.data });
      } else {
        let resData = await Data.searchCountry(country);
        console.log(resData);
        if(resData.data === ""){
          alert('No report from this country')
          return null
        }
        this.setState({ data: resData.data.latest_stat_by_country[0] }, () => {
          console.log(this.state.data);
        });
      }
    });
  };
  // lấy value của Country vừa click

  componentDidMount = async () => {
    let resCountry = await Data.allCountry();
    this.setState({ allCountries: ["Global", ...resCountry.data.response] }); // lấy Data tên các nước gán vào phần State để render ở Select
    let resData = await Data.globalData();
    this.setState({ data: resData.data }); // set Data lúc vừa vào page là Global
  };

  renderAllCountries = () => {
    return this.state.allCountries.map((el, idx) => {
      return (
        <Option key={idx} value={el}>
          {el}
        </Option>
      );
    });
  };

  render() {
    const {
      new_cases,
      new_deaths,
      total_cases,
      total_deaths,
      total_recovered,
    } = this.state.data;

    return (
      <Fragment>
        <div className="select-container">
          <Select
            defaultValue="Global"
            style={{ width: 160 }}
            onChange={this.handleClickCountry}
          >
            {this.renderAllCountries()}
          </Select>
        </div>
        <div className="grid">
          <div className="row">
            <div className="c-12 box total-container">
              <p>New Case</p>
              <p className="total">+ { new_cases === "" ? 0 : new_cases}</p>
              <p className="old">
                Total Cases
                <span>{total_cases}</span>
              </p>
            </div>
            <div className="c-12 box recover-container">
              <p>New Recover</p>
              <p className="recover">+ {`No Information`}</p>
              <p className="old">
                Total Recovers
                <span>{total_recovered}</span>
              </p>
            </div>
            <div className="c-12 box death-container">
              <p>New Deaths</p>
              <p className="death"> + {new_deaths === "" ? 0 : new_deaths}</p>
              <p className="old">
                Total Deaths
                <span>{total_deaths}</span>
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default TotalCase;
