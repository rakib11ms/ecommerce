import "../Home/Home.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import React, { Component, useRef, useState } from "react";
import "./ShopCategory.css";
import OutsideClickHandler from 'react-outside-click-handler';


function ShopCategory() {
    const [filterClickStatus, setFilterClickStatus] = useState(false);
    console.log('check', filterClickStatus)

    return (
        <>
            <Navbar></Navbar>

            <div className="container">
                <div className="row ">
                    <div className="slug-url">
                        <span className="text-secondary"> Home/T-shirt/</span> <span className="fw-bold">Premium t-shirt </span>
                    </div>
                    <div className="top-filter-by-search-by-wrapper  mb-3">
                        <div className="">
                            <h5 className="filter-by-text" onClick={() => setFilterClickStatus(!filterClickStatus)}>FILTER BY <i class="fa-solid fa-filter text-warning "></i>
                            </h5>

                            <div className="filter-by-line"></div>
                        </div>
                        <div className="d-flex align-items-center ">
                            <div className="">
                                Sort By:
                            </div>

                            <div className="mx-2">
                                <select class="form-select form-select-sm " aria-label=".form-select-sm example">
                                    <option selected>Default</option>
                                    <option value="1">Latest</option>
                                    <option value="2">Price High to Low</option>
                                    <option value="3">Price Low to High</option>
                                </select>
                            </div>


                        </div>
                    </div>

                    <div className="shop-category-main-wrapper ">



                        <div className="shop-category-sidebar-wrapper overlays">

                            <OutsideClickHandler
                                onOutsideClick={() => {
                                    // alert('You clicked outside of this component!!!');
                                    setFilterClickStatus(false)
                                }}
                            >
                                <div className={filterClickStatus ? 'overlay-contents' : ''}>
                                    <div className="shop-category-color-wrapper mt-2  ">
                                        <div className="">
                                            <h6 className="sidebar-color-text  ">COLOR</h6>
                                            <hr className="mt-2" />
                                            <div className="color-text-bold-line">

                                            </div>
                                        </div>

                                        <div className="d-flex ">
                                            <div className="w-100 custom-scrollbar-left-shopbar">
                                                <div class="form-check d-flex justify-content-between mt-2">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            Black
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>


                                                </div>
                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            Red
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>

                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            Brown
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>

                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            White
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>

                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            Grey
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>
                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            Blue
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>

                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            Pink
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>
                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            White
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>
                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">

                                                            White
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>
                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">

                                                            White
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>
                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">

                                                            White
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>
                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">

                                                            White
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>
                                            </div>




                                        </div>
                                    </div>

                                    <div className="shop-category-color-wrapper my-4  ">
                                        <div className="">
                                            <h6 className="sidebar-color-text  ">PRICE</h6>
                                            <hr className="mt-2" />
                                            <div className="color-text-bold-line">

                                            </div>
                                        </div>

                                        <div className="d-flex ">
                                            <div className="w-100 ">
                                                <div class="form-check d-flex justify-content-between mt-2">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            100 to 300
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>


                                                </div>
                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            301-500
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>

                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            501-1000
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>

                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            1001-2500
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>

                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            2501-3000
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>
                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            2501-3000
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>

                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            2501-3000
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>

                                            </div>




                                        </div>
                                    </div>
                                    <div className="shop-category-color-wrapper my-4  ">
                                        <div className="">
                                            <h6 className="sidebar-color-text  ">SIZE</h6>
                                            <hr className="mt-2" />
                                            <div className="color-text-bold-line">

                                            </div>
                                        </div>

                                        <div className="d-flex ">
                                            <div className="w-100 ">
                                                <div class="form-check d-flex justify-content-between mt-2">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            S
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (21)
                                                    </div>


                                                </div>
                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            M
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (20)
                                                    </div>
                                                </div>

                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            L
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (38)
                                                    </div>
                                                </div>

                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            XL
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (40)
                                                    </div>
                                                </div>

                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            XXL
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>
                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            XXXL
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (29)
                                                    </div>
                                                </div>



                                            </div>




                                        </div>
                                    </div>

                                    <div className="shop-category-color-wrapper  ">
                                        <div className="">
                                            <h6 className="sidebar-color-text  ">CATEGORY</h6>
                                            <hr className="mt-2" />
                                            <div className="color-text-bold-line">

                                            </div>
                                        </div>

                                        <div className="d-flex ">
                                            <div className="w-100 custom-scrollbar-left-shopbar">
                                                <div class="form-check d-flex justify-content-between mt-2">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            Black
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>


                                                </div>
                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            Red
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>

                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            Brown
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>

                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            White
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>

                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            Grey
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>
                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            White
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>

                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            White
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>
                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            White
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>
                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">

                                                            White
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>
                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">

                                                            White
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>
                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">

                                                            White
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>
                                                <div class="form-check d-flex justify-content-between">
                                                    <div className="">


                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">

                                                            White
                                                        </label>
                                                    </div>
                                                    <div className=" ">
                                                        (27)
                                                    </div>
                                                </div>
                                            </div>




                                        </div>
                                    </div>
                                </div>

                            </OutsideClickHandler>

                        </div>


                        <div className="shop-category-right-sidebar-wrapper ">


                            <div class="best-selling-prouct-items  ">
                                <div className="best-selling-prouct-items-top">
                                    <img src="http://www.observerbd.com/2018/02/24/1519490624.jpg" class="card-img-top" alt="..." />
                                    <div className="card-section-without-color-image  rounded  ">

                                        <div className="d-flex align-items-center px-2 star-review-overlay rounded-1  py-1 my-0">
                                            <div className=" ">
                                                <h6 className="my-0">4.6</h6>
                                            </div>
                                            <div className="mx-1 ">
                                                <h6 className="my-0"><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                            </div>

                                            <div className="">

                                                <h6 className="my-0"> <span> | </span> 25</h6>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="best-selling-prouct-items-content px-2 " >
                                    <p className="fs-6 text-secondary my-0 mt-2">Premimum Quality T-Shirt For man</p>
                                    <div className="d-flex align-items-center  ">
                                        <h6 className="fs-5">TK 250</h6>
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill ed bg-light text-dark me-1 "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>

                            <div class="best-selling-prouct-items ">
                                <div className="best-selling-prouct-items-top">
                                    <img src="https://www.grameenuniqlo.com/pub/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/w/e/website_product-3-17.jpg" class="card-img-top" alt="..." />
                                    <div className="card-section-without-color-image  rounded ">
                                        <div className="d-flex align-items-center star-review-overlay rounded-1  px-2  py-1 my-0">
                                            <div className=" ">
                                                <h6 className="my-0">4.6</h6>
                                            </div>
                                            <div className="mx-1 ">
                                                <h6 className="my-0"><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                            </div>

                                            <div className="">

                                                <h6 className="my-0"> <span> | </span> 55</h6>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="best-selling-prouct-items-content px-2 " >
                                    <p className="fs-6 text-secondary my-0 mt-2">Premimum Quality T-Shirt For man</p>
                                    <div className="d-flex align-items-center  ">
                                        <h6 className="fs-5">TK 250</h6>
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill ed bg-light text-dark me-1"> Add to Cart</button>
                                    </div>
                                </div>

                            </div>

                            <div class="best-selling-prouct-items ">
                                <div className="best-selling-prouct-items-top">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVKJRz2B9bS2FMCVABiffLDxrN5vDWqo4avLfFZLHDuQYUBV7LdbbRTWeR5NSzV6n-uPc&usqp=CAU" class="card-img-top" alt="..." />
                                    <div className="card-section-without-color-image  rounded ">
                                        <div className="d-flex align-items-center px-2 star-review-overlay rounded-1  py-1 my-0">
                                            <div className=" ">
                                                <h6 className="my-0">1.6</h6>
                                            </div>
                                            <div className="mx-1 ">
                                                <h6 className="my-0"><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                            </div>

                                            <div className="">

                                                <h6 className="my-0"> <span> | </span> 25</h6>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="best-selling-prouct-items-content px-2 " >
                                    <p className="fs-6 text-secondary my-0 mt-2">Premimum Quality T-Shirt For man</p>
                                    <div className="d-flex align-items-center  ">
                                        <h6 className="fs-5">TK 250</h6>
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill ed bg-light text-dark me-1"> Add to Cart</button>
                                    </div>
                                </div>

                            </div>

                            <div class="best-selling-prouct-items">
                                <div className="best-selling-prouct-items-top">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVHJUgGMXcEixsUET351f9tMhwJh2y4rjKXcG5vmL-chc9F-ccRT36NiIt2yAsIKZO9AQ&usqp=CAU" class="card-img-top" alt="..." />
                                    <div className="card-section-without-color-image star-review-overlay rounded-1 rounded py-0 px-1">

                                    </div>

                                </div>
                                <div className="best-selling-prouct-items-content px-2 " >
                                    <p className="fs-6 text-secondary my-0 mt-2">Premimum Quality T-Shirt For man</p>
                                    <div className="d-flex align-items-center  ">
                                        <h6 className="fs-5">TK 250</h6>
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill ed bg-light text-dark me-1"> Add to Cart</button>
                                    </div>
                                </div>

                            </div>

                            <div class="best-selling-prouct-items ">
                                <div className="best-selling-prouct-items-top">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVKJRz2B9bS2FMCVABiffLDxrN5vDWqo4avLfFZLHDuQYUBV7LdbbRTWeR5NSzV6n-uPc&usqp=CAU" class="card-img-top" alt="..." />
                                    <div className="card-section-without-color-image  rounded ">
                                        <div className="d-flex align-items-center px-2 star-review-overlay rounded-1  py-1 my-0">
                                            <div className=" ">
                                                <h6 className="my-0">1.6</h6>
                                            </div>
                                            <div className="mx-1 ">
                                                <h6 className="my-0"><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                            </div>

                                            <div className="">

                                                <h6 className="my-0"> <span> | </span> 25</h6>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="best-selling-prouct-items-content px-2 " >
                                    <p className="fs-6 text-secondary my-0 mt-2">Premimum Quality T-Shirt For man</p>
                                    <div className="d-flex align-items-center  ">
                                        <h6 className="fs-5">TK 250</h6>
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill ed bg-light text-dark me-1"> Add to Cart</button>
                                    </div>
                                </div>

                            </div>
                            <div class="best-selling-prouct-items">
                                <div className="best-selling-prouct-items-top">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVHJUgGMXcEixsUET351f9tMhwJh2y4rjKXcG5vmL-chc9F-ccRT36NiIt2yAsIKZO9AQ&usqp=CAU" class="card-img-top" alt="..." />
                                    <div className="card-section-without-color-image star-review-overlay rounded-1 rounded py-0 px-1">

                                    </div>

                                </div>
                                <div className="best-selling-prouct-items-content px-2 " >
                                    <p className="fs-6 text-secondary my-0 mt-2">Premimum Quality T-Shirt For man</p>
                                    <div className="d-flex align-items-center  ">
                                        <h6 className="fs-5">TK 250</h6>
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill ed bg-light text-dark me-1"> Add to Cart</button>
                                    </div>
                                </div>

                            </div>

                            <div class="best-selling-prouct-items ">
                                <div className="best-selling-prouct-items-top">
                                    <img src="https://www.grameenuniqlo.com/pub/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/w/e/website_product-3-17.jpg" class="card-img-top" alt="..." />
                                    <div className="card-section-without-color-image  rounded ">
                                        <div className="d-flex align-items-center star-review-overlay rounded-1  px-2  py-1 my-0">
                                            <div className=" ">
                                                <h6 className="my-0">4.6</h6>
                                            </div>
                                            <div className="mx-1 ">
                                                <h6 className="my-0"><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                            </div>

                                            <div className="">

                                                <h6 className="my-0"> <span> | </span> 55</h6>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="best-selling-prouct-items-content px-2 " >
                                    <p className="fs-6 text-secondary my-0 mt-2">Premimum Quality T-Shirt For man</p>
                                    <div className="d-flex align-items-center  ">
                                        <h6 className="fs-5">TK 250</h6>
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill ed bg-light text-dark me-1"> Add to Cart</button>
                                    </div>
                                </div>

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