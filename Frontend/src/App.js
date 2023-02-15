import "./App.css";
import React, { useState, useEffect, Suspense, lazy } from "react";
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import BrowserCatagories from "../src/Pages/BrowserCatagories/BrowserCatagories";
import ContactUs from "./ContactUs/ContactUs";
import ShopCategory from "./ShopCategory/ShopCategory";
import ProductDetails from "./ProductDetails/ProductDetails";
import Checkout from "./Checkout/Checkout";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/shop-category" element={<ShopCategory />}></Route>
        <Route path="/product-details" element={<ProductDetails />}></Route>
        <Route path="/check-out" element={<Checkout />}></Route>
        {/* <BrowserCatagories /> */}
      </Routes>
    </div>
  );
}

export default App;
