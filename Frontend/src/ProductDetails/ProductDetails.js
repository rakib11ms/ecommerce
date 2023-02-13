import "../Home/Home.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import React, { Component, useRef, useState } from "react";
import "./ProductDetails.css";

function ProductDetails() {
    const [activeImg, setActiveImg] = useState('https://static-01.daraz.com.bd/p/2b91d26c0d6f555c48c3974fd15879ca.jpg');
    const [activeNumber, setActiveNo] = useState('1')
    return (

        <>
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="slug-url">
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
                        <div className="right-descriptions px-3">
                            <h6 className="product-title-text fs-5">Elite Quality Embroided Panjabi MP-70</h6>
                            <div className="d-flex">
                            <h5 className="text-dark fs-4">TK- 2290</h5>
                            <h6 className="text-decoration-line-through align-self-end mx-3 text-secondary">TK- 2290</h6>

                            </div>

                            <div className="d-flex align-items-center justify-content-center  star-review-overlay star-review rounded-1   my-4 text-secondary py-1 ">
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
                                <div className="">
                                    <span className="size-text text-secondary">COLOR:</span>
                                </div>

                                <div className="me-1 mx-2 ">
                                    <span className="text-secondary fs-6 fw-bolder">BLACK</span>
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
                                    <button type="button" className="btn btn-light py-0 text-secondary rounded-3  px-4 bg-light product-details-add-to-cart me-1 "> Add to Cart</button>

                                </div>
                                <div className="mx-3">
                                    <button type="button" className="btn btn-light py-0 text-secondary  rounded-3 product-details-add-to-cart px-4 bg-light  me-1 "> Buy now</button>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="description-review-wrapper my-5">
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
                            <p className="w-75 product-paragraph-text">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                            </p>
                        </div>
                        <div className="mt-3 ">
                            <h5 className="fw-bold about-this-category-text fs-5">Product Specifications</h5>
                            <p className="w-75 product-paragraph-text">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                            </p>
                        </div>
                        <div className="mt-3 ">
                            <h5 className="fw-bold about-this-category-text fs-5">About The brand</h5>
                            <p className="w-75 product-paragraph-text">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>

        </>
    )
}
export default ProductDetails