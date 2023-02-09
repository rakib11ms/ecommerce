import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// import weblogo from './images/weblogo.png'
// import web from '../../images/weblogo.png'
import weblogo from "../images/weblogo.png";
import supportlogo from "../images/support.png";
import van from "../images/van.png";
import refund from "../images/refund.png";
import premium from "../images/premium.png";
import hero from "../images/hero.png";
import hero2 from "../images/hero2.png";
import model from "../images/model.jpg";
import singlePanjabi from "../images/singlePanjabi.jpg";

import React, { Component, useRef, useState } from "react";
import Slider from "react-slick";
import img1 from "../images/img-Tshirt.jpg";
import img2 from "../images/img-panjabi.jpg";
import img3 from "../images/img-Women-dress.jpg";
import img4 from "../images/img-Women-sandle.jpg";
import img5 from "../images/img-Tshirt2.jpg";
import img6 from "../images/img-neckless.jpg";
import img7 from "../images/img-Women-Dress2.jpg";
import img8 from "../images/white Tshirt.jpg";
import img9 from "../images/img-panjabi-white.jpg";
import img10 from "../images/img-panjabi-pink.jpg";
import img11 from "../images/white Tshirt.jpg";
import img12 from "../images/white Tshirt.jpg";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HeroSlider from "./HeroSlider";




function Home() {




    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        overflowX: "hidden",
        arrows: false,


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // client review
    var clientReview = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };



    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,


        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,

            // partialVisible: true,
            // partialVisibilityGutter: 32,


        }
    };


    const responsiveSingleDemoImageCards = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        }
    }

    return (
        <>

            <Navbar></Navbar>



            <HeroSlider></HeroSlider>

            <section className="after-hero-image my-4">
                <div className="container">
                    <div className="after-hero-image-card">
                        <div className="after-heo-image-cards border">
                            <div className="after-hero-image-card-logos">
                                <img src={van} className="after-hero-image-card-logo" />
                            </div>
                            <div className="">
                                <p className="mt-2 py-0 my-1">FASTEST SHIPPING COUNTRYSIDE</p>
                            </div>
                        </div>

                        <div className="after-heo-image-cards border">
                            <div className="after-hero-image-card-logos">
                                <img src={refund} className="after-hero-image-card-logo" />
                            </div>
                            <div className="">
                                <p className="mt-2 py-0 my-1">EASY RETURN POLICY</p>
                            </div>
                        </div>

                        <div className="after-heo-image-cards border">
                            <div className="after-hero-image-card-logos">
                                <img src={supportlogo} className="after-hero-image-card-logo" />
                            </div>
                            <div className="">
                                <p className="mt-2 py-0 my-1">ONLINE SUPPORT 24/7</p>
                            </div>
                        </div>

                        <div className="after-heo-image-cards border">
                            <div className="after-hero-image-card-logos">
                                <img src={premium} className="after-hero-image-card-logo" />
                            </div>
                            <div className="">
                                <p className="mt-2 py-0 my-1">PREMEMIUM QUALITY PRODUCTS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ashiq Code  */}
            <section className="my-4">
                {/* Browse Our Catagories */}
                <div className="broswe-our-cat-heading my-3 px-5 container">
                    <div className="Name-tag-div1">
                        <div className="Name-tag-div2">
                            <h2 className="Name-tag fs-4">BROWSE OUR CATEGORIES</h2>
                        </div>
                    </div>
                    <div className="check-1">
                        <div className="check-2 check5"></div>
                    </div>

                </div>

                {/* <div className="d-flex my-3"> */}

                <Slider {...settings} className="slider1">
                    <div className="browse-cat-single-item ">
                        <img src={img1} />
                        <div className="browse-cat-single-inside-btn ">
                            <button type="button" className="btn btn-light text-dark btn-block w-100"><h6 className="  fs-4 my-0 browse-category-card-font py-0"> JACKET</h6></button>

                        </div>

                    </div>
                    <div className="browse-cat-single-item">
                        <img src={img2} />
                        <div className="browse-cat-single-inside-btn ">
                            <button type="button" className="btn btn-light text-dark btn-block w-100"><h6 className="  fs-4 my-0 browse-category-card-font py-0"> LUXARY PANJABI</h6></button>

                        </div>
                    </div>
                    <div className="browse-cat-single-item">
                        <img src={img3} />
                        <div className="browse-cat-single-inside-btn ">
                            <button type="button" className="btn btn-light text-dark btn-block w-100"><h6 className="  fs-4 my-0 browse-category-card-font py-0"> PREMIMUM T-SHIRT</h6></button>

                        </div>
                    </div>
                    <div className="browse-cat-single-item">
                        <img src={img4} />
                        <div className="browse-cat-single-inside-btn ">
                            <button type="button" className="btn btn-light text-dark btn-block w-100"><h6 className="  fs-4 my-0 browse-category-card-font py-0"> LUXARY PANJABI</h6></button>

                        </div>
                    </div>
                    <div className="browse-cat-single-item">
                        <img src={img5} />
                        <div className="browse-cat-single-inside-btn ">
                            <button type="button" className="btn btn-light text-dark btn-block w-100"><h6 className="  fs-4 my-0 browse-category-card-font py-0"> LUXARY PANJABI</h6></button>

                        </div>
                    </div>
                    <div className="browse-cat-single-item">
                        <img src={img6} />
                        <div className="browse-cat-single-inside-btn ">
                            <button type="button" className="btn btn-light text-dark btn-block w-100"><h6 className="  fs-4 my-0 browse-category-card-font py-0"> JACKET</h6></button>

                        </div>

                    </div>
                    <div className="browse-cat-single-item">
                        <img src={img7} />
                        <div className="browse-cat-single-inside-btn ">
                            <button type="button" className="btn btn-light text-dark btn-block w-100"><h6 className="  fs-4 my-0 browse-category-card-font py-0"> JACKET</h6></button>

                        </div>

                    </div>
                    <div className="browse-cat-single-item">
                        <img src={img6} />
                        <div className="browse-cat-single-inside-btn ">
                            <button type="button" className="btn btn-light text-dark btn-block w-100"><h6 className="  fs-4 my-0 browse-category-card-font py-0"> JACKET</h6></button>

                        </div>

                    </div>

                </Slider>

            </section>

            {/* </div> */}




            <section className="">

                <div className="broswe-our-cat-heading my-3 container px-5 ">
                    <div className="Name-tag-div1">
                        <div className="Name-tag-div2">
                            <h2 className="Name-tag fs-4">BEST SELLING PRODUCTS</h2>
                        </div>
                    </div>
                    <div className="check-1">
                        <div className="check-2 check5"></div>
                    </div>

                </div>

                <div className="best-selling-products-images-wrapper my-2 container px-0 ">



                    <Carousel responsive={responsive}
                        swipeable={true}
                        draggable={true}
                        autoPlay={true}
                        partialVisible={true}
                        autoPlaySpeed={3000}
                        transitionDuration={500}

                    >
                        <div class="best-selling-prouct-items pb-2 my-3  ">
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
                                    <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1 "> Add to Cart</button>
                                </div>
                            </div>

                        </div>

                        <div class="best-selling-prouct-items pb-2 my-3 ">
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
                                    <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1"> Add to Cart</button>
                                </div>
                            </div>

                        </div>

                        <div class="best-selling-prouct-items pb-2 my-3 ">
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
                                    <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1"> Add to Cart</button>
                                </div>
                            </div>

                        </div>

                        <div class="best-selling-prouct-items pb-2 my-3">
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
                                    <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1"> Add to Cart</button>
                                </div>
                            </div>

                        </div>

                        <div class="best-selling-prouct-items pb-2 my-3">
                            <div className="best-selling-prouct-items-top">
                                <img src={img2} class="card-img-top" alt="..." />
                                <div className="card-section-without-color-image  rounded ">
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
                                    <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1"> Add to Cart</button>
                                </div>
                            </div>

                        </div>

                    </Carousel>

                </div>




            </section>


            <section className="my-4">

                <div className="broswe-our-cat-heading my-3 container px-5">
                    <div className="Name-tag-div1">
                        <div className="Name-tag-div2">
                            <h2 className="Name-tag fs-4">NEW ARRIVAL PRODUCTS</h2>
                        </div>
                    </div>
                    <div className="check-1">
                        <div className="check-2 check5"></div>
                    </div>

                </div>

                <div className="best-selling-products-images-wrapper my-2 px-0 container">

                    <Carousel responsive={responsive}
                        swipeable={true}
                        draggable={true}
                        autoPlay={true}
                        partialVisible={true}
                        autoPlaySpeed={3000}
                        transitionDuration={500}
                    >
                        <div class="best-selling-prouct-items pb-2 my-3 ">
                            <div className="best-selling-prouct-items-top">
                                <img src="https://www.grameenuniqlo.com/pub/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/e/i/eid_2nd_period_website_tops-05.jpg" class="card-img-top" alt="..." />
                                <div className="card-section-without-color-image rounded py-0 px-1 ">

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
                                    <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1 "> Add to Cart</button>
                                </div>
                            </div>

                        </div>

                        <div class="best-selling-prouct-items pb-2 my-3">
                            <div className="best-selling-prouct-items-top">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc8HdHzsFO2eJctae3qs2_JjWRm0eJWUsXFIk6PXnF1sEyXboZgr8B7jmYjNkbLxlJnm0&usqp=CAU" class="card-img-top" alt="..." />
                                <div className="card-section-without-color-image rounded py-0 px-1">
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
                                    <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1"> Add to Cart</button>
                                </div>
                            </div>

                        </div>

                        <div class="best-selling-prouct-items pb-2 my-3">
                            <div className="best-selling-prouct-items-top">
                                <img src="https://www.grameenuniqlo.com/pub/media/catalog/product/cache/image/900x900/e9c3970ab036de70892d86c6d221abfe/w/e/web-7_3__1.jpg" class="card-img-top" alt="..." />
                                <div className="card-section-without-color-image  rounded ">
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
                                    <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1"> Add to Cart</button>
                                </div>
                            </div>

                        </div>

                        <div class="best-selling-prouct-items pb-2 my-3">
                            <div className="best-selling-prouct-items-top">
                                <img src="https://www.grameenuniqlo.com/pub/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/e/_/e__1_1.jpg" class="card-img-top" alt="..." />
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
                                    <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1"> Add to Cart</button>
                                </div>
                            </div>

                        </div>

                        <div class="best-selling-prouct-items pb-2 my-3">
                            <div className="best-selling-prouct-items-top">
                                <img src={img2} class="card-img-top" alt="..." />
                                <div className="card-section-without-color-image  rounded ">
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
                                    <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1"> Add to Cart</button>
                                </div>
                            </div>

                        </div>

                    </Carousel>



                </div>




            </section>


            <section className="iframe-video-section  py-3 ">

                <div className="container i-frame-video-section-height py-3 ">
                    <div className="d-flex justify-content-between h-100 iframe-wrapper">
                        <div className="flex-grow-1  w-50">
                            <h5 className="iframe-video-titles">ELITE PANJABI</h5>
                            <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/TfwMSbmZznM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="ms-4 flex-grow-2 w-50">
                            <h5 className="iframe-video-titles">PASSION POLO</h5>

                            <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/t3C75jXDP7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                        </div>
                    </div>
                </div>

            </section>


            <section className="home-page-hero-slider-2 mx-0  ">
                <div class="container  my-4 px-0 w-100 ">
                    <div id="carouselExampleIndicators1" class="carousel slide carousal-height2" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" class=" mx-2 active dot1" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" class=" mx-2 dot2" aria-label="Slide 2 "></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" class=" mx-2 dot3" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner carousal-height2">
                            <div class="carousel-item active">
                                <img src={hero} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={hero2} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={hero} class="d-block w-100" alt="..." />
                            </div>
                        </div>

                    </div>
                </div>

            </section>


            <section className="card-section-without-color  ">
                <div className="container px-0">
                    <div className="best-selling-products-images-wrapper my-2 px-0 container">

                        <Carousel responsive={responsive}
                            swipeable={true}
                            draggable={true}
                            autoPlay={true}
                            partialVisible={true}
                            autoPlaySpeed={3000}
                            transitionDuration={500}
                        >
                            <div class="best-selling-prouct-items pb-2 my-3">
                                <div className="best-selling-prouct-items-top">
                                    <img src="http://www.observerbd.com/2018/02/24/1519490624.jpg" class="card-img-top" alt="..." />
                                    <div className="card-section-without-color-image rounded py-0 px-1">

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
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1 "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>

                            <div class="best-selling-prouct-items pb-2 my-3">
                                <div className="best-selling-prouct-items-top">
                                    <img src="https://www.grameenuniqlo.com/pub/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/w/e/website_product-3-17.jpg" class="card-img-top" alt="..." />
                                    <div className="card-section-without-color-image  rounded ">
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
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1"> Add to Cart</button>
                                    </div>
                                </div>

                            </div>

                            <div class="best-selling-prouct-items pb-2 my-3">
                                <div className="best-selling-prouct-items-top">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVKJRz2B9bS2FMCVABiffLDxrN5vDWqo4avLfFZLHDuQYUBV7LdbbRTWeR5NSzV6n-uPc&usqp=CAU" class="card-img-top" alt="..." />
                                    <div className="card-section-without-color-image rounded py-0 px-1">
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
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1"> Add to Cart</button>
                                    </div>
                                </div>

                            </div>

                            <div class="best-selling-prouct-items pb-2 my-3">
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
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1"> Add to Cart</button>
                                    </div>
                                </div>

                            </div>

                            <div class="best-selling-prouct-items pb-2 my-3">
                                <div className="best-selling-prouct-items-top">
                                    <img src={img2} class="card-img-top" alt="..." />
                                    <div className="card-section-without-color-image  rounded ">
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
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1"> Add to Cart</button>
                                    </div>
                                </div>

                            </div>

                        </Carousel>


                    </div>
                </div>
            </section>


            <div className="container">

                <section className="image-overlay-about-section my-5  px-0">
                    {/* <div className="row"> */}

                    <div className="img-overlay-full-width-img">
                        <img src="https://www.nogorpolli.com/wp-content/uploads/2018/12/yellow-is-the-most-innovative-clothing-brand-in-bangladesh-nogorpolli-%E0%A6%A8%E0%A6%97%E0%A6%B0-%E0%A6%AA%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A7%80-nogor-polli-apparel-clothing-fashion-store.png"
                        />

                        <div className="img-overlay-content bg-white py-4 text-center px-5">
                            <div className="">
                                <img src={weblogo} className="w-25 " />
                            </div>
                            <div className="contentss my-3 ">
                                <p className="my-1">ChatGPT is not fhe cost of this operation in terms of machine is massive.on in terms of machine is m fhe cost of this operation. </p>
                                <p className="">ChatGPT is not fhe cost of this operation in terms of machine is massive. Google search can crawl the web and update their index all the time but the resources needed to train a LLM as big as GPT-3 are phenomenal. </p>
                            </div>
                        </div>

                        {/* </div> */}
                    </div>
                </section>
            </div>


            <section className="single-demo-images-cards-section container bg-light  px-0">
                <div className="single-demo-image ">
                    <img src={model} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                </div>
                <div className="single-demo-image-cards ">
                    <div className="ps-5">
                        <Carousel responsive={responsiveSingleDemoImageCards}
                            swipeable={true}
                            draggable={true}
                            autoPlay={true}
                            partialVisible={true}
                            autoPlaySpeed={3000}
                            transitionDuration={500}

                        >
                            <div class="single-demo-image-card-items pb-2 my-3">
                                <div className="single-demo-image-cards-top">
                                    <img src="https://www.grameenuniqlo.com/pub/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/p/r/product_photo-04.jpg" class="card-img-top" alt="..." />
                                    <div className="card-items-overlay-content">


                                        <div className="star-icon">
                                            <div className="d-flex align-items-center px-2 star-review-overlay rounded-1  py-1 my-0">
                                                <div className=" ">
                                                    <h6 className="my-0">4.9</h6>
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

                                </div>
                                <div className="single-demo-image-cards-image-content px-2 " >
                                    <p className="fs-6 text-secondary my-0 mt-2">Premimum Quality T-Shirt </p>
                                    <div className="d-flex align-items-center  ">
                                        <h6 className="fs-5">TK 250</h6>
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1 "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>
                            <div class="single-demo-image-card-items pb-2 my-3">
                                <div className="single-demo-image-cards-top">
                                    <img src="https://www.grameenuniqlo.com/pub/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/7/d/7days-product-for-web_women7.jpg" class="card-img-top" alt="..." />
                                    <div className="card-items-overlay-content">


                                        <div className="star-icon">
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

                                </div>
                                <div className="single-demo-image-cards-image-content px-2 " >
                                    <p className="fs-6 text-secondary my-0 mt-2">Premimum Quality T-Shirt For man</p>
                                    <div className="d-flex align-items-center  ">
                                        <h6 className="fs-5">TK 250</h6>
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1 "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>
                            <div class="single-demo-image-card-items pb-2 my-3">
                                <div className="single-demo-image-cards-top">
                                    <img src="https://www.grameenuniqlo.com/pub/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/p/u/puja_web-05.jpg" class="card-img-top" alt="..." />
                                    <div className="card-items-overlay-content">


                                        <div className="star-icon">
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

                                </div>
                                <div className="single-demo-image-cards-image-content px-2 " >
                                    <p className="fs-6 text-secondary my-0 mt-2">Premimum Quality T-Shirt For man</p>
                                    <div className="d-flex align-items-center  ">
                                        <h6 className="fs-5">TK 250</h6>
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1 "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>
                            <div class="single-demo-image-card-items pb-2 my-3">
                                <div className="single-demo-image-cards-top">
                                    <img src={img2} class="card-img-top" alt="..." />
                                    <div className="card-items-overlay-content">

                                        <div className="star-icon">
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

                                </div>
                                <div className="single-demo-image-cards-image-content px-2 " >
                                    <p className="fs-6 text-secondary my-0 mt-2">Premimum Quality T-Shirt For man</p>
                                    <div className="d-flex align-items-center  ">
                                        <h6 className="fs-5">TK 250</h6>
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1 "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>




                        </Carousel>

                    </div>
                </div>
            </section>


            <section className="single-demo-images-cards-section container bg-light px-0 my-5">
                <div className="single-demo-image order-md-1 order-sm-0">
                    <img src="http://sc04.alicdn.com/kf/H5ce1148978504006876ebfc7ecd6eeb4u.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                </div>
                <div className="single-demo-image-cards ">
                    <div className="ps-5">
                        <Carousel responsive={responsiveSingleDemoImageCards}
                            swipeable={true}
                            draggable={true}
                            autoPlay={true}
                            partialVisible={true}
                            autoPlaySpeed={3000}
                            transitionDuration={500}

                        >
                            <div class="single-demo-image-card-items pb-2 my-3">
                                <div className="single-demo-image-cards-top">
                                    <img src="https://s.alicdn.com/@sc04/kf/H31b3c59519a84c0eb7d1f581d5c87f52A.jpg_300x300.jpg" class="card-img-top" alt="..." />
                                    <div className="card-items-overlay-content">


                                        <div className="star-icon">
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

                                </div>
                                <div className="single-demo-image-cards-image-content px-2 " >
                                    <p className="fs-6 text-secondary my-0 mt-2">Premimum Quality T-Shirt For man</p>
                                    <div className="d-flex align-items-center  ">
                                        <h6 className="fs-5">TK 250</h6>
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1 "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>
                            <div class="single-demo-image-card-items pb-2 my-3">
                                <div className="single-demo-image-cards-top">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6fGHgrhPXnEPjJtQkHPJFv-znXdoolf9_5ocvkzOBOK6flvg-jn20ZJC8FASuQfghGAQ&usqp=CAU" class="card-img-top" alt="..." />
                                    <div className="card-items-overlay-content">


                                        <div className="star-icon">
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

                                </div>
                                <div className="single-demo-image-cards-image-content px-2 " >
                                    <p className="fs-6 text-secondary my-0 mt-2">Premimum Quality T-Shirt For man</p>
                                    <div className="d-flex align-items-center  ">
                                        <h6 className="fs-5">TK 250</h6>
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1 "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>
                            <div class="single-demo-image-card-items pb-2 my-3">
                                <div className="single-demo-image-cards-top">
                                    <img src="http://sc04.alicdn.com/kf/H5748910f0baf481fa0f1b36ada783d1fY.jpg" class="card-img-top" alt="..." />
                                    <div className="card-items-overlay-content">


                                        <div className="star-icon">
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

                                </div>
                                <div className="single-demo-image-cards-image-content px-2 " >
                                    <p className="fs-6 text-secondary my-0 mt-2">Premimum Quality T-Shirt For man</p>
                                    <div className="d-flex align-items-center  ">
                                        <h6 className="fs-5">TK 250</h6>
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1 "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>
                            <div class="single-demo-image-card-items pb-2 my-3">
                                <div className="single-demo-image-cards-top">
                                    <img src="https://m.media-amazon.com/images/I/517K22SK9HL._SY445_SX342_QL70_ML2_.jpg" class="card-img-top" alt="..." />
                                    <div className="card-items-overlay-content">

                                        <div className="star-icon">
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

                                </div>
                                <div className="single-demo-image-cards-image-content px-2 " >
                                    <p className="fs-6 text-secondary my-0 mt-2">Premimum Quality T-Shirt For man</p>
                                    <div className="d-flex align-items-center  ">
                                        <h6 className="fs-5">TK 250</h6>
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1 "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>


                            <div class="single-demo-image-card-items pb-2 my-3">
                                <div className="single-demo-image-cards-top">
                                    <img src="http://sc04.alicdn.com/kf/H5748910f0baf481fa0f1b36ada783d1fY.jpg" class="card-img-top" alt="..." />
                                    <div className="card-items-overlay-content">


                                        <div className="star-icon">
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

                                </div>
                                <div className="single-demo-image-cards-image-content px-2 " >
                                    <p className="fs-6 text-secondary my-0 mt-2">Premimum Quality T-Shirt For man</p>
                                    <div className="d-flex align-items-center  ">
                                        <h6 className="fs-5">TK 250</h6>
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1 "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>

                        </Carousel>



                    </div>
                </div>
            </section>

            <section className="single-demo-images-cards-section container bg-light px-0">
                <div className="single-demo-image ">
                    <img src={singlePanjabi} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                </div>
                <div className="single-demo-image-cards ">
                    <div className="ps-5">

                        <Carousel responsive={responsiveSingleDemoImageCards}
                            swipeable={true}
                            draggable={true}
                            autoPlay={true}
                            partialVisible={true}
                            autoPlaySpeed={3000}
                            transitionDuration={500} >
                            <div class="single-demo-image-card-items pb-2 my-3">
                                <div className="single-demo-image-cards-top">
                                    <img src="https://www.grameenuniqlo.com/pub/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/p/r/product_photo-04.jpg" class="card-img-top" alt="..." />
                                    <div className="card-items-overlay-content">


                                        <div className="star-icon">
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

                                </div>
                                <div className="single-demo-image-cards-image-content px-2 " >
                                    <p className="fs-6 text-secondary my-0 mt-2">Premimum Quality T-Shirt For man</p>
                                    <div className="d-flex align-items-center  ">
                                        <h6 className="fs-5">TK 250</h6>
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1 "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>
                            <div class="single-demo-image-card-items pb-2 my-3">
                                <div className="single-demo-image-cards-top">
                                    <img src="https://www.grameenuniqlo.com/pub/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/7/d/7days-product-for-web_women7.jpg" class="card-img-top" alt="..." />
                                    <div className="card-items-overlay-content">


                                        <div className="star-icon">
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

                                </div>
                                <div className="single-demo-image-cards-image-content px-2 " >
                                    <p className="fs-6 text-secondary my-0 mt-2">Premimum Quality T-Shirt For man</p>
                                    <div className="d-flex align-items-center  ">
                                        <h6 className="fs-5">TK 250</h6>
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1 "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>
                            <div class="single-demo-image-card-items pb-2 my-3">
                                <div className="single-demo-image-cards-top">
                                    <img src="https://www.grameenuniqlo.com/pub/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/p/u/puja_web-05.jpg" class="card-img-top" alt="..." />
                                    <div className="card-items-overlay-content">


                                        <div className="star-icon">
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

                                </div>
                                <div className="single-demo-image-cards-image-content px-2 " >
                                    <p className="fs-6 text-secondary my-0 mt-2">Premimum Quality T-Shirt For man</p>
                                    <div className="d-flex align-items-center  ">
                                        <h6 className="fs-5">TK 250</h6>
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1 "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>
                            <div class="single-demo-image-card-items pb-2 my-3">
                                <div className="single-demo-image-cards-top">
                                    <img src={img2} class="card-img-top" alt="..." />
                                    <div className="card-items-overlay-content">

                                        <div className="star-icon">
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

                                </div>
                                <div className="single-demo-image-cards-image-content px-2 " >
                                    <p className="fs-6 text-secondary my-0 mt-2">Premimum Quality T-Shirt For man</p>
                                    <div className="d-flex align-items-center  ">
                                        <h6 className="fs-5">TK 250</h6>
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1 "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>




                        </Carousel>

                    </div>
                </div>
            </section>

            <section className="single-demo-images-cards-section container bg-light mt-5 px-0">
                <div className="single-demo-image order-md-1 order-sm-0">
                    <img src="https://static-01.daraz.com.bd/p/3569b570fac7837cf27c31581dd94f39.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                </div>
                <div className="single-demo-image-cards ">
                    <div className="ps-5">

                        <Carousel responsive={responsiveSingleDemoImageCards} swipeable={true}
                            draggable={true}
                            autoPlay={true}
                            partialVisible={true}
                            autoPlaySpeed={3000}
                            transitionDuration={500}>
                            <div class="single-demo-image-card-items pb-2 my-3">
                                <div className="single-demo-image-cards-top">
                                    <img src="https://www.grameenuniqlo.com/pub/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/p/r/product_photo-04.jpg" class="card-img-top" alt="..." />
                                    <div className="card-items-overlay-content">


                                        <div className="star-icon">
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

                                </div>
                                <div className="single-demo-image-cards-image-content px-2 " >
                                    <p className="fs-6 text-secondary my-0 mt-2">Premimum Quality T-Shirt For man</p>
                                    <div className="d-flex align-items-center  ">
                                        <h6 className="fs-5">TK 250</h6>
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1 "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>
                            <div class="single-demo-image-card-items pb-2 my-3">
                                <div className="single-demo-image-cards-top">
                                    <img src="https://www.grameenuniqlo.com/pub/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/7/d/7days-product-for-web_women7.jpg" class="card-img-top" alt="..." />
                                    <div className="card-items-overlay-content">


                                        <div className="star-icon">
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

                                </div>
                                <div className="single-demo-image-cards-image-content px-2 " >
                                    <p className="fs-6 text-secondary my-0 mt-2">Premimum Quality T-Shirt For man</p>
                                    <div className="d-flex align-items-center  ">
                                        <h6 className="fs-5">TK 250</h6>
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1 "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>
                            <div class="single-demo-image-card-items pb-2 my-3">
                                <div className="single-demo-image-cards-top">
                                    <img src="https://www.grameenuniqlo.com/pub/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/p/u/puja_web-05.jpg" class="card-img-top" alt="..." />
                                    <div className="card-items-overlay-content">


                                        <div className="star-icon">
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

                                </div>
                                <div className="single-demo-image-cards-image-content px-2 " >
                                    <p className="fs-6 text-secondary my-0 mt-2">Premimum Quality T-Shirt For man</p>
                                    <div className="d-flex align-items-center  ">
                                        <h6 className="fs-5">TK 250</h6>
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1 "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>
                            <div class="single-demo-image-card-items pb-2 my-3">
                                <div className="single-demo-image-cards-top">
                                    <img src={img2} class="card-img-top" alt="..." />
                                    <div className="card-items-overlay-content">

                                        <div className="star-icon">
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

                                </div>
                                <div className="single-demo-image-cards-image-content px-2 " >
                                    <p className="fs-6 text-secondary my-0 mt-2">Premimum Quality T-Shirt For man</p>
                                    <div className="d-flex align-items-center  ">
                                        <h6 className="fs-5">TK 250</h6>
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light text-dark me-1 "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>




                        </Carousel>
                    </div>
                </div>
            </section>

            <section className="customer-review-section">
                <div className="container">
                    <div className="customer-review-section-wrapper">
                        <div className="customer-review-section-heading ">
                            <h4 className="customer-review-text">Customers Review</h4>
                            <span className="customer-think-text text-secondary">What are customers think about us</span>
                        </div>
                        <div className="customer-review-item-wrapper">
                            <Slider {...clientReview} className="client-review-slider">


                                <div className="customer-review-item ">
                                    <div className="customer-review-item-top">

                                        <div className="client-image">
                                            <img src="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg" />
                                            <div className="quotation-icon">
                                                <i class="fa fa-quote-left fa-2x text-secondary" aria-hidden="true"></i>

                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="d-flex align-items-center">
                                                <h5 className="text-secondary mt-2 me-1">5</h5>
                                                <h6 className="my-0  "><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                                <h6 className="my-0 "><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                                <h6 className="my-0 "><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                                <h6 className="my-0 "><i class="fa-solid fa-star text-warning star-icon"></i></h6>


                                            </div>
                                        </div>
                                    </div>

                                    <div className="customer-review-content ">
                                        <h5 className="customer-review-name ">Kabir Khan</h5>
                                        <p className="customer-review-para text-secondary"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unk</p>

                                    </div>
                                </div>
                                <div className="customer-review-item ">
                                    <div className="customer-review-item-top">

                                        <div className="client-image">
                                            <img src="https://www.shutterstock.com/image-photo/pretty-smiling-joyfully-female-fair-260nw-776697943.jpg" />
                                            <div className="quotation-icon">
                                                <i class="fa fa-quote-left fa-2x text-secondary" aria-hidden="true"></i>

                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="d-flex align-items-center">
                                                <h5 className="text-secondary mt-2 me-1">4</h5>
                                                <h6 className="my-0  "><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                                <h6 className="my-0 "><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                                <h6 className="my-0 "><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                                <h6 className="my-0 "><i class="fa-solid fa-star text-warning star-icon"></i></h6>


                                            </div>
                                        </div>
                                    </div>

                                    <div className="customer-review-content ">
                                        <h5 className="customer-review-name ">Sarah Khan</h5>
                                        <p className="customer-review-para text-secondary">Lorem Ipsum is simply dummy text of . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unk</p>

                                    </div>
                                </div>
                                <div className="customer-review-item ">
                                    <div className="customer-review-item-top">

                                        <div className="client-image">
                                            <img src="https://www.shutterstock.com/image-photo/smiling-friendly-handsome-young-male-260nw-189402968.jpg" />
                                            <div className="quotation-icon">
                                                <i class="fa fa-quote-left fa-2x text-secondary" aria-hidden="true"></i>

                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="d-flex align-items-center">
                                                <h5 className="text-secondary mt-2 me-1">5</h5>
                                                <h6 className="my-0 ms-1"><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                                <h6 className="my-0 "><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                                <h6 className="my-0 "><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                                <h6 className="my-0 "><i class="fa-solid fa-star text-warning star-icon"></i></h6>


                                            </div>
                                        </div>
                                    </div>

                                    <div className="customer-review-content ">
                                        <h5 className="customer-review-name ">Ratul Hasan</h5>
                                        <p className="customer-review-para text-secondary">Lorem Ipsum is simply dummy text of . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unk</p>

                                    </div>
                                </div>
                                <div className="customer-review-item ">
                                    <div className="customer-review-item-top">

                                        <div className="client-image">
                                            <img src="https://www.shutterstock.com/image-photo/pretty-smiling-joyfully-female-fair-260nw-776697943.jpg" />
                                            <div className="quotation-icon">
                                                <i class="fa fa-quote-left fa-2x text-secondary" aria-hidden="true"></i>

                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="d-flex align-items-center">
                                                <h5 className="text-secondary mt-2 me-1">4</h5>
                                                <h6 className="my-0  "><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                                <h6 className="my-0 "><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                                <h6 className="my-0 "><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                                <h6 className="my-0 "><i class="fa-solid fa-star text-warning star-icon"></i></h6>


                                            </div>
                                        </div>
                                    </div>

                                    <div className="customer-review-content ">
                                        <h5 className="customer-review-name ">Sarah Khan</h5>
                                        <p className="customer-review-para text-secondary">Lorem Ipsum is simply dummy text of . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unk</p>

                                    </div>
                                </div>
                                <div className="customer-review-item ">
                                    <div className="customer-review-item-top">

                                        <div className="client-image">
                                            <img src="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg" />
                                            <div className="quotation-icon">
                                                <i class="fa fa-quote-left fa-2x text-secondary" aria-hidden="true"></i>

                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="d-flex align-items-center">
                                                <h5 className="text-secondary mt-2 me-1">5</h5>
                                                <h6 className="my-0 ms-1"><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                                <h6 className="my-0 "><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                                <h6 className="my-0 "><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                                <h6 className="my-0 "><i class="fa-solid fa-star text-warning star-icon"></i></h6>


                                            </div>
                                        </div>
                                    </div>

                                    <div className="customer-review-content ">
                                        <h5 className="customer-review-name ">Emica De Suza</h5>
                                        <p className="customer-review-para text-secondary">Lorem Ipsum is simply dummy text of . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unk</p>

                                    </div>
                                </div>
                                <div className="customer-review-item ">
                                    <div className="customer-review-item-top">

                                        <div className="client-image">
                                            <img src="https://www.shutterstock.com/image-photo/pretty-smiling-joyfully-female-fair-260nw-776697943.jpg" />
                                            <div className="quotation-icon">
                                                <i class="fa fa-quote-left fa-2x text-secondary" aria-hidden="true"></i>

                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="d-flex align-items-center">
                                                <h5 className="text-secondary mt-2 me-1">4</h5>
                                                <h6 className="my-0  "><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                                <h6 className="my-0 "><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                                <h6 className="my-0 "><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                                <h6 className="my-0 "><i class="fa-solid fa-star text-warning star-icon"></i></h6>


                                            </div>
                                        </div>
                                    </div>

                                    <div className="customer-review-content ">
                                        <h5 className="customer-review-name ">Sarah Khan</h5>
                                        <p className="customer-review-para text-secondary">Lorem Ipsum is simply dummy text of . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unk</p>

                                    </div>
                                </div>
                                <div className="customer-review-item ">
                                    <div className="customer-review-item-top">

                                        <div className="client-image">
                                            <img src="https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg=" />
                                            <div className="quotation-icon">
                                                <i class="fa fa-quote-left fa-2x text-secondary" aria-hidden="true"></i>

                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="d-flex align-items-center">
                                                <h5 className="text-secondary mt-2 me-1">5</h5>
                                                <h6 className="my-0 ms-1"><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                                <h6 className="my-0 "><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                                <h6 className="my-0 "><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                                <h6 className="my-0 "><i class="fa-solid fa-star text-warning star-icon"></i></h6>


                                            </div>
                                        </div>
                                    </div>

                                    <div className="customer-review-content ">
                                        <h5 className="customer-review-name ">Kabir Khan</h5>
                                        <p className="customer-review-para text-secondary">Lorem Ipsum is simply dummy text of . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unk</p>

                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>








            <section className="newsletter-section container rounded-3  py-5 mt-5 px-5">

                <div className="newsletter-section-wrapper pt-3 ">
                    <div className="newsletter-sec1">
                        <h2 className="join-our-news-text  ">Join Our Newsletter To Get Offers</h2>
                        <p className="newsletter-sub">Subscribe our news letter and updated</p>
                    </div>
                    <div className="newsletter-sec2 d-flex flex-grow-1  justify-content-end">
                        <input type="text" class="form-control me-3 border-secondary border-2 " placeholder="Enter your email"></input>

                        <button className="btn btn-secondary px-4 py-2">Subscribe</button>
                    </div>
                </div>


            </section>



            <Footer></Footer>


        </>
    );
}
export default Home;
