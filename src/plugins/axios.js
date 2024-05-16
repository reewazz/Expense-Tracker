import { BASE_URL } from "../config/baseURLS";
import axios from "axios";

const baseAxios = axios.create();
baseAxios.defaults.baseURL = BASE_URL;


// if (isAuthenticated()) {
//     baseAxios.defaults.headers.common.Authorization = `Bearer ${getToken()}`
// }
baseAxios.interceptors.request.use((config)=>{
    return config;
}, (error)=>{
    return Promise.reject(error);
})

baseAxios.interceptors.response.use((response)=>{
    return response.data;
}, (error)=>{
    return Promise.reject(error);
})

export default baseAxios