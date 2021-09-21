import axios from "axios"

const Data = {
   summary : () => {
     return axios.get(`https://api.covid19api.com/summary`)
   },
   caseDayOne : country => {
     return axios.get(`https://api.covid19api.com/country/${country}`)
   },
   caseDayOneGlobal : () => {
     return axios.get(`https://api.covid19api.com/world`)
   },
   getWorld : () => {
    return axios.get(`https://code.highcharts.com/mapdata/countries/us/us-all.geo.json`);
  }
}

export default Data