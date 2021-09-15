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
        let resData = await Data.searchCountry();
        let data = resData.data.result.filter(el => { return el.country === country })
        this.setState({data : data[0]})
      }
    });
  };
  // lấy value của Country vừa click

  componentDidMount = async () => {
    let resCountry = await Data.allCountry();
    let allCountries = ["Global"]
    resCountry.data.result.map(el => { return allCountries.push(el.country)})
    this.setState({allCountries:allCountries.sort()}) // lấy Data tên các nước gán vào phần State để render ở Select
    let resNewCase  = await Data.globalDaily()
    console.log(resNewCase.data.result)
    let newCaseArr = resNewCase.data.result.map(el => el.newCases)
    let newDeathsArr = resNewCase.data.result.map(el => el.newDeaths)
    let newCase = 0
    let newDeaths = 0
    for(let i =0 ; i < newCaseArr.length ; i++ ){
      if(parseInt(newCaseArr[i]) > 500 ) {newCase += parseInt(parseInt(newCaseArr[i]))} else {newCase += parseInt(parseInt(newCaseArr[i])*1000)}
      if(parseInt(newDeathsArr[i]) > 3 ) {newDeaths += parseInt(parseInt(newDeathsArr[i]))} else {newDeaths += parseInt(parseInt(newDeathsArr[i])*1000)}
      
    }
    console.log(newCase,newDeaths)
    let resData = await Data.globalTotal();
    this.setState({ data: {...resData.data.result,newCases:newCase,newDeaths:newDeaths} }); // set Data lúc vừa vào page là Global

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
      newCases, newDeaths, totalCases, totalDeaths, totalRecovered
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
        <div className="totalcase-container">
          <div className="box total-container">
            <p>New Case</p>
            <p className="total">{newCases === "" ? 0 : newCases}</p>
            <p className="old">
              Total Cases
              <span>{totalCases}</span>
            </p>
          </div>
          <div className="box recover-container">
            <p>New Recover</p>
            <p className="recover">+ {`No Information`}</p>
            <p className="old">
              Total Recovers
              <span>{totalRecovered}</span>
            </p>
          </div>
          <div className="box death-container">
            <p>New Deaths</p>
            <p className="death">{newDeaths === "" ? 0 : newDeaths}</p>
            <p className="old">
              Total Deaths
              <span>{totalDeaths}</span>
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default TotalCase;
