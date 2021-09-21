import Data from "../../Data/Data";
import React, { useEffect, useState } from "react";
import "./Table.scss";

function Table(props) {
  const [isLoadingGlobal, setIsLoadingGlobal] = useState(true);
  const [isLoadingCountries, setIsLoadingCountries] = useState(true);
  const [dataGlobal, setDataGlobal] = useState(null);
  const [dataCountries, setDataCountries] = useState(null);

  useEffect(() => {
    const updateDataGlobal = async () => {
      let resGlobal = await Data.summary();
      setDataGlobal(resGlobal.data.Global);
      setIsLoadingGlobal(false);
    };
    updateDataGlobal();
  }, []);

  useEffect(() => {
    const updateDataCountries = async () => {
      let resGlobal = await Data.summary();
      setDataCountries(resGlobal.data.Countries);
      setIsLoadingCountries(false);
    };
    updateDataCountries();
  }, []);

  const renderDataGlobal = () => {
    return (
      <tr>
        <td>Global</td>
        <td>{dataGlobal.TotalConfirmed}</td>
        <td>{dataGlobal.TotalRecovered}</td>
        <td>{dataGlobal.TotalDeaths}</td>
      </tr>
    );
  };

  const renderDataCountries = () => {
    return dataCountries.map((el, idx) => {
      return (
        <tr key={idx}>
          <td>{el.Country}</td>
          <td>{el.TotalConfirmed}</td>
          <td>{el.TotalRecovered}</td>
          <td>{el.TotalDeaths}</td>
        </tr>
      );
    });
  };


  return (
    <div className="table-container">
      <table>
        <thead className="table-header">
          <tr>
            <th>Countries</th>
            <th>Total Cases</th>
            <th>Recovered</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {!isLoadingGlobal ? renderDataGlobal() : null}
          {!isLoadingCountries ? renderDataCountries() : null}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
