import { useState } from "react";
import Banner from "../components/Banner/Banner";
import CoinTable from "../components/CoinTable/CoinTable";
import Navbar from "../components/Navbar/Navbar";

function Home() {

  //const [currency, setCurrency] = useState('usd');

  return (
    <>
      <Navbar />
      <Banner />
      <CoinTable />
    </>
  )
}

export default Home;
