import "./App.css";
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import BrowserCatagories from "../src/Pages/BrowserCatagories/BrowserCatagories";
function App() {
  return (
    <div className="">
    <Routes>


      <Route path="/" element={<Home />}></Route>
      {/* <BrowserCatagories /> */}

    </Routes>
    </div>
  );
}

export default App;
