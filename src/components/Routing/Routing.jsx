import { Route, Routes } from "react-router-dom";
import {lazy, Suspense} from "react";
// import Home from "../../pages/Home";
//import CoinDetailsPage from "../../pages/CoinDetailsPage";
import MainLayout from "../../pages/Layout";
import { Facebook } from "react-content-loader";
import PageLoader from "../PageLoader/PageLoader";
import CustomErrorBoundary from "../CustomErrorBoundary/CustomErrorBoundary";

const Home = lazy(() => import("../../pages/Home"));
const CoinDetailsPage = lazy(() => import("../../pages/CoinDetailsPage"));//lazily downloading this page

function Routing(){
    return(
        <CustomErrorBoundary>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={
                        
                        <Suspense fallback={<PageLoader />}>
                            <Home />
                        </Suspense>
                        
                    } />{/* this navbbar is the shared ui we want to have across pages*/}
                    <Route path="/details/:coinId" element={
                        
                        <Suspense fallback={<Facebook />}>
                            <CoinDetailsPage />
                        </Suspense>                    
                        
                    }/> {/*the actual page which will be rendered along with navbar*/}
                    {/* this will render at the place of outlet */}
                </Route> 
            </Routes>
        </CustomErrorBoundary>
    );
}

export default Routing;