import "./Home.css";
// import weblogo from './images/weblogo.png'
// import web from '../../images/weblogo.png'
import weblogo from "../images/weblogo.png";
import supportlogo from "../images/support.png";
import van from "../images/van.png";
import refund from "../images/refund.png";
import premium from "../images/premium.png";
import hero from "../images/hero.png";

import "./BrowserCatagories.css";
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

function Home() {
    const settings = {
        infinite: true,
        slidesToShow: 5,
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
                    <nav class="navbar navbar-expand-lg navbar-light  bg-white mx-5 px-5 ">
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
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
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
                {/* <div id="carouselExampleControls" class="carousel slide carousal-height" data-bs-ride="carousel">
                    <div class="carousel-inner carousal-height">
                        <div class="carousel-item active">
                            <img src="https://elements-cover-images-0.imgix.net/45ef3e71-6a63-49e4-a47d-428200b0d4a4?auto=compress%2Cformat&fit=max&w=900&s=46c2d079f339e9a95e1b57f2b5055cf5" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://i0.wp.com/www.nogorpolli.com/wp-content/uploads/2018/12/most-popular-men-fashion-clothing-in-easy-fashion-ltd-bangladesh-nogorpolli.jpg?fit=770%2C514&ssl=1" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.nogorpolli.com/wp-content/uploads/2018/12/yellow-is-the-most-innovative-clothing-brand-in-bangladesh-nogorpolli-%E0%A6%A8%E0%A6%97%E0%A6%B0-%E0%A6%AA%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A7%80-nogor-polli-apparel-clothing-fashion-store.png" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>



                </div> */}

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
                            class="dot2"
                            aria-label="Slide 2 "
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            class="dot3"
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
                                <p className="my-1">FASTEST SHIPPING COUNTRYSIDE</p>
                            </div>
                        </div>

                        <div className="after-heo-image-cards">
                            <div className="after-hero-image-card-logos">
                                <img src={refund} className="after-hero-image-card-logo" />
                            </div>
                            <div className="">
                                <p className="my-1">EASY RETURN POLICY</p>
                            </div>
                        </div>

                        <div className="after-heo-image-cards">
                            <div className="after-hero-image-card-logos">
                                <img src={supportlogo} className="after-hero-image-card-logo" />
                            </div>
                            <div className="">
                                <p className="my-1">ONLINE SUPPORT 24/7</p>
                            </div>
                        </div>

                        <div className="border">
                            <div className="after-hero-image-card-logos">
                                <img src={premium} className="after-hero-image-card-logo" />
                            </div>
                            <div className="">
                                <p className="my-1">PREMEMIUM QUALITY PRODUCTS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ashiq Code  */}
            <section>
                <div>
                    {/* Browse Our Catagories */}

                    <div className="Name-tag-div1">
                        <div className="Name-tag-div2">
                            <h2 className="Name-tag">Browse Our Catagories</h2>
                        </div>
                    </div>

                    <div className="check-1">
                        <div className="check-2"></div>
                    </div>

                    <Slider {...settings}>
                        <div className="single-slider  ">
                            <img className="bcimages img-fluid" src={img1} />
                            <div className="bc-button-div">
                                <button className="bc-button rounded">T-Shirt</button>
                            </div>
                        </div>
                        <div className="single-slider  ">
                            <img className="bcimages img-fluid" src={img2} />
                            <div className="bc-button-div">
                                <button className="bc-button rounded">Men-Panjabi</button>
                            </div>
                        </div>
                        <div className="single-slider  ">
                            <img className="bcimages img-fluid" src={img3} />
                            <div className="bc-button-div ">
                                <button className="bc-button rounded">Women-Dress</button>
                            </div>
                        </div>
                        <div className="single-slider  ">
                            <img className="bcimages img-fluid" src={img4} />
                            <div className="bc-button-div">
                                <button className="bc-button rounded">Women-Sandle</button>
                            </div>
                        </div>
                        <div className="single-slider  ">
                            <img className="bcimages img-fluid" src={img5} />
                            <div className="bc-button-div">
                                <button className="bc-button rounded">T-Shirt</button>
                            </div>
                        </div>
                        <div className="single-slider  ">
                            <img
                                className="bcimages img-fluid"
                                style={{ borderRadius: 10 }}
                                src={img6}
                            />
                            <div className="bc-button-div ">
                                <button className="bc-button rounded">Neckless</button>
                            </div>
                        </div>
                        <div className="single-slider  ">
                            <img className="bcimages img-fluid" src={img7} />
                            <div className="bc-button-div">
                                <button className="bc-button rounded">Women-Dress</button>
                            </div>
                        </div>
                    </Slider>

                    {/* Best Selling  */}
                    <div>
                        <div className="Name-tag-div1">
                            <div className="Name-tag-div2">
                                <h2 className="Name-tag">BEST SELLING PRODUCT</h2>
                            </div>
                        </div>

                        <div className="check-1">
                            <div className="check-2"></div>
                        </div>

                        <Slider {...style} className="container mt-5">
                            <div className="card">
                                <img src={img8} className="card-img-top img-fluid" alt="..." />
                                <ul className="check-inputs">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bG-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bB-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bM-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bP-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bR-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                </ul>
                                <div className="card-body">
                                    <p className="card-text">
                                        Premium Quality Solid T-Shirt For Men
                                    </p>
                                    <h5 className="card-title">Tk. 350</h5>
                                    <button className="Add-cart-button">Add To card</button>
                                </div>
                            </div>

                            <div className="card">
                                <img src={img8} className="card-img-top img-fluid" alt="..." />
                                <ul className="check-inputs">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bG-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bB-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bM-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bP-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bR-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                </ul>
                                <div className="card-body">
                                    <p className="card-text">
                                        Premium Quality Solid T-Shirt For Men
                                    </p>
                                    <h5 className="card-title">Tk. 350</h5>
                                    <button className="Add-cart-button">Add To card</button>
                                </div>
                            </div>
                            <div className="card">
                                <img src={img8} className="card-img-top img-fluid" alt="..." />
                                <ul className="check-inputs">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bG-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bB-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bM-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bP-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bR-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                </ul>
                                <div className="card-body">
                                    <p className="card-text">
                                        Premium Quality Solid T-Shirt For Men
                                    </p>
                                    <h5 className="card-title">Tk. 350</h5>
                                    <button className="Add-cart-button">Add To card</button>
                                </div>
                            </div>
                            <div className="card">
                                <img src={img8} className="card-img-top img-fluid" alt="..." />
                                <ul className="check-inputs">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bG-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bB-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bM-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bP-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bR-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                </ul>
                                <div className="card-body">
                                    <p className="card-text">
                                        Premium Quality Solid T-Shirt For Men
                                    </p>
                                    <h5 className="card-title">Tk. 350</h5>
                                    <button className="Add-cart-button">Add To card</button>
                                </div>
                            </div>
                            <div className="card">
                                <img src={img8} className="card-img-top img-fluid" alt="..." />
                                <ul className="check-inputs">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bG-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bB-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bM-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bP-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bR-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                </ul>
                                <div className="card-body">
                                    <p className="card-text">
                                        Premium Quality Solid T-Shirt For Men
                                    </p>
                                    <h5 className="card-title">Tk. 350</h5>
                                    <button className="Add-cart-button">Add To card</button>
                                </div>
                            </div>
                            <div className="card">
                                <img src={img8} className="card-img-top img-fluid" alt="..." />
                                <ul className="check-inputs">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bG-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bB-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bM-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bP-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bR-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                </ul>
                                <div className="card-body">
                                    <p className="card-text">
                                        Premium Quality Solid T-Shirt For Men
                                    </p>
                                    <h5 className="card-title">Tk. 350</h5>
                                    <button className="Add-cart-button">Add To card</button>
                                </div>
                            </div>
                            <div className="card">
                                <img src={img8} className="card-img-top img-fluid" alt="..." />
                                <ul className="check-inputs">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bG-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bB-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bM-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bP-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bR-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                </ul>
                                <div className="card-body">
                                    <p className="card-text">
                                        Premium Quality Solid T-Shirt For Men
                                    </p>
                                    <h5 className="card-title">Tk. 350</h5>
                                    <button className="Add-cart-button">Add To card</button>
                                </div>
                            </div>
                            <div className="card">
                                <img src={img8} className="card-img-top img-fluid" alt="..." />
                                <ul className="check-inputs">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bG-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bB-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bM-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bP-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input bR-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                </ul>
                                <div className="card-body">
                                    <p className="card-text">
                                        Premium Quality Solid T-Shirt For Men
                                    </p>
                                    <h5 className="card-title">Tk. 350</h5>
                                    <button className="Add-cart-button">Add To card</button>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Home;
