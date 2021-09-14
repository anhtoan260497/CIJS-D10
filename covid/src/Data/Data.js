import axios from "axios"

const Data = {
    allCountry : () => {
        const options = {
          method: 'GET',
          url: 'https://covid-193.p.rapidapi.com/countries',
          headers: {
            'x-rapidapi-host': 'covid-193.p.rapidapi.com',
            'x-rapidapi-key': '85c4c65aafmsha70cd547661a6a9p1ee949jsn3117dbcbd6a0'
          }
        };
        
     return  axios.request(options)
    },

    searchCountry : (search) => {
      const options = {
        method: 'GET',
        url: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php',
        params: {country: `${search}`},
        headers: {
          'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
          'x-rapidapi-key': '85c4c65aafmsha70cd547661a6a9p1ee949jsn3117dbcbd6a0'
        }
      };
          return axios.request(options)
    },

    globalData : () => {
        const options = {
            method: 'GET',
            url: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php',
            headers: {
              'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
              'x-rapidapi-key': '85c4c65aafmsha70cd547661a6a9p1ee949jsn3117dbcbd6a0'
            }
          };
          return axios.request(options)
    }


}

export default Data