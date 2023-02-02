import React from "react";
import { Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import HomeProducts from "./pages/HomeProducts";
import Registration from "./pages/Registration";

export default function rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/products" element={<HomeProducts />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
}
