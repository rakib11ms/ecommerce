import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import footer from "../images/footer_page.png";
import company_logo from "../images/weblogo.png";
import "../Home/Home.css";
import "./ContactUs.css";

function ContactUs() {
    return (
        <>
            <Navbar></Navbar>

            <section className='contact-cards mt-md-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='contact-cards-wrapper'>
                            <div className='contact-cards-1'>
                                <i class="icon-sizes fas fa-map-marker-alt "></i>

                                <div className='contact-cards-address mt-3'>
                                    <p>
                                        98/2,Vista Garden (3rd-Floor) , Shepara,Parbata , Mirpur-10,Dhaka-1216.
                                    </p>
                                </div>

                            </div>
                            <div className='contact-cards-1'>
                                <i class="icon-sizes fas fa-phone-volume"></i>
                                <div className='contact-cards-address mt-3'>
                                    <p className='my-0 contact-phones'>
                                        099-29123123
                                    </p>
                                    <p className='my-0 contact-phones'> 013122756712 | 0123128318231</p>
                                    <p className='my-0 contact-phones'> 013122756712 | 0123128318231</p>
                                </div>

                            </div>

                            <div className='contact-cards-1'>
                                <i class="icon-sizes fa-solid fa-envelope"></i>
                                <div className='contact-cards-address mt-3'>
                                    <p>
                                        manfarebd@gmail.com
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='conatct-section-google-map my-5 '>
                <div className='container'>
                    <div className='row'>
                        <div className='contact-section-google-map-wrapper'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.331302359622!2d90.36668331445692!3d23.806815292536854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c17754b62c59%3A0x90ee2eaf2fae5a0c!2sManfare!5e0!3m2!1sen!2sbd!4v1676184015014!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>

            </section>


            <section className='contact-form-sec my-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='contact-section-wrapper '>

                            <div className='get-in-touch-wrapper '>
                                <h3 className='fw-bold get-in-touch-text '>GET IN TOUCH</h3>
                                <div className='line-under'>

                                </div>

                            </div>

                            <form className='form mt-md-5'>



                                <div class="mb-3 row">
                                    <label for="inputPassword" class="col-sm-2 col-md-2 col-form-label contact-form-text ">Subject</label>

                                    <div class="col-sm-10 col-md-10">
                                        <select class="form-select form-select-lg contact-bg text-secondary" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>    </div>

                                </div>
                                <div class="mb-3 row">
                                    <label for="inputPassword" class="col-sm-2 col-md-2 col-form-label contact-form-text">Email address</label>
                                    <div class="col-sm-10  col-md-10 ">
                                        <input type="email" class="form-control form-control-lg border-2 contact-border" id="inputPassword" />
                                    </div>
                                </div>

                                <div class="mb-3 row">
                                    <label for="inputPassword" class="col-sm-2 col-md-2 col-form-label contact-form-text ">Attachment</label>
                                    <div class="col-sm-10  col-md-10">
                                        <input type="file" class="form-control form-control-lg contact-bg text-secondary" id="inputPassword" />
                                    </div>
                                </div>


                                <div class="mb-3 row">
                                    <label for="inputPassword" class="col-sm-2 col-md-2 col-form-label contact-form-text">Message</label>
                                    <div class="col-sm-10  col-md-10">
                                        <textarea class="form-control form-control-lg contact-border border-2" rows='5' placeholder="Leave a comment here" id="floatingTextarea2">

                                        </textarea>
                                    </div>
                                </div>

                                <div className=' float-right d-flex justify-content-end'>
                                    <div className=''>
                                        <button type="submit " className='btn btn-dark border-none px-4 fw-bold'>

                                            SEND
                                        </button>
                                    </div>
                                </div>




                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>


        </>
    )
}
export default ContactUs