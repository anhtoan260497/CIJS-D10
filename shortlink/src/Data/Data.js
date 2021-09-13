import axios from "axios"

const Data = {
    getData : url => {
        return axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
    }
}

export default Data