import { useContext, useEffect, useState } from "react";
import fetchCoinData from "../../services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";
import { CurrencyContext } from "../../context/CurrencyContext";

function CoinTable(){

    const {currency} = useContext(CurrencyContext);

    // useEffect(() => {
    //     //console.log("CoinTable component mounted!");
    //     fetchCoinData(1, 'usd');
    // }, []) we have a better way instead to fatching with effect

    const [page, setPage] = useState(1);
    const {data, isLoading, isError, error, isFetching} = useQuery({
        queryKey: ['coins', page, currency],//variables for which callback will be called
        queryFn: () => fetchCoinData(page, currency),
        retry: 2,
        retryDelay: 1000,
        cacheTime: 1000 * 60 * 2,//it will use the cache to immediately update the ui and call the api parallely
        staleTime: 1000 * 60 * 2,//for how long we will consider the data fresh, so the api call won't happen
    });

    // useEffect(() => {
    //     console.log(data);
    // }, [data]);

    console.log(data);

    // if(isLoading){
    //     return <div>Loading...</div>;
    // }
    if(isError){
        return <div>Error: {error.message}</div>;
    }

    return(
        <div className="flex flex-col items-center justify-center gap-5 my-5 w-[80vw] mx-auto">
            <div className="flex items-center justify-center w-full px-2 py-4 font-semibold text-black bg-yellow-400">
                {/* Header of the table */}
                <div className="basis-[35%]">
                    Coin
                </div>

                <div className="basis-[25%]">
                    Price
                </div>

                <div className="basis-[20%]">
                    24h Change
                </div>

                <div className="basis-[20%]">
                    Market Cap
                </div>
            </div>

            <div className="flex flex-col w-[80vw] mx-auto">
                {isLoading && <div>Loading...</div>}
                {data && data.map((coin) => {
                    return(
                        <div key={coin.id} className="flex items-center justify-between w-full px-2 py-4 font-semibold text-white bg-transparent">
                            
                            <div className="flex items-start justify-start gap-3 basis-[35%]">
                                <div className="w-[5rem] h-[5rem]">
                                    <img src={coin.image} className="w-full h-full" />
                                </div>

                                <div className="flex flex-col">
                                    <div className="text-3xl">{coin.name}</div>
                                    <div className="text-xl">{coin.symbol}</div>
                                </div>
                            </div>

                            <div className="basis-[25%]">
                                {coin.current_price}
                            </div>

                            <div className="basis-[20%]">
                                {coin.price_change_24h}
                            </div>

                            <div className="basis-[20%]">
                                {coin.market_cap}
                            </div>
                            
                        </div>

                    );
                })}
            </div>

            <div className="flex items-center justify-center gap-4">
                <button 
                className="text-2xl text-white btn-primary btn-wide btn" 
                onClick={() => setPage(page-1)}
                disabled={page===1}
                >
                    Prev
                </button>
                <button 
                className="text-2xl text-white btn-primary btn-wide btn" 
                onClick={() => setPage(page+1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default CoinTable;