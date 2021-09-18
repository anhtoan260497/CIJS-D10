import React, { useEffect, useState } from "react";
import Data from "../../Data/Data";
import "./TotalTable.scss";

function TotalTable(props) {
  const [dataGlobal, setDataGlobal] = useState([]);
  const [dataCountries, setDataCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let resData = await Data.summary();
      setDataGlobal(resData.data.Global);
      setDataCountries(resData.data.Countries);
    };
    getData();
  }, []);

  const renderCountries = () => {
    return dataCountries.map((el,idx) => {
      return (
        <tr key={idx}>
          <td className="country" >{el.Country}</td>
          <td>{el.TotalConfirmed}</td>
          <td>{el.TotalRecovered}</td>
          <td>{el.TotalDeaths}</td>
        </tr>
      );
    });
  };

  // dataGlobal.TotalConfirmed
  return (
    <div className="table-container">
        <h1>Total Live Cases</h1>
      <table>
        <thead>
          <tr>
            <th className="country">Country</th>
            <th>Total Cases</th>
            <th>Total Recovered</th>
            <th>Total Deaths</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td  className="country" >Global</td>
            <td>{dataGlobal.TotalConfirmed}</td>
            <td>{dataGlobal.TotalRecovered}</td>
            <td>{dataGlobal.TotalDeaths}</td>
          </tr>
          {renderCountries()}
        </tbody>
      </table>
    </div>
  );
}

export default TotalTable;
