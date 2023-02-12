import "../Home/Home.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import React, { Component, useRef, useState } from "react";
import "./ShopCategory.css";


function ShopCategory() {

    return (
        <>
            <Navbar></Navbar>

            <div className="container">
                <div className="row">
                    <div className="slug-url">
                        <span className="text-secondary"> Home/T-shirt/</span> <span className="fw-bold">Premium t-shirt </span>
                    </div>
                    <div className="top-filter-by-search-by-wrapper">
                        <div className="">
                            <h5 className="filter-by-text">FILTER BY</h5>
                        </div>
                        <div className="d-flex align-items-center ">
                            <div className="">
                                Sort By:
                            </div>

                            <div className="mx-2">
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Default</option>
                                <option value="1">Latest</option>
                                <option value="2">Price High to Low</option>
                                <option value="3">Price Low to High</option>
                            </select>
                            </div>
                    
                           
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>

        </>

    )
}
export default ShopCategory