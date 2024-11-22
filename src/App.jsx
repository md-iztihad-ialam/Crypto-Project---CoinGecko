import { useState } from "react";
import Home from "./pages/Home";
import { CurrencyContext } from "./context/CurrencyContext";

function App() {

  const [currency, setCurrency] = useState('usd');

  return (
    <>
    {/* in value we can pass stateVariables updater function normal function etc. */}
      <CurrencyContext.Provider value={{currency, setCurrency}}>
        <Home />
      </CurrencyContext.Provider>
    </>
  )
}

export default App;
