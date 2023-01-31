import "./Home.css";
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


function Home() {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        overflowX: "hidden",
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

    // Best Selling
    var style = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
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
            items: 4
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
            items: 1
        }
    };


    const responsiveSingleDemoImageCards = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
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
            items: 1
        }
    }

    return (
        <>
            <div className="container">
                <section className="navbar-section-top mt-2  px-5 ">
                    <div className="search-input-top ">
                        <div class="input-group  ">
                            <span
                                class="input-group-text bg-white text-secondary bg-transparent border-0"
                                id="basic-addon1"
                            >
                                {" "}
                                <i className="fa fa-search text-dark"> </i>
                            </span>
                            <input
                                type="text"
                                class="form-control bg-transparent border-0"
                                placeholder="Search Products..."
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                    </div>

                    <div className="me-5 pe-5">
                        <div className="web-logo">
                            <img src={weblogo} />
                        </div>
                    </div>

                    <div className="right-logos-top text-secondary ">
                        <div className="">
                            <i className="fa fa-phone"></i>
                        </div>
                        <div className="">
                            <i className="far fa-flag"></i>
                        </div>
                        <div className="">
                            <i class="far fa-user"></i>
                        </div>
                    </div>
                </section>
                <hr className="my-2" />

                <section className="navs ">
                    <nav class="navbar navbar-expand-lg navbar-light responsive-nav  ">
                        <div class="container-fluid">
                            <button
                                class="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div
                                class="collapse navbar-collapse "
                                id="navbarSupportedContent"
                            >
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0  ">
                                    <li class="nav-item dropdown ">
                                        <a class="nav-link">HOME</a>
                                    </li>
                                    <li class="nav-item dropdown nav-link-margin">
                                        <a
                                            class="nav-link dropdown-toggle"
                                            href="#"
                                            id="navbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            PANJABI
                                        </a>
                                        <ul class="dropdown-menu mt-2" aria-labelledby="navbarDropdown">
                                            <div className="nav-dropdown-parent-vertical">
                                                <div className="">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            Something else
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                    </li>
                                                </div>

                                                <div className="">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            Something else
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                    </li>
                                                </div>

                                                <div className="">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            Something else
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                    </li>
                                                </div>
                                                <div className="">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            Something else
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                    </li>
                                                </div>
                                                <div className="">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            Something else
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                    </li>
                                                </div>
                                            </div>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown nav-link-margin">
                                        <a
                                            class="nav-link dropdown-toggle"
                                            href="#"
                                            id="navbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            T-SHIRT
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Action
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Another action
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown nav-link-margin">
                                        <a
                                            class="nav-link dropdown-toggle"
                                            href="#"
                                            id="navbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            SHIRT
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Action
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Another action
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown nav-link-margin">
                                        <a
                                            class="nav-link dropdown-toggle"
                                            href="#"
                                            id="navbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            POLO SHIRT
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Action
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Another action
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item dropdown nav-link-margin">
                                        <a
                                            class="nav-link dropdown-toggle"
                                            href="#"
                                            id="navbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            WINNER
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Action
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Another action
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item dropdown nav-link-margin">
                                        <a
                                            class="nav-link dropdown-toggle"
                                            href="#"
                                            id="navbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            FOOTWEAR
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Action
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Another action
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item dropdown nav-link-margin">
                                        <a
                                            class="nav-link dropdown-toggle"
                                            href="#"
                                            id="navbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            BOTTOMWEAR
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Action
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Another action
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item dropdown nav-link-margin">
                                        <a
                                            class="nav-link dropdown-toggle"
                                            href="#"
                                            id="navbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            ACCESSESORIES
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Action
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Another action
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </section>
            </div>

            <section className="hero-sliders">

                <div
                    id="carouselExampleIndicators"
                    class="carousel slide carousal-height"
                    data-bs-ride="carousel"
                >
                    <div class="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            class="active dot1"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            class="dot2 mx-2"
                            aria-label="Slide 2 "
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            class="dot3 mx-2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div class="carousel-inner carousal-height">
                        <div class="carousel-item active">
                            <img
                                src={hero}
                                class="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div class="carousel-item">
                            <img
                                src="https://i0.wp.com/www.nogorpolli.com/wp-content/uploads/2018/12/most-popular-men-fashion-clothing-in-easy-fashion-ltd-bangladesh-nogorpolli.jpg?fit=770%2C514&ssl=1"
                                class="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div class="carousel-item">
                            <img
                                src="https://www.nogorpolli.com/wp-content/uploads/2018/12/yellow-is-the-most-innovative-clothing-brand-in-bangladesh-nogorpolli-%E0%A6%A8%E0%A6%97%E0%A6%B0-%E0%A6%AA%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A7%80-nogor-polli-apparel-clothing-fashion-store.png"
                                class="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
                </div>
            </section>

            <section className="after-hero-image my-4">
                <div className="container">
                    <div className="after-hero-image-card">
                        <div className="after-heo-image-cards">
                            <div className="after-hero-image-card-logos">
                                <img src={van} className="after-hero-image-card-logo" />
                            </div>
                            <div className="">
                                <p className="mt-2 py-0 my-1">FASTEST SHIPPING COUNTRYSIDE</p>
                            </div>
                        </div>

                        <div className="after-heo-image-cards">
                            <div className="after-hero-image-card-logos">
                                <img src={refund} className="after-hero-image-card-logo" />
                            </div>
                            <div className="">
                                <p className="mt-2 py-0 my-1">EASY RETURN POLICY</p>
                            </div>
                        </div>

                        <div className="after-heo-image-cards">
                            <div className="after-hero-image-card-logos">
                                <img src={supportlogo} className="after-hero-image-card-logo" />
                            </div>
                            <div className="">
                                <p className="mt-2 py-0 my-1">ONLINE SUPPORT 24/7</p>
                            </div>
                        </div>

                        <div className="border">
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
            <section className="my-5">
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

                <Slider {...settings}>
                    <div className="browse-cat-single-item ">
                        <img src={img1} />
                        <div className="browse-cat-single-inside-btn ">
                            <button type="button" className="btn btn-light text-dark btn-block w-100"><h6 className="fs-5 fw-bold my-0"> JACKET</h6></button>

                        </div>

                    </div>
                    <div className="browse-cat-single-item">
                        <img src={img2} />
                        <div className="browse-cat-single-inside-btn ">
                            <button type="button" className="btn btn-light text-dark btn-block w-100"><h6 className="fs-5 fw-bold my-0"> LUXARY PANJABI</h6></button>

                        </div>
                    </div>
                    <div className="browse-cat-single-item">
                        <img src={img3} />
                        <div className="browse-cat-single-inside-btn ">
                            <button type="button" className="btn btn-light text-dark btn-block w-100"><h6 className="fs-5 fw-bold my-0"> PREMIMUM T-SHIRT</h6></button>

                        </div>
                    </div>
                    <div className="browse-cat-single-item">
                        <img src={img4} />
                        <div className="browse-cat-single-inside-btn ">
                            <button type="button" className="btn btn-light text-dark btn-block w-100"><h6 className="fs-5 fw-bold my-0"> LUXARY PANJABI</h6></button>

                        </div>
                    </div>
                    <div className="browse-cat-single-item">
                        <img src={img5} />
                        <div className="browse-cat-single-inside-btn ">
                            <button type="button" className="btn btn-light text-dark btn-block w-100"><h6 className="fs-5 fw-bold my-0"> LUXARY PANJABI</h6></button>

                        </div>
                    </div>
                    <div className="browse-cat-single-item">
                        <img src={img6} />
                        <div className="browse-cat-single-inside-btn ">
                            <button type="button" className="btn btn-light text-dark btn-block w-100"><h6 className="fs-5 fw-bold my-0"> JACKET</h6></button>

                        </div>

                    </div>
                    <div className="browse-cat-single-item">
                        <img src={img7} />
                        <div className="browse-cat-single-inside-btn ">
                            <button type="button" className="btn btn-light text-dark btn-block w-100"><h6 className="fs-5 fw-bold my-0"> JACKET</h6></button>

                        </div>

                    </div>
                    <div className="browse-cat-single-item">
                        <img src={img6} />
                        <div className="browse-cat-single-inside-btn ">
                            <button type="button" className="btn btn-light text-dark btn-block w-100"><h6 className="fs-5 fw-bold my-0"> JACKET</h6></button>

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

                <div className="best-selling-products-images-wrapper my-2 container">


                    <Carousel responsive={responsive} >
                        <div class="best-selling-prouct-items pb-2 my-3">
                            <div className="best-selling-prouct-items-top">
                                <img src={img2} class="card-img-top" alt="..." />
                                <div className="best-selling-prouct-items-image-content">
                                    <div class="form-check">
                                        <input class="form-check-input bg-info" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-success" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-primary" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-danger" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-dark" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>

                                    <div className="d-flex align-items-center bg-light rounded px-2  py-1 my-0">
                                        <div className=" ">
                                            <h6 className="my-0">4.6</h6>
                                        </div>
                                        <div className="mx-1 ">
                                            <h6 className="my-0"><i class="fa-solid fa-star text-warning"></i></h6>
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
                                    <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light "> Add to Cart</button>
                                </div>
                            </div>

                        </div>

                        <div class="best-selling-prouct-items pb-2 my-3">
                            <div className="best-selling-prouct-items-top">
                                <img src={img4} class="card-img-top" alt="..." />
                                <div className="best-selling-prouct-items-image-content">
                                    <div class="form-check">
                                        <input class="form-check-input bg-info" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-success" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-primary" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-danger" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-dark" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div className="d-flex align-items-center bg-light rounded px-2  py-1 my-0">
                                        <div className=" ">
                                            <h6 className="my-0">4.6</h6>
                                        </div>
                                        <div className="mx-1 ">
                                            <h6 className="my-0"><i class="fa-solid fa-star text-warning"></i></h6>
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
                                    <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light"> Add to Cart</button>
                                </div>
                            </div>

                        </div>

                        <div class="best-selling-prouct-items pb-2 my-3">
                            <div className="best-selling-prouct-items-top">
                                <img src={img5} class="card-img-top" alt="..." />
                                <div className="best-selling-prouct-items-image-content">
                                    <div class="form-check">
                                        <input class="form-check-input bg-info" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-success" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-primary" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-danger" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-dark" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div className="d-flex align-items-center bg-light rounded px-2  py-1 my-0">
                                        <div className=" ">
                                            <h6 className="my-0">4.6</h6>
                                        </div>
                                        <div className="mx-1 ">
                                            <h6 className="my-0"><i class="fa-solid fa-star text-warning"></i></h6>
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
                                    <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light"> Add to Cart</button>
                                </div>
                            </div>

                        </div>

                        <div class="best-selling-prouct-items pb-2 my-3">
                            <div className="best-selling-prouct-items-top">
                                <img src={hero} class="card-img-top" alt="..." />
                                <div className="best-selling-prouct-items-image-content">
                                    <div class="form-check">
                                        <input class="form-check-input bg-info" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-success" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-primary" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-danger" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-dark" type="checkbox" value="" id="flexCheckDefault" />

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
                                    <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light"> Add to Cart</button>
                                </div>
                            </div>

                        </div>

                        <div class="best-selling-prouct-items pb-2 my-3">
                            <div className="best-selling-prouct-items-top">
                                <img src={img2} class="card-img-top" alt="..." />
                                <div className="best-selling-prouct-items-image-content">
                                    <div class="form-check">
                                        <input class="form-check-input bg-info" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-success" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-primary" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-danger" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-dark" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div className="d-flex align-items-center bg-light rounded px-2  py-1 my-0">
                                        <div className=" ">
                                            <h6 className="my-0">4.6</h6>
                                        </div>
                                        <div className="mx-1 ">
                                            <h6 className="my-0"><i class="fa-solid fa-star text-warning"></i></h6>
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
                                    <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light"> Add to Cart</button>
                                </div>
                            </div>

                        </div>

                        <div class="best-selling-prouct-items pb-2 my-3">
                            <div className="best-selling-prouct-items-top">
                                <img src={img12} class="card-img-top" alt="..." />
                                <div className="best-selling-prouct-items-image-content">
                                    <div class="form-check">
                                        <input class="form-check-input bg-info" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-success" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-primary" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-danger" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-dark" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div className="d-flex align-items-center bg-light rounded px-2  py-1 my-0">
                                        <div className=" ">
                                            <h6 className="my-0">4.6</h6>
                                        </div>
                                        <div className="mx-1 ">
                                            <h6 className="my-0"><i class="fa-solid fa-star text-warning"></i></h6>
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
                                    <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light"> Add to Cart</button>
                                </div>
                            </div>

                        </div>
                    </Carousel>

                </div>




            </section>


            <section className="my-5">

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

                    <Carousel responsive={responsive}>
                        <div class="best-selling-prouct-items pb-2 my-3">
                            <div className="best-selling-prouct-items-top">
                                <img src="https://www.grameenuniqlo.com/pub/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/i/n/instagram_product_post_2-02.jpg" class="card-img-top" alt="..." />
                                <div className="best-selling-prouct-items-image-content">
                                    <div class="form-check">
                                        <input class="form-check-input bg-info" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-success" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-primary" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-danger" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-dark" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>

                                    <div className="d-flex align-items-center bg-light rounded px-2  py-1 my-0">
                                        <div className=" ">
                                            <h6 className="my-0">4.6</h6>
                                        </div>
                                        <div className="mx-1 ">
                                            <h6 className="my-0"><i class="fa-solid fa-star text-warning"></i></h6>
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
                                    <p className="mt-2 mx-3 text-decoration-line-through">Tk. 300</p>

                                </div>
                                <div className="add-to-cart-btn text-center   ">
                                    <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light "> Add to Cart</button>
                                </div>
                            </div>

                        </div>
                        <div class="best-selling-prouct-items pb-2 my-3">
                            <div className="best-selling-prouct-items-top">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Qv43HXGffGQy3AM6BEV94fSV5r-vtlLx8uM7-wfjWiJpvjBouFlDSv0M8NE4oqFYbAM&usqp=CAU" class="card-img-top" alt="..." />
                                <div className="best-selling-prouct-items-image-content">
                                    <div class="form-check">
                                        <input class="form-check-input bg-info" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-success" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-primary" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-danger" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-dark" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>

                                    <div className="d-flex align-items-center bg-light rounded px-2  py-1 my-0">
                                        <div className=" ">
                                            <h6 className="my-0">4.6</h6>
                                        </div>
                                        <div className="mx-1 ">
                                            <h6 className="my-0"><i class="fa-solid fa-star text-warning"></i></h6>
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
                                    <h6 className="fs-5">TK 400</h6>
                                    <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                </div>
                                <div className="add-to-cart-btn text-center   ">
                                    <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light "> Add to Cart</button>
                                </div>
                            </div>

                        </div>

                        <div class="best-selling-prouct-items pb-2 my-3">
                            <div className="best-selling-prouct-items-top">
                                <img src="https://www.grameenuniqlo.com/pub/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/w/e/web_products-1-11_1.jpg" class="card-img-top" alt="..." />
                                <div className="best-selling-prouct-items-image-content">
                                    <div class="form-check">
                                        <input class="form-check-input bg-info" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-success" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-primary" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-danger" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-dark" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div className="d-flex align-items-center bg-light rounded px-2  py-1 my-0">
                                        <div className=" ">
                                            <h6 className="my-0">4.6</h6>
                                        </div>
                                        <div className="mx-1 ">
                                            <h6 className="my-0"><i class="fa-solid fa-star text-warning"></i></h6>
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
                                    <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light "> Add to Cart</button>
                                </div>
                            </div>

                        </div>

                        <div class="best-selling-prouct-items pb-2 my-3">
                            <div className="best-selling-prouct-items-top">
                                <img src={img10} class="card-img-top" alt="..." />
                                <div className="best-selling-prouct-items-image-content">
                                    <div class="form-check">
                                        <input class="form-check-input bg-info" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-success" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-primary" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-danger" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-dark" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div className="d-flex align-items-center bg-light rounded px-2  py-1 my-0">
                                        <div className=" ">
                                            <h6 className="my-0">4.6</h6>
                                        </div>
                                        <div className="mx-1 ">
                                            <h6 className="my-0"><i class="fa-solid fa-star text-warning"></i></h6>
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
                                    <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light"> Add to Cart</button>
                                </div>
                            </div>

                        </div>

                        <div class="best-selling-prouct-items pb-2 my-3">
                            <div className="best-selling-prouct-items-top">
                                <img src={img9} class="card-img-top" alt="..." />
                                <div className="best-selling-prouct-items-image-content">
                                    <div class="form-check">
                                        <input class="form-check-input bg-info" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-success" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-primary" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-danger" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-dark" type="checkbox" value="" id="flexCheckDefault" />

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
                                    <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light"> Add to Cart</button>
                                </div>
                            </div>

                        </div>

                        <div class="best-selling-prouct-items pb-2 my-3">
                            <div className="best-selling-prouct-items-top">
                                <img src={img2} class="card-img-top" alt="..." />
                                <div className="best-selling-prouct-items-image-content">
                                    <div class="form-check">
                                        <input class="form-check-input bg-info" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-success" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-primary" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-danger" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-dark" type="checkbox" value="" id="flexCheckDefault" />

                                    </div>
                                    <div className="d-flex align-items-center bg-light rounded px-2  py-1 my-0">
                                        <div className=" ">
                                            <h6 className="my-0">4.6</h6>
                                        </div>
                                        <div className="mx-1 ">
                                            <h6 className="my-0"><i class="fa-solid fa-star text-warning"></i></h6>
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
                                    <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light"> Add to Cart</button>
                                </div>
                            </div>

                        </div>

                    </Carousel>


                </div>




            </section>


            <section className="iframe-video-section  py-3 ">

                <div className="container i-frame-video-section-height py-3 ">
                    <div className="d-flex h-100">
                        <div className="flex-grow-1 ">
                            <h5 className="iframe-video-titles">ELITE PANJABI</h5>
                            <iframe width="560" height="100%" src="https://www.youtube-nocookie.com/embed/TfwMSbmZznM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="ms-4 flex-grow-1">
                            <h5 className="iframe-video-titles">PASSION POLO</h5>

                            <iframe width="560" height="100%" src="https://www.youtube-nocookie.com/embed/t3C75jXDP7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                        </div>
                    </div>
                </div>

            </section>


            <section className="home-page-hero-slider-2 mx-0 ">
                <div class="container  my-5 px-0 w-100 ">
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


            <section className="card-section-without-color ">
                <div className="container px-0">
                    <div className="best-selling-products-images-wrapper my-2 px-0 container">

                        <Carousel responsive={responsive}>
                            <div class="best-selling-prouct-items pb-2 my-3">
                                <div className="best-selling-prouct-items-top">
                                    <img src="http://www.observerbd.com/2018/02/24/1519490624.jpg" class="card-img-top" alt="..." />
                                    <div className="card-section-without-color-image">

                                        <div className="d-flex align-items-center bg-light rounded px-2  py-1 my-0">
                                            <div className=" ">
                                                <h6 className="my-0">4.6</h6>
                                            </div>
                                            <div className="mx-1 ">
                                                <h6 className="my-0"><i class="fa-solid fa-star text-warning"></i></h6>
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
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>

                            <div class="best-selling-prouct-items pb-2 my-3">
                                <div className="best-selling-prouct-items-top">
                                    <img src="https://www.grameenuniqlo.com/pub/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/w/e/website_product-3-17.jpg" class="card-img-top" alt="..." />
                                    <div className="card-section-without-color-image">
                                        <div className="d-flex align-items-center bg-light rounded px-2  py-1 my-0">
                                            <div className=" ">
                                                <h6 className="my-0">4.6</h6>
                                            </div>
                                            <div className="mx-1 ">
                                                <h6 className="my-0"><i class="fa-solid fa-star text-warning"></i></h6>
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
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light"> Add to Cart</button>
                                    </div>
                                </div>

                            </div>

                            <div class="best-selling-prouct-items pb-2 my-3">
                                <div className="best-selling-prouct-items-top">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVKJRz2B9bS2FMCVABiffLDxrN5vDWqo4avLfFZLHDuQYUBV7LdbbRTWeR5NSzV6n-uPc&usqp=CAU" class="card-img-top" alt="..." />
                                    <div className="card-section-without-color-image">
                                        <div className="d-flex align-items-center bg-light rounded px-2  py-1 my-0">
                                            <div className=" ">
                                                <h6 className="my-0">4.6</h6>
                                            </div>
                                            <div className="mx-1 ">
                                                <h6 className="my-0"><i class="fa-solid fa-star text-warning"></i></h6>
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
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light"> Add to Cart</button>
                                    </div>
                                </div>

                            </div>

                            <div class="best-selling-prouct-items pb-2 my-3">
                                <div className="best-selling-prouct-items-top">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVHJUgGMXcEixsUET351f9tMhwJh2y4rjKXcG5vmL-chc9F-ccRT36NiIt2yAsIKZO9AQ&usqp=CAU" class="card-img-top" alt="..." />
                                    <div className="card-section-without-color-image">

                                    </div>

                                </div>
                                <div className="best-selling-prouct-items-content px-2 " >
                                    <p className="fs-6 text-secondary my-0 mt-2">Premimum Quality T-Shirt For man</p>
                                    <div className="d-flex align-items-center  ">
                                        <h6 className="fs-5">TK 250</h6>
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light"> Add to Cart</button>
                                    </div>
                                </div>

                            </div>

                            <div class="best-selling-prouct-items pb-2 my-3">
                                <div className="best-selling-prouct-items-top">
                                    <img src={img2} class="card-img-top" alt="..." />
                                    <div className="card-section-without-color-image">
                                        <div className="d-flex align-items-center bg-light rounded px-2  py-1 my-0">
                                            <div className=" ">
                                                <h6 className="my-0">4.6</h6>
                                            </div>
                                            <div className="mx-1 ">
                                                <h6 className="my-0"><i class="fa-solid fa-star text-warning"></i></h6>
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
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light"> Add to Cart</button>
                                    </div>
                                </div>

                            </div>

                        </Carousel>


                    </div>
                </div>
            </section>

            <section className="image-overlay-about-section my-5 px-0">
                <div className="container">
                    {/* <div className="row"> */}

                    <div className="img-overlay-full-width-img">
                        <img src="https://www.nogorpolli.com/wp-content/uploads/2018/12/yellow-is-the-most-innovative-clothing-brand-in-bangladesh-nogorpolli-%E0%A6%A8%E0%A6%97%E0%A6%B0-%E0%A6%AA%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A7%80-nogor-polli-apparel-clothing-fashion-store.png"
                        />

                        <div className="img-overlay-content bg-white py-4 text-center px-5">
                            <div className="">
                                <img src={weblogo} className="w-25 " />
                            </div>
                            <div className="contentss my-3">
                                <p className="my-1">ChatGPT is not fhe cost of this operation in terms of machine is massive.on in terms of machine is m fhe cost of this operation. </p>
                                <p className="">ChatGPT is not fhe cost of this operation in terms of machine is massive. Google search can crawl the web and update their index all the time but the resources needed to train a LLM as big as GPT-3 are phenomenal. </p>
                            </div>
                        </div>
                    </div>

                    {/* </div> */}
                </div>
            </section>


            <section className="single-demo-images-cards-section container bg-light px-0">
                <div className="single-demo-image ">
                    <img src={model} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div className="single-demo-image-overlay text-center text-black ">
                        <h4>LONG SLEEVE T-SHIRT</h4>
                        <button type="button" className="btn btn-light px-4  text-center  rounded-pill btn-sm fw-bold "> VIEW ALL</button>
                    </div>
                </div>
                <div className="single-demo-image-cards ">
                    <div className="ps-5">

                        <Carousel responsive={responsiveSingleDemoImageCards} >
                            <div class="single-demo-image-card-items pb-2 my-3">
                                <div className="single-demo-image-cards-top">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGw9aP7I12msRVdZVOL_5mqAnBY5I1mNSd_Q&usqp=CAU" class="card-img-top" alt="..." />
                                    <div className="card-items-overlay-content">

                                        <div className="top-left-radius-code bg-secondary text-white d-inline-block ">
                                            <p className="my-0 px-2 fs-7">CODE1212A</p>
                                        </div>

                                        <div className="star-icon">
                                            <div className="d-flex align-items-center bg-light rounded px-2  py-1 my-0">
                                                <div className=" ">
                                                    <h6 className="my-0">4.6</h6>
                                                </div>
                                                <div className="mx-1 ">
                                                    <h6 className="my-0"><i class="fa-solid fa-star text-warning"></i></h6>
                                                </div>

                                                <div className="">

                                                    <h6 className="my-0"> <span> | </span> 25</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="size-div d-flex">

                                            <div className="available-size-para mx-0 text-dark px-0">
                                                Available size

                                            </div>
                                            <div className="text-light  bg-secondary size py-0 ">
                                                <p className="my-0 py-0">M</p>
                                                <hr className="my-0" />
                                                <p className="my-0">XL</p>
                                                <hr className="my-0" />
                                                <p className="my-0">XXL</p>
                                                <hr className="my-0" />
                                                <p className="mb-0 pb-0">XXL</p>

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
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>
                            <div class="single-demo-image-card-items pb-2 my-3">
                                <div className="single-demo-image-cards-top">
                                    <img src="https://www.grameenuniqlo.com/pub/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/i/n/instagram_product-post1_1.jpg" class="card-img-top" alt="..." />
                                    <div className="card-items-overlay-content">

                                        <div className="top-left-radius-code bg-secondary text-white d-inline-block ">
                                            <p className="my-0 px-2 fs-7">CODE1212A</p>
                                        </div>

                                        <div className="star-icon">
                                            <div className="d-flex align-items-center bg-light rounded px-2  py-1 my-0">
                                                <div className=" ">
                                                    <h6 className="my-0">4.6</h6>
                                                </div>
                                                <div className="mx-1 ">
                                                    <h6 className="my-0"><i class="fa-solid fa-star text-warning"></i></h6>
                                                </div>

                                                <div className="">

                                                    <h6 className="my-0"> <span> | </span> 25</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="size-div d-flex">

                                            <div className="available-size-para mx-0 text-dark px-0">
                                                Available size

                                            </div>
                                            <div className="text-light  bg-secondary size py-0 ">
                                                <p className="my-0 py-0">M</p>
                                                <hr className="my-0" />
                                                <p className="my-0">XL</p>
                                                <hr className="my-0" />
                                                <p className="my-0">XXL</p>
                                                <hr className="my-0" />
                                                <p className="mb-0 pb-0">XXL</p>

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
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>
                            <div class="single-demo-image-card-items pb-2 my-3">
                                <div className="single-demo-image-cards-top">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuaTAKXQBAXMG5YGh4Zx5yOmoRz9BNaGhEEw&usqp=CAU" class="card-img-top" alt="..." />
                                    <div className="card-items-overlay-content">

                                        <div className="top-left-radius-code bg-secondary text-white d-inline-block ">
                                            <p className="my-0 px-2 fs-7">CODE1212A</p>
                                        </div>

                                        <div className="star-icon">
                                            <div className="d-flex align-items-center bg-light rounded px-2  py-1 my-0">
                                                <div className=" ">
                                                    <h6 className="my-0">4.6</h6>
                                                </div>
                                                <div className="mx-1 ">
                                                    <h6 className="my-0"><i class="fa-solid fa-star text-warning"></i></h6>
                                                </div>

                                                <div className="">

                                                    <h6 className="my-0"> <span> | </span> 25</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="size-div d-flex">

                                            <div className="available-size-para mx-0 text-dark px-0">
                                                Available size

                                            </div>
                                            <div className="text-light  bg-secondary size py-0 ">
                                                <p className="my-0 py-0">M</p>
                                                <hr className="my-0" />
                                                <p className="my-0">XL</p>
                                                <hr className="my-0" />
                                                <p className="my-0">XXL</p>
                                                <hr className="my-0" />
                                                <p className="mb-0 pb-0">XXL</p>

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
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>
                            <div class="single-demo-image-card-items pb-2 my-3">
                                <div className="single-demo-image-cards-top">
                                    <img src={img2} class="card-img-top" alt="..." />
                                    <div className="card-items-overlay-content">

                                        <div className="top-left-radius-code bg-secondary text-white d-inline-block ">
                                            <p className="my-0 px-2 fs-7">CODE1212A</p>
                                        </div>

                                        <div className="star-icon">
                                            <div className="d-flex align-items-center bg-light rounded px-2  py-1 my-0">
                                                <div className=" ">
                                                    <h6 className="my-0">4.6</h6>
                                                </div>
                                                <div className="mx-1 ">
                                                    <h6 className="my-0"><i class="fa-solid fa-star text-warning"></i></h6>
                                                </div>

                                                <div className="">

                                                    <h6 className="my-0"> <span> | </span> 25</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="size-div d-flex">

                                            <div className="available-size-para mx-0 text-dark px-0">
                                                Available size

                                            </div>
                                            <div className="text-light  bg-secondary size py-0 ">
                                                <p className="my-0 py-0">M</p>
                                                <hr className="my-0" />
                                                <p className="my-0">XL</p>
                                                <hr className="my-0" />
                                                <p className="my-0">XXL</p>
                                                <hr className="my-0" />
                                                <p className="mb-0 pb-0">XXL</p>

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
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>




                        </Carousel>
                    </div>
                </div>
            </section>


            <section className="single-demo-images-cards-section container bg-light px-0 my-5">
                <div className="single-demo-image order-1">
                    <img src="https://www.grameenuniqlo.com/pub/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/f/b/fb_product_post-2-17.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="single-demo-image-cards ">
                    <div className="ps-5">

                        <Carousel responsive={responsiveSingleDemoImageCards} >
                            <div class="best-selling-prouct-items pb-2 my-3">
                                <div className="best-selling-prouct-items-top">
                                    <img src="https://www.grameenuniqlo.com/pub/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/i/n/instagram_product-post21_-_copy.jpg" class="card-img-top" alt="..." />
                                    <div className="best-selling-prouct-items-image-content">
                                        <div class="form-check">
                                            <input class="form-check-input bg-info" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input bg-success" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input bg-primary" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input bg-danger" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input bg-dark" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>

                                        <div className="d-flex align-items-center bg-light rounded px-2  py-1 my-0">
                                            <div className=" ">
                                                <h6 className="my-0">4.6</h6>
                                            </div>
                                            <div className="mx-1 ">
                                                <h6 className="my-0"><i class="fa-solid fa-star text-warning"></i></h6>
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
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 300</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>
                            <div class="best-selling-prouct-items pb-2 my-3">
                                <div className="best-selling-prouct-items-top">
                                    <img src="https://www.grameenuniqlo.com/pub/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/i/n/instagram_product-post3_-_copy.jpg" class="card-img-top" alt="..." />
                                    <div className="best-selling-prouct-items-image-content">
                                        <div class="form-check">
                                            <input class="form-check-input bg-info" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input bg-success" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input bg-primary" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input bg-danger" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input bg-dark" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>

                                        <div className="d-flex align-items-center bg-light rounded px-2  py-1 my-0">
                                            <div className=" ">
                                                <h6 className="my-0">4.6</h6>
                                            </div>
                                            <div className="mx-1 ">
                                                <h6 className="my-0"><i class="fa-solid fa-star text-warning"></i></h6>
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
                                        <h6 className="fs-5">TK 400</h6>
                                        <p className="mt-2 mx-3 text-decoration-line-through">Tk. 250</p>

                                    </div>
                                    <div className="add-to-cart-btn text-center   ">
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>

                            <div class="best-selling-prouct-items pb-2 my-3">
                                <div className="best-selling-prouct-items-top">
                                    <img src="https://www.grameenuniqlo.com/pub/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/w/o/women_s_tops-03.jpg" class="card-img-top" alt="..." />
                                    <div className="best-selling-prouct-items-image-content">
                                        <div class="form-check">
                                            <input class="form-check-input bg-info" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input bg-success" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input bg-primary" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input bg-danger" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input bg-dark" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div className="d-flex align-items-center bg-light rounded px-2  py-1 my-0">
                                            <div className=" ">
                                                <h6 className="my-0">4.6</h6>
                                            </div>
                                            <div className="mx-1 ">
                                                <h6 className="my-0"><i class="fa-solid fa-star text-warning"></i></h6>
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
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light "> Add to Cart</button>
                                    </div>
                                </div>

                            </div>

                            <div class="best-selling-prouct-items pb-2 my-3">
                                <div className="best-selling-prouct-items-top">
                                    <img src={img10} class="card-img-top" alt="..." />
                                    <div className="best-selling-prouct-items-image-content">
                                        <div class="form-check">
                                            <input class="form-check-input bg-info" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input bg-success" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input bg-primary" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input bg-danger" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input bg-dark" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div className="d-flex align-items-center bg-light rounded px-2  py-1 my-0">
                                            <div className=" ">
                                                <h6 className="my-0">4.6</h6>
                                            </div>
                                            <div className="mx-1 ">
                                                <h6 className="my-0"><i class="fa-solid fa-star text-warning"></i></h6>
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
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light"> Add to Cart</button>
                                    </div>
                                </div>

                            </div>

                            <div class="best-selling-prouct-items pb-2 my-3">
                                <div className="best-selling-prouct-items-top">
                                    <img src={img9} class="card-img-top" alt="..." />
                                    <div className="best-selling-prouct-items-image-content">
                                        <div class="form-check">
                                            <input class="form-check-input bg-info" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input bg-success" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input bg-primary" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input bg-danger" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input bg-dark" type="checkbox" value="" id="flexCheckDefault" />

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
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light"> Add to Cart</button>
                                    </div>
                                </div>

                            </div>

                            <div class="best-selling-prouct-items pb-2 my-3">
                                <div className="best-selling-prouct-items-top">
                                    <img src={img2} class="card-img-top" alt="..." />
                                    <div className="best-selling-prouct-items-image-content">
                                        <div class="form-check">
                                            <input class="form-check-input bg-info" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input bg-success" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input bg-primary" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input bg-danger" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input bg-dark" type="checkbox" value="" id="flexCheckDefault" />

                                        </div>
                                        <div className="d-flex align-items-center bg-light rounded px-2  py-1 my-0">
                                            <div className=" ">
                                                <h6 className="my-0">4.6</h6>
                                            </div>
                                            <div className="mx-1 ">
                                                <h6 className="my-0"><i class="fa-solid fa-star text-warning"></i></h6>
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
                                        <button type="button" className="btn btn-light add-to-cart-btns rounded-pill bordered bg-light"> Add to Cart</button>
                                    </div>
                                </div>

                            </div>



                        </Carousel>
                    </div>
                </div>
            </section>




            <section className="newsletter-section container rounded-3  py-5 px-5">

                <div className="newsletter-section-wrapper pt-3">
                    <div className="">
                        <h2 className="text-dark ">Join Our Newsletter To Get Offers</h2>
                        <p>Subscribe our news letter and updated</p>
                    </div>
                    <div className="d-flex  flex-grow-1 ms-5 justify-content-end">
                        <input type="text" class="form-control me-3 border-secondary border-2 w-50" placeholder="Enter your email"></input>

                        <button className="btn btn-secondary px-4 py-2">Subscribe</button>
                    </div>
                </div>


            </section>



            <footer className="contatiner-fluid footer-whole-wrapper text-light  mt-5">
                <div className="footer-background-image">
                        <img src="https://t4.ftcdn.net/jpg/05/00/76/75/360_F_500767502_AdezwSUsyb04l79RpV6zubKulRnIHpd0.jpg"/>
                </div>


                    <div className="footer-wrapper pt-5">

                      
                        <div className="">
                            <div className="footer-company-image">
                                {/* <img src="" /> */}

                                <h3>Company Name
                                </h3>
                            </div>
                            <h5>+880123123123</h5>
                            <p>WorkTime:Sat- 10::Am -12:30 Am</p>

                            <div className="">
                                <i className="fa fa-facebook"></i>
                                <i className="fa fa-instagram mx-2"></i>
                                <i className="fa fa-instagram mx-2"></i>
                                <i className="fa fa-instagram mx-2"></i>
                            </div>
                        </div>

                        <div className="">
                            <h6 className="text-info">INFORMATION</h6>

                            <div className="">
                                <li>About US</li>
                                <li>Privacy policy</li>
                                <li>Shipping Information</li>
                                <li>About US</li>
                                <li>Contact US</li>
                                <li>Faq</li>
                            </div>
                        </div>

                        <div className="">
                            <h6 className="text-info">CONTACT US</h6>

                            <div className="">
                                <p>About US Join Our Newsletter To Get Offers
                                </p>
                                <p>Subscribe our news letter and updated

                                </p>

                                <p>Faq</p>
                            </div>
                        </div>
                        <div className="">
                            <h6 className="text-info">CONTACT US</h6>

                            <div className="">
                                <p>About US Join Our Newsletter To Get Offers
                                </p>
                                <p>Subscribe our news letter and updated

                                </p>

                                <p>Faq</p>
                            </div>
                        </div>
                        </div>

            </footer>












        </>
    );
}
export default Home;
