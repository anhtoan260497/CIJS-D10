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
      isLoading: false,
    };
  }

  handleClickCountry = async (country) => {
    this.props.getDataClickCountry(country)
    let resData = await Data.summary();
    this.setState({ chooseCountry: country }, () => {
      if (this.state.chooseCountry === "Global") {
        this.setState({ data: resData.data.Global });
      } else {
        let data = resData.data.Countries.filter(
          (el) => el.Country === country
        );
        this.setState({ data: data[0] });
      }
    });
  };

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    let resAllCountries = await Data.summary();
    let allCountries = [];
    resAllCountries.data.Countries.map((el) => allCountries.push(el.Country));
    this.setState(
      {
        allCountries: ["Global", ...allCountries],
        isLoading: false,
        data: resAllCountries.data.Global,
      },
    );
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
      NewConfirmed,
      NewDeaths,
      NewRecovered,
      TotalConfirmed,
      TotalDeaths,
      TotalRecovered,
    } = this.state.data;
    return (
      <div>
        {!this.state.isLoading ? (
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
            <div className="container">
              <div className="totalcase-container">
                <div className="box total-container">
                  <p>New Case</p>
                  <p className="total">+ {NewConfirmed}</p>
                  <p className="old">
                    Total Cases
                    <span>{TotalConfirmed}</span>
                  </p>
                </div>
                <div className="box recover-container">
                  <p>New Recover</p>
                  <p className="recover">+ {NewRecovered}</p>
                  <p className="old">
                    Total Recovers
                    <span>{TotalRecovered}</span>
                  </p>
                </div>
                <div className="box death-container">
                  <p>New Deaths</p>
                  <p className="death">+ {NewDeaths}</p>
                  <p className="old">
                    Total Deaths
                    <span>{TotalDeaths}</span>
                  </p>
                </div>
              </div>
            </div>
          </Fragment>
        ) : (
          <img
            style={{ margin: "auto 45%" }}
            src={process.env.PUBLIC_URL + "loader.gif"}
            alt=""
          />
        )}
      </div>
    );
  }
}

export default TotalCase;
