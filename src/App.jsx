import React from "react";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "./styles/globalStyles";
import { Normalize } from "styled-normalize";

import AppRoutes from "./routes";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Normalize />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App;
