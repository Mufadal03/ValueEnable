import axios from "axios"

export default axios.create({
    baseURL:'http://localhost:4000'
    // baseURL:"https://backend-sigma-three.vercel.app/"
})