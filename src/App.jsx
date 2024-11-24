//import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./components/Routing/Routing";
//import Home from "./pages/Home";
//import { CurrencyContext } from "./context/CurrencyContext";

function App() {

  //const [currency, setCurrency] = useState('usd');

  return (
    <>
    {/* in value we can pass stateVariables updater function normal function etc. */}
      {/* <CurrencyContext.Provider value={{currency, setCurrency}}> */}
        {/* <Navbar /> */}
        <Routing />
      {/* </CurrencyContext.Provider> */}
    </>
  )
}

export default App;
