import "../Home/Home.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import React, { Component, useRef, useState } from "react";
import "./ProductDetails.css";
import img2 from "../images/img-panjabi.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import callus from '../images/call_us.png'

function ProductDetails() {
    const [activeImg, setActiveImg] = useState('https://static-01.daraz.com.bd/p/2b91d26c0d6f555c48c3974fd15879ca.jpg');
    const [activeNumber, setActiveNo] = useState('1');
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

    return (

        <>
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="slug-url mb-4">
                        <span className="text-secondary"> Home/T-shirt/</span> <span className="fw-bold">Premium t-shirt </span>
                    </div>
                    <div className="product-details-wrapper">
                        <div className="left-side-images custom-scrollbar-left-shopbar ">
                            <div className={`${activeNumber == 1 && 'opacity-75'} left-img border`} onClick={() => {
                                setActiveImg('https://static-01.daraz.com.bd/p/2b91d26c0d6f555c48c3974fd15879ca.jpg');
                                setActiveNo(1)
                            }}>
                                <img src='https://static-01.daraz.com.bd/p/2b91d26c0d6f555c48c3974fd15879ca.jpg' />
                            </div>
                            <div className={`${activeNumber == 2 && 'opacity-75'} left-img border`} onClick={() => {
                                setActiveImg('https://static-01.daraz.pk/original/ba8dc2c07670fcd704c973b539be5b25.jpg');
                                setActiveNo(2)
                            }}>
                                <img src='https://static-01.daraz.pk/original/ba8dc2c07670fcd704c973b539be5b25.jpg' />
                            </div>
                            <div className={`${activeNumber == 3 && 'opacity-75'} left-img border`} onClick={() => {
                                setActiveImg('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1t5-84QWfhtXZaTVaMgxS2jvewPg71DfVcA&usqp=CAU');
                                setActiveNo(3)
                            }}>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1t5-84QWfhtXZaTVaMgxS2jvewPg71DfVcA&usqp=CAU' />
                            </div>
                            <div className={`${activeNumber == 4 && 'opacity-75'} left-img border`} onClick={() => {
                                setActiveImg('https://m.media-amazon.com/images/I/71b1LpwyDKL._UY550_.jpg');
                                setActiveNo(4)
                            }}>
                                <img src='https://m.media-amazon.com/images/I/71b1LpwyDKL._UY550_.jpg' />
                            </div>
                            <div className={`${activeNumber == 5 && 'opacity-75'} left-img border`} onClick={() => {
                                setActiveImg('https://shokhfashionbd.com/wp-content/uploads/2020/09/Semi-Long-Kabli-for-Men-002-GMK-0016GOL-GDM.jpeg');
                                setActiveNo(5)
                            }}>
                                <img src='https://shokhfashionbd.com/wp-content/uploads/2020/09/Semi-Long-Kabli-for-Men-002-GMK-0016GOL-GDM.jpeg' />
                            </div>
                        </div>
                        <div className="big-image ">
                            <img src={activeImg} />
                        </div>
                        <div className="right-descriptions">
                            <h6 className="product-title-text fs-5">Elite Quality Embroided Panjabi MP-70</h6>
                            <div className="d-flex">
                                <h5 className="text-dark fs-4">TK- 2290</h5>
                                <h6 className="text-decoration-line-through align-self-end mx-3 text-secondary">TK- 2290</h6>

                            </div>

                            <div className="d-flex align-items-center justify-content-center star-review-overlay star-review rounded-1 text-secondary py-1 ">
                                <div className=" ">
                                    <h6 className="my-0">4.6</h6>
                                </div>
                                <div className="mx-1 ">
                                    <h6 className="my-0"><i class="fa-solid fa-star text-warning star-icon"></i></h6>
                                </div>

                                <div className="">

                                    <h6 className="my-0"> <span> | </span> 25 review</h6>
                                </div>
                            </div>

                            <hr />

                            <div className="d-flex align-items-center">
                                <div className="">
                                    <span className="size-text text-secondary ">SIZE:</span>
                                </div>

                                <div className="d-flex">
                                    <div className="me-1 mx-3 size-number">
                                        <span className="">M</span>
                                    </div>
                                    <div className="me-1 mx-2 size-number">
                                        <span className="">L</span>
                                    </div>
                                    <div className="me-1 mx-2 size-number">
                                        <span className="">XL</span>
                                    </div>
                                    <div className="me-1 mx-2 size-number">
                                        <span className="">XXL</span>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex mt-3 align-items-center">
                                <div className="align-self-start">
                                    <span className="size-text text-secondary">COLOR:</span>
                                </div>

                                <div className="me-1 mx-2 ">
                                    <span className="text-secondary fs-6 fw-bolder">BLACK</span>
                                    <div className="related-images mt-2">
                                        <div className="related-images-wrapper">
                                            <div className="realated-single-img border mx-1">
                                                <img src="https://easyfashion.com.bd/wp-content/uploads/2022/12/Winter-Junjior-Slider-Top-I-PNG.png" />
                                            </div>
                                            <div className="realated-single-img border mx-1">
                                                <img src="https://easyfashion.com.bd/wp-content/uploads/2022/12/Winter-Junjior-Slider-Top-I-PNG.png" />
                                            </div>
                                            <div className="realated-single-img border mx-1">
                                                <img src="https://easyfashion.com.bd/wp-content/uploads/2022/12/Winter-Junjior-Slider-Top-I-PNG.png" />
                                            </div>
                                            <div className="realated-single-img border mx-1">
                                                <img src="https://easyfashion.com.bd/wp-content/uploads/2022/12/Winter-Junjior-Slider-Top-I-PNG.png" />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <hr />

                            <div className="d-flex align-items-center">
                                <div className="d-flex text-secondary">
                                    <div className="bg-light px-2 fs-5 rounded fw-bold">
                                        -
                                    </div>
                                    <span className="mx-3 fs-5">1</span>
                                    <div className="px-2 fs-5 bg-light rounded fw-bold">
                                        +
                                    </div>
                                </div>
                                <div className="mx-4">
                                    <button type="button" className="btn btn-light py-0 text-secondary rounded-3  px-4 bg-light product-details-add-to-cart me-1 border"> Add to Cart</button>

                                </div>
                                <div className="mx-1">
                                    <button type="button" className="btn btn-light py-0 text-secondary  rounded-3 product-details-add-to-cart px-4 bg-light  me-1 border"> Buy now</button>

                                </div>
                            </div>

                            <div className="mt-3 text-secondary cursor-pointer add-to-wish-text">
                                <i class="far fa-heart"></i> ADD TO WISHLIST
                            </div>

                            <div className="mt-1">
                                <img src={callus} class="" style={{ width: '170px', height: '100%', objectFit: "cover" }} />
                            </div>
                            <div className="text-secondary">
                                <div className="d-flex align-items-center">
                                    <div className="">
                                        Share to:
                                    </div>
                                    <div className="mx-2  ">
                                        <i className="footer-social-icon-items fab fa-facebook border-circle"></i>

                                    </div>
                                    <div className="mx-2">
                                        <i className="footer-social-icon-items fab fa-facebook border-circle"></i>

                                    </div>
                                    <div className="mx-2">
                                        <i className="footer-social-icon-items fab fa-facebook border-circle"></i>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <section className="container">
                <div className="row">

                    <div className="description-review-wrapper ">
                        <div className="d-flex">
                            <div className="">
                                <h6 className="fw-bold">DESCRIPTION</h6>
                            </div>
                            <div className="mx-4">
                                <h6 className="fw-bold text-secondary">DELIVERY OPTIONS</h6>
                            </div>
                        </div>

                        <div className="mt-3 ">
                            <h5 className="fw-bold about-this-category-text fs-5">About the Category</h5>
                            <p className=" product-paragraph-text">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                            </p>
                        </div>
                        <div className="mt-3 ">
                            <h5 className="fw-bold about-this-category-text fs-5">Product Specifications</h5>
                            <p className=" product-paragraph-text">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                            </p>
                        </div>
                        <div className="mt-3 ">
                            <h5 className="fw-bold about-this-category-text fs-5">About The brand</h5>
                            <p className="product-paragraph-text">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                            </p>
                        </div>
                    </div>
                </div>

            </section>

            <section className="product-side-by-side-two-images">
                <div className="container">
                    <div className="row">
                        <div className="product-side-by-side-two-images-wrapper">
                            <div className="side-by-side-image ">
                                <img src="https://panzabi.com/wp-content/uploads/2021/01/mens-_hand_embroidery_karchupi_designpanjabi_bypanzabi.com-C495-5.jpg" />
                            </div>
                            <div className="side-by-side-image ">
                                <img src="https://panzabi.com/wp-content/uploads/2021/01/mens-_hand_embroidery_karchupi_designpanjabi_bypanzabi.com-C493-2.jpg" />

                            </div>

                        </div>
                    </div>
                </div>

            </section>


            <section className="">

                <div className="broswe-our-cat-heading my-3 container px-5 ">
                    <div className="Name-tag-div1">
                        <div className="Name-tag-div2">
                            <h2 className="Name-tag fs-4">RELATED PRODUCTS</h2>
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
                        autoPlaySpeed={3100}
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
                            <h2 className="Name-tag fs-4">YOU MAY ALSO LIKE</h2>
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


            <Footer></Footer>

        </>
    )
}
export default ProductDetails