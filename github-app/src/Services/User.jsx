import axios from 'axios'


const userAPI = {
        allUser : () => {
            return axios.get(`https://api.github.com/users?per_page=16`)
        },
        searchUser : (search) => {
            return axios.get(`https://api.github.com/search/users?q=${search}`)
        }
    }


export default userAPI;