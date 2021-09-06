import axios from "axios"
const API_key = '8f801ff902ecc53548ff30dc7dacbe10'
const FetchData = {
    getPopularMovies: ()=> {
        return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_key}&language=en-US&page=1`)
    },
    getVideos: (id)=>{
        return axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_key}&language=en-US`)
    }
}

export default FetchData