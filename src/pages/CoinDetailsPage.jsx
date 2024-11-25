import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchCoinDetails from "../services/fetchCoinDetails";
import { useEffect } from "react";
import parse from 'html-react-parser';
import currencyStore from "../state/store";
import PageLoader from "../components/PageLoader/PageLoader";

function CoinDetailsPage(){

    const {coinId} = useParams();
    const {currency} = currencyStore();
    console.log(coinId);
    const { isError, isLoading, data: coin } = useQuery({
        queryKey: ["coin", coinId],
        queryFn: () => fetchCoinDetails(coinId),
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60,
    });

    console.log("data: ", coin);

    // useEffect(() => {
    //     console.log(data);
    // }, [data]);

    if(isLoading){
        return <PageLoader />
    }

    if(isError){
        return <div>Error: Something went wrong!</div>
    }

    return(
        <div className="flex flex-col md:flex-row">{/*on mobile screen direction column, on bigger screen it is row --> mobile first ui*/}

            <div
                className="flex flex-col items-center w-full mt-6 border-r-2 md:w-1/3 md:mt-0-gray-500"
            >
                <img 
                    alt={coin?.name}
                    src={coin?.image?.large}
                    className="mb-5 h-52"
                />

                <h1 className="mb-5 text-4xl font-bold">
                    {coin?.name}
                </h1>

                <p className="w-full px-6 text-justify py4">
                    {parse(coin?.description?.en)}
                </p>

                <div className="flex flex-col w-full md:flex-row md:justify-around">
                    <div className="flex items-center mb-4 md:mb-0">
                        <h2 className="text-xl font-bold">
                            Rank
                        </h2>
                        <span className="ml-3 text-xl">
                            {coin?.market_cap_rank}
                        </span>
                    </div>

                    <div className="flex items-center mb-4 md:mb-0">
                        <h2 className="text-xl font-bold text-yellow-400">
                            Price
                        </h2>
                        <span className="ml-3 text-xl">
                            {coin?.market_data.current_price[currency]}
                        </span>
                    </div>
                </div>
            </div>

            <div className="w-full p-6 md:w-2/3">
                coin information
            </div>

        </div>
    );
}

export default CoinDetailsPage;