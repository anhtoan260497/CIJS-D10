import axios from "axios"
const API_key = '8f801ff902ecc53548ff30dc7dacbe10'
const Data = {
    getPopularMovies: (page)=> {
        return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_key}&language=en-US&page=${page}`)
    },
    getVideos: (id)=>{
        return axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_key}&language=en-US`)
    },
    getTopRatedMovies: (page)=> {
        return axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_key}&language=en-US&page=${page}`)
    },
    getUpComingMovies: (page) => {
        return axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_key}&language=en-US&page=${page}`)
    },
    getSearch: (search) => {
        return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_key}&query=${search}`)
    }
}

export default Data