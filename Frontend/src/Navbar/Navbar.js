import "../Home/Home.css";
import './Navbar.css';
import {react,useState} from 'react'
import weblogo from "../images/weblogo.png";

function Navbar() {
    // const [modalShow, setModalShow] = useState(false);

    // function myFunction() {
    //     console.log("The page has finished loading.");
    //     setModalShow(true)
    //   }
      
    //   window.onload = myFunction;
    return (
        <>
            <div className="container" style={{ cursor: "pointer" }}>
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
                        <div className="" data-bs-toggle="modal" data-bs-target="#loginModal">
                            <i class="far fa-user"></i>
                        </div>


                        {/* <!-- Modal --> */}
                        <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" id="loginModalDialog">
                                <div class="modal-content">
                                    <div class="modal-header bg-light">
                                        <div className="d-flex justify-content-center  w-100">
                                            <div className="d-flex rounded-3 ">
                                                <div className="bg-dark bg-gradient rounded-start py-1 px-2">
                                                    <i className="fab fa-facebook text-white"></i>
                                                </div>
                                                <div className="bg-primary px-2 pe-4  rounded-end py-1 text-white">
                                                    LOGIN WITH FACEBOOK
                                                </div>
                                            </div>

                                            <div className="d-flex rounded-3 mx-4 ">
                                                <div className="bg-info rounded-start py-1 px-2">
                                                    <i className="fab fa-google text-white"></i>
                                                </div>
                                                <div className="bg-danger px-2  pe-4 rounded-end py-1 text-white">
                                                    LOGIN WITH GOOGLE
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-body ">
                                        <div className=" p-2 d-flex flex-direction-column justify-content-between w-100">


                                            <div className=" w-100 pe-5 " id="wrapper_1">
                                                
                                                <h5  className="mb-2 text-dark">LOGIN</h5>

                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput1" class="form-label">Mobile No or Email address</label>
                                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                                </div>

                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Remeber Me
                                                    </label>
                                                </div>

                                                <div className="my-3">
                                                    <button type="submit" className="btn btn-secondary px-4 rounded-0 fw-bold"> LOGIN</button>
                                                </div>
                                                <div className="">
                                                    <p className="my-0">Forgot password?</p>
                                                </div>
                                               
                                            </div>



                                            <div className="w-100 ps-5 ">
                                                <h5 className="mb-2 text-dark">REGISTER</h5>

                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput1" class="form-label">Mobile No or Email address</label>
                                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                                </div>

                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                                </div>


                                                <div className="my-3">
                                                    <button type="submit" className="btn btn-secondary px-4 rounded-0 fw-bold"> REGISTER</button>
                                                </div>


                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
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


        </>

    )
}
export default Navbar