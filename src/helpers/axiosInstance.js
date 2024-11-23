import axios from "axios";
import { COINGECKO_API_URL } from "./constant";

const axiosInstance = axios.create({
    baseURL: COINGECKO_API_URL,//starting part of the URL
});

export default axiosInstance;