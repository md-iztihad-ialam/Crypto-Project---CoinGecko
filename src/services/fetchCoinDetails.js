import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinDetails(coinId) {

    try{
        const response = await axiosInstance.get(`/coins/${coinId}`);
        console.log(response);
        return response.data;
    }catch(error){
        console.log(error);
        return null;
    }
}

export default fetchCoinDetails;