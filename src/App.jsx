import React, { useState } from "react";


import { GlobalStyle } from "./styles/globalStyles";
import { Normalize } from "styled-normalize";


import Home from "./pages/Home";
import HomeProducts from "./pages/HomeProducts"
import MyContext from "./context/MyContext";

function App() {
  const [showPage, setShowPage] = useState("Login");
  const [cart, setCart] = useState([])
  const autorizacao = localStorage.getItem("autorizacao")

  return (
    <>
      <GlobalStyle />
      <MyContext.Provider value={{ showPage, setShowPage, cart, setCart }}>
        { autorizacao === "liberado" ? <HomeProducts /> : <Home /> }
      </MyContext.Provider>
      <Normalize />
    </>
  );
}

export default App;
