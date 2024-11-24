import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinDetails() {

    try{
        const response = await axiosInstance.get(`/coins/${id}`);
        console.log(response);
        return response.data;
    }catch(error){
        console.log(error);
        return null;
    }
}

export default fetchCoinDetails;