import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import CoinDetailsPage from "../../pages/CoinDetailsPage";
import MainLayout from "../../pages/Layout";

function Routing(){
    return(
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />{/* this navbbar is the shared ui we want to have across pages*/}
                <Route path="/details/:coinId" element={<CoinDetailsPage />}/> {/*the actual page which will be rendered along with navbar*/}
                {/* this will render at the place of outlet */}
            </Route> 
        </Routes>
    );
}

export default Routing;