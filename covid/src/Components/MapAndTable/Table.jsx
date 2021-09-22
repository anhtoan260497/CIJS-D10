import Data from "../../Data/Data";
import React, { Fragment, useEffect, useState } from "react";
import "./Table.scss";

function Table(props) {
  const [isLoadingGlobal, setIsLoadingGlobal] = useState(true);
  const [isLoadingCountries, setIsLoadingCountries] = useState(true);
  const [dataGlobal, setDataGlobal] = useState(null);
  const [dataCountries, setDataCountries] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateDataGlobal = async () => {
      let resGlobal = await Data.summary();
      setDataGlobal(resGlobal.data.Global);
      setIsLoadingGlobal(false);
      if (isLoadingGlobal && isLoadingCountries) setIsLoading(false);
    };
    updateDataGlobal();
  }, [isLoadingCountries, isLoadingGlobal]);

  useEffect(() => {
    const updateDataCountries = async () => {
      let resGlobal = await Data.summary();
      setDataCountries(resGlobal.data.Countries);
      setIsLoadingCountries(false);
      if (isLoadingGlobal && isLoadingCountries) setIsLoading(false);
    };
    updateDataCountries();
  }, [isLoadingGlobal, isLoadingCountries]);

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
    <Fragment>
      {isLoading ? (
        <div className="img-container">
          {" "}
          <img
            style={{ margin: "auto 45%" }}
            src={process.env.PUBLIC_URL + "loader.gif"}
            alt=""
          />
        </div>
      ) : (
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
      )}
    </Fragment>
  );
}

export default Table;
