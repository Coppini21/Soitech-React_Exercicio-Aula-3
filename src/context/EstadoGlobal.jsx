import React, { useState } from "react";
import MyContext from "./MyContext";

export default function EstadoGlobal({ children }) {
  const [cart, setCart] = useState([]);
  const [productDetails, setProductDetails] = useState([]);

  return (
    <MyContext.Provider
      value={{ cart, setCart, productDetails, setProductDetails }}
    >
      {children}
    </MyContext.Provider>
  );
}
