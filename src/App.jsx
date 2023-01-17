import React from "react";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "./styles/globalStyles";

import AppRoutes from "./routes";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App;
