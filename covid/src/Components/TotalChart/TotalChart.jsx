import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Data from "../../Data/Data";
import './TotalChart.scss'

const TotalChart = (props) => {
  const [date, setDate] = useState(["1", "2", "3", "4", "5"]);
  const [totalCase, setTotalCase] = useState({});
  const [totalRecovered, setTotalRecovered] = useState({});
  const [totalDeaths, setTotalDeaths] = useState({});
  const [data, setData] = useState({
    labels: date,
    datasets: [totalCase, totalRecovered, totalDeaths],
  });

  //Use Effect thay đổi state ngày  khi user chọn select bên Total Case
  useEffect(() => {
    if (props.chooseCountry !== "Global") {
      const getDate = async (country) => {
        let resDate = await Data.caseDayOne(country);
        let dataDayOne = resDate.data;
        let idx = dataDayOne.findIndex(
          (el) => el.Date === "2021-01-01T00:00:00Z"
        );
        dataDayOne.splice(0, idx);
        let newDate = dataDayOne.map((el) => el.Date.slice(0, 10));
        setDate(newDate);
      };
      getDate(props.chooseCountry);
    } else {
      const getDate = async () => {
        let resDate = await Data.caseDayOneGlobal();
        let newDate = resDate.data.map((el) => el.Date.slice(0, 10));
        setDate(newDate);
      };
      getDate();
    }
  }, [props.chooseCountry]);

  //Use Effect thay đổi Total Global
  useEffect(() => {
    if (props.chooseCountry !== "Global") {
      const getTotal = async (country) => {
        let resTotal = await Data.caseDayOne(country);
        let total = resTotal.data;
        let idx = total.findIndex((el) => el.Date === "2021-01-01T00:00:00Z");
        total.splice(0, idx);
        let newTotal = total.map((el) => el.Confirmed);
        console.log(total);
        setTotalCase({
          label: "Total Cases",
          data: newTotal,
          fill: false,
          backgroundColor: "rgb(213, 178, 13)",
          borderColor: "rgb(213, 178, 13)",
        });
      };
      getTotal(props.chooseCountry);
    } else {
      const getTotal = async () => {
        let resDate = await Data.caseDayOneGlobal();
        let newTotal = resDate.data.map((el) => el.NewConfirmed);
        setTotalCase({
          label: "Total Cases",
          data: newTotal,
          fill: false,
          backgroundColor: "rgb(213, 178, 13)",
          borderColor: "rgb(213, 178, 13)",
        });
      };
      getTotal();
    }
  }, [props.chooseCountry]);

  //useEffect thay đổi Recovered
  useEffect(() => {
    if (props.chooseCountry !== "Global") {
      const getRecovered = async (country) => {
        let resRecovered = await Data.caseDayOne(country);
        let recovered = resRecovered.data;
        let idx = recovered.findIndex(
          (el) => el.Date === "2021-01-01T00:00:00Z"
        );
        recovered.splice(0, idx);
        let newRecovered = recovered.map((el) => el.Recovered);
        setTotalRecovered({
          label: "Total Recovered",
          data: newRecovered,
          fill: false,
          backgroundColor: "rgb(58, 155, 19)",
          borderColor: "rgb(58, 155, 19)",
        });
      };
      getRecovered(props.chooseCountry);
    } else {
      const getRecovered = async () => {
        let resRecovered = await Data.caseDayOneGlobal();
        let newRecovered = resRecovered.data.map((el) => el.NewRecovered);
        setTotalRecovered({
          label: "Total Recovered",
          data: newRecovered,
          fill: false,
          backgroundColor: "rgb(58, 155, 19)",
          borderColor: "rgb(58, 155, 19)",
        });
      };
      getRecovered();
    }
  }, [props.chooseCountry]);

  //useEffect  thay đổi totalDeaths
  useEffect(() => {
    if (props.chooseCountry !== "Global") {
      const getDeaths = async (country) => {
        let resDeaths = await Data.caseDayOne(country);
        let deaths = resDeaths.data;
        let idx = deaths.findIndex((el) => el.Date === "2021-01-01T00:00:00Z");
        deaths.splice(0, idx);
        let newDeaths = deaths.map((el) => el.Deaths);
        setTotalDeaths({
          label: "Total Deaths",
          data: newDeaths,
          fill: false,
          backgroundColor: "rgb(190, 39, 14)",
          borderColor: "rgb(190, 39, 14)",
        });
      };
      getDeaths(props.chooseCountry);
    } else {
      const getDeaths = async () => {
        let resDeaths = await Data.caseDayOneGlobal();
        let newDeaths = resDeaths.data.map((el) => el.NewDeaths);
        setTotalDeaths({
          label: "Total Deaths",
          data: newDeaths,
          fill: false,
          backgroundColor: "rgb(190, 39, 14)",
          borderColor: "rgb(190, 39, 14)",
        });
      };
      getDeaths();
    }
  }, [props.chooseCountry]);

  //Use Effect thay đổi state
  useEffect(() => {
    setData({
      labels: date,
      datasets: [totalCase, totalRecovered, totalDeaths],
    });
  }, [date, totalCase, totalRecovered, totalDeaths]);

  return (
    <div className="chart-container">
    
     <Line data={data} />
     
    </div>
  );
};
export default TotalChart;
