import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Data from "../../Data/Data";
import "./TotalChart.scss";
import { Button } from "antd";
import "antd/dist/antd.css";

const TotalChart = (props) => {
  const [date, setDate] = useState(["1", "2", "3", "4", "5"]);
  const [totalCase, setTotalCase] = useState({});
  const [totalRecovered, setTotalRecovered] = useState({});
  const [totalDeaths, setTotalDeaths] = useState({});
  const [amount, setAmount] = useState("7 Days");
  const [data, setData] = useState({
    labels: date,
    datasets: [totalCase, totalRecovered, totalDeaths],
  });
  const [isLoading,setIsLoading] = useState(true)

  //Use Effect thay đổi state ngày  khi user chọn select bên Total Case
  useEffect(() => {
    if (props.chooseCountry !== "Global") {
      const getDate = async (country) => {
        let resDate = await Data.caseDayOne(country);
        let dataDayOne = resDate.data;
        if (amount === "This Year") {
          let idx = dataDayOne.findIndex(
            (el) => el.Date === "2021-01-01T00:00:00Z"
          );
          dataDayOne.splice(0, idx);
          let newDate = dataDayOne.map((el) => el.Date.slice(0, 10));
          setDate(newDate);
        } else if (amount === "7 Days") {
          let newDate = dataDayOne.filter(
            (el, idx) => idx < dataDayOne.length && idx > dataDayOne.length - 8
          );
          setDate(newDate.map((el) => el.Date.slice(0, 10)));
        } else {
          let newDate = dataDayOne.filter(
            (el, idx) => idx < dataDayOne.length && idx > dataDayOne.length - 31
          );
          setDate(newDate.map((el) => el.Date.slice(0, 10)));
        }
      };

      getDate(props.chooseCountry);
    } else {
      const getDate = async () => {
        let resDate = await Data.caseDayOneGlobal();
        if (amount === "This Year") {
          let newDate = resDate.data.map((el) => el.Date.slice(0, 10));
          setDate(newDate);
        } else if (amount === "7 Days") {
          let date = resDate.data;
          let newDate = resDate.data.filter(
            (el, idx) => idx < date.length && idx > date.length - 8
          );
          setDate(newDate.map((el) => el.Date.slice(0, 10)));
        } else {
          let date = resDate.data;
          let newDate = date.filter(
            (el, idx) => idx < date.length && idx > date.length - 31
          );
          setDate(newDate.map((el) => el.Date.slice(0, 10)));
        }
      };
      getDate();
    }
  }, [props.chooseCountry, amount]);

  //Use Effect thay đổi Total Global
  useEffect(() => {
    if (props.chooseCountry !== "Global") {
      const getTotal = async (country) => {
        let resTotal = await Data.caseDayOne(country);
        let total = resTotal.data;
        if (amount === "This Year") {
          let idx = total.findIndex((el) => el.Date === "2021-01-01T00:00:00Z");
          total.splice(0, idx);
          let newTotal = total.map((el) => el.Confirmed);
          setTotalCase({
            label: "Total Cases",
            data: newTotal,
            fill: false,
            backgroundColor: "rgb(213, 178, 13)",
            borderColor: "rgb(213, 178, 13)",
          });
        } else if (amount === "7 Days") {
          let newTotal = total.filter(
            (el, idx) => idx < total.length && idx > total.length - 8
          );
          setTotalCase({
            label: "Total Cases",
            data: newTotal.map((el) => el.Confirmed),
            fill: false,
            backgroundColor: "rgb(213, 178, 13)",
            borderColor: "rgb(213, 178, 13)",
          });
        } else {
          let newTotal = total.filter(
            (el, idx) => idx < total.length && idx > total.length - 31
          );
          console.timeLog(newTotal);
          setTotalCase({
            label: "Total Cases",
            data: newTotal.map((el) => el.Confirmed),
            fill: false,
            backgroundColor: "rgb(213, 178, 13)",
            borderColor: "rgb(213, 178, 13)",
          });
        }
      };

      getTotal(props.chooseCountry);
    } else {
      const getTotal = async () => {
        let resDate = await Data.caseDayOneGlobal();
        if (amount === "This Year") {
          let newTotal = resDate.data.map((el) => el.TotalConfirmed);
          setTotalCase({
            label: "Total Cases",
            data: newTotal,
            fill: false,
            backgroundColor: "rgb(213, 178, 13)",
            borderColor: "rgb(213, 178, 13)",
          });
        } else if (amount === "7 Days") {
          let newTotal = resDate.data.filter(
            (el, idx) =>
              idx < resDate.data.length && idx > resDate.data.length - 8
          );
          setTotalCase({
            label: "Total Case",
            data: newTotal.map((el) => el.TotalConfirmed),
            fill: false,
            backgroundColor: "rgb(213, 178, 13)",
            borderColor: "rgb(213, 178, 13)",
          });
        } else {
          let newTotal = resDate.data.filter(
            (el, idx) =>
              idx < resDate.data.length && idx > resDate.data.length - 31
          );
          setTotalCase({
            label: "Total Case",
            data: newTotal.map((el) => el.TotalConfirmed),
            fill: false,
            backgroundColor: "rgb(213, 178, 13)",
            borderColor: "rgb(213, 178, 13)",
          });
        }
      };

      getTotal();
    }
  }, [props.chooseCountry, amount]);

  //useEffect thay đổi Recovered
  useEffect(() => {
    if (props.chooseCountry !== "Global") {
      const getRecovered = async (country) => {
        let resRecovered = await Data.caseDayOne(country);
        let recovered = resRecovered.data;
        if (amount === "This Year") {
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
        } else if (amount === "7 Days") {
          let newRecovered = recovered.filter(
            (el, idx) => idx < recovered.length && idx > recovered.length - 8
          );
          setTotalRecovered({
            label: "Total Recovered",
            data: newRecovered.map((el) => el.Recovered),
            fill: false,
            backgroundColor: "rgb(58, 155, 19)",
            borderColor: "rgb(58, 155, 19)",
          });
        } else {
          let newRecovered = recovered.filter(
            (el, idx) => idx < recovered.length && idx > recovered.length - 31
          );
          setTotalRecovered({
            label: "Total Recovered",
            data: newRecovered.map((el) => el.Recovered),
            fill: false,
            backgroundColor: "rgb(58, 155, 19)",
            borderColor: "rgb(58, 155, 19)",
          });
        }
      };

      getRecovered(props.chooseCountry);
    } else { // Global
      const getRecovered = async () => {
        let resRecovered = await Data.caseDayOneGlobal();
        if (amount === "This Year") {
          let newRecovered = resRecovered.data.map((el) => el.TotalRecovered);
          setTotalRecovered({
            label: "Total Recovered",
            data: newRecovered,
            fill: false,
            backgroundColor: "rgb(58, 155, 19)",
            borderColor: "rgb(58, 155, 19)",
          });
        } else if (amount === "7 Days") {
          let newRecovered = resRecovered.data.filter(
            (el, idx) =>
              idx < resRecovered.data.length &&
              idx > resRecovered.data.length - 8
          );
          console.log(newRecovered)
          setTotalRecovered({
            label: "Total Recovered",
            data: newRecovered.map((el) => el.TotalRecovered),
            fill: false,  
            backgroundColor: "rgb(58, 155, 19)",
            borderColor: "rgb(58, 155, 19)",
          });
        } else {
          let newRecovered = resRecovered.data.filter(
            (el, idx) =>
              idx < resRecovered.data.length &&
              idx > resRecovered.data.length - 31
          );
          setTotalRecovered({
            label: "Total Recovered",
            data: newRecovered.map((el) => el.TotalRecovered),
            fill: false,
            backgroundColor: "rgb(58, 155, 19)",
            borderColor: "rgb(58, 155, 19)",
          });
        }
      };

      getRecovered();
    }
  }, [props.chooseCountry, amount]);

  //useEffect  thay đổi totalDeaths
  useEffect(() => {
    if (props.chooseCountry !== "Global") {
      const getDeaths = async (country) => {
        let resDeaths = await Data.caseDayOne(country);
        let deaths = resDeaths.data;
        if (amount === "This Year") {
          let idx = deaths.findIndex(
            (el) => el.Date === "2021-01-01T00:00:00Z"
          );
          deaths.splice(0, idx);
          let newDeaths = deaths.map((el) => el.Deaths);
          setTotalDeaths({
            label: "Total Deaths",
            data: newDeaths,
            fill: false,
            backgroundColor: "rgb(190, 39, 14)",
            borderColor: "rgb(190, 39, 14)",
          });
        } else if (amount === "7 Days") {
          let newDeaths = deaths.filter(
            (el, idx) => idx < deaths.length && idx > deaths.length - 8
          );
          setTotalDeaths({
            label: "Total Deaths",
            data: newDeaths.map((el) => el.Deaths),
            fill: false,
            backgroundColor: "rgb(190, 39, 14)",
            borderColor: "rgb(190, 39, 14)",
          });
        } else {
          let newDeaths = deaths.filter(
            (el, idx) => idx < deaths.length && idx > deaths.length - 31
          );
          setTotalDeaths({
            label: "Total Deaths",
            data: newDeaths.map((el) => el.Deaths),
            fill: false,
            backgroundColor: "rgb(190, 39, 14)",
            borderColor: "rgb(190, 39, 14)",
          });
        }
      };

      getDeaths(props.chooseCountry);
    } else {
      const getDeaths = async () => {
        let resDeaths = await Data.caseDayOneGlobal();
        if (amount === "This Year") {
          let newDeaths = resDeaths.data.map((el) => el.TotalDeaths);
          setTotalDeaths({
            label: "Total Deaths",
            data: newDeaths,
            fill: false,
            backgroundColor: "rgb(190, 39, 14)",
            borderColor: "rgb(190, 39, 14)",
          });
          setIsLoading(false)
        } else if (amount === "7 Days") {
          let newDeaths = resDeaths.data.filter(
            (el, idx) => idx < resDeaths.data.length && idx > resDeaths.data.length - 8
          );
          setTotalDeaths({
            label: "Total Deaths",
            data: newDeaths.map((el) => el.TotalDeaths),
            fill: false,
            backgroundColor: "rgb(190, 39, 14)",
            borderColor: "rgb(190, 39, 14)",
          });
          setIsLoading(false)
        } else {
          let newDeaths = resDeaths.data.filter(
            (el, idx) => idx < resDeaths.data.length && idx > resDeaths.data.length - 31
          );
          setTotalDeaths({
            label: "Total Deaths",
            data: newDeaths.map((el) => el.TotalDeaths),
            fill: false,
            backgroundColor: "rgb(190, 39, 14)",
            borderColor: "rgb(190, 39, 14)",
          });
          setIsLoading(false)
        }
      };

      getDeaths();
    }
  }, [props.chooseCountry, amount]);

  //Use Effect thay đổi state
  useEffect(() => {
    setData({
      labels: date,
      datasets: [totalCase, totalRecovered, totalDeaths],
    });
  }, [date, totalCase, totalRecovered, totalDeaths]);

  const onChangeAmount = (e) => {
    setAmount(e.target.innerText);
  };

  return (
    <div>
      <div className="button-container">
        <Button onClick={(e) => onChangeAmount(e)}>This Year</Button>
        <Button onClick={(e) => onChangeAmount(e)}>30 Days</Button>
        <Button onClick={(e) => onChangeAmount(e)}>7 Days</Button>
      </div>
      {!isLoading ?  <div className="chart-container">
        <Line data={data} />
      </div> :null }
    
    </div>
  );
};
export default TotalChart;
