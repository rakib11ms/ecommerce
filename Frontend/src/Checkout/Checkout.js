import React, { useState } from "react";
import "./Checkout.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import cashOnDelivary from "../images/cash on delivery.png";
import MenuItem from "@mui/material/MenuItem";
import dbbl from "../images/ddbl.png";
import nogod from "../images/nogod.png";
import mastercardl from "../images/mastercard.png";
import visa from "../images/visa.png";
import roket from "../images/roket.png";
import tShirt1 from "../images/card-tShirt1.png";
import tShirt2 from "../images/card-tShirt2.png";
import tShirt3 from "../images/card-tShirt3.png";
import tShirt4 from "../images/card-tShirt4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileArrowDown,
  faPhone,
  faXmark,
  faGift,
} from "@fortawesome/free-solid-svg-icons";

const district = [
  {
    value: "Chattogram ",
    label: "Chattogram ",
  },
  {
    value: "Rangpur",
    label: "Rangpur",
  },
  {
    value: "Rajshahi",
    label: "Rajshahi",
  },
  {
    value: "Dhaka",
    label: "Dhaka",
  },
  {
    value: "jossor",
    label: "jossor",
  },
  {
    value: "Sylhet",
    label: "Sylhet",
  },
  {
    value: "Dinajpur",
    label: "Dinajpur",
  },
  {
    value: "Mymensingh",
    label: "Mymensingh",
  },
  {
    value: "Cumilla",
    label: "Cumilla",
  },
  {
    value: "Bakerganj",
    label: "Bakerganj",
  },
  {
    value: "Faridpur",
    label: "Faridpur",
  },
  {
    value: "Noakhali",
    label: "Noakhali",
  },
  {
    value: "Bogura",
    label: "Bogura",
  },
];
const thanas = [
  {
    value: "Anwara Upazila",
    label: "Anwara Upazila",
  },
  {
    value: "Banshkhali Upazila",
    label: "Banshkhali Upazila",
  },
  {
    value: "Boalkhali Upazila",
    label: "Boalkhali Upazila",
  },
  {
    value: "Chandanaish Upazila",
    label: "Chandanaish Upazila",
  },
  {
    value: "Fatikchhari Upazila",
    label: "Fatikchhari Upazila",
  },
  {
    value: "Hathazari Upazila",
    label: "Hathazari Upazila",
  },
  {
    value: "Karnaphuli Upazila",
    label: "Karnaphuli Upazila",
  },
  {
    value: "Lohagara Upazila",
    label: "Lohagara Upazila",
  },
];

const Checkout = () => {
  const [filterClickStatus, setFilterClickStatus] = useState(false);
  console.log("check", filterClickStatus);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <h3 className="checkout-text">CHECKOUT</h3>
        <hr className="checkout-hr" />
        <div className="checkout-social-sites-div">
          <p className="return-customer-text">
            <span className="return-customer-text-span">
              Returning Customer?{" "}
            </span>
            Click here to login
          </p>
          <div className="authentication-buttons-div ">
            <div className="auth-social-sites-div">
              <div className="d-flex rounded-1 fb-auth-button mt-2">
                <div className="fb-icon-login rounded-start py-1 px-2">
                  <i className="fab fa-facebook text-white"></i>
                </div>
                <div className="login-with-fb px-2 pe-4  rounded-end py-1 text-white">
                  LOGIN WITH FACEBOOK
                </div>
              </div>

              <div className="d-flex rounded-1 mx-4 ">
                <div className=" login-google-icon rounded-start py-1 px-2">
                  <i className="fab fa-google text-white"></i>
                </div>
                <div className="login-with-google px-2  pe-4 rounded-end py-1 text-white">
                  LOGIN WITH GOOGLE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h3 className="checkouts-tags-texts">DELIVARY & BILLING INFO</h3>
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12 col-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1 },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Customer Name"
                      variant="outlined"
                      className="order-review-input"
                      size="small"
                    />
                  </div>
                </Box>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1 },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      id="outlined-number"
                      label="Number"
                      type="number"
                      className="order-review-input"
                      size="small"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>
                </Box>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1 },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Address"
                      variant="outlined"
                      className="order-review-input"
                      size="small"
                    />
                  </div>
                </Box>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1 },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="DISTRICT"
                      className="order-review-input"
                      defaultValue="DISTRICT"
                      size="small"
                    >
                      {district.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                </Box>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1 },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="THANA"
                      defaultValue="THANA"
                      className="order-review-input"
                      size="small"
                    >
                      {thanas.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                </Box>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1 },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      className="order-review-input"
                      size="small"
                    />
                  </div>
                </Box>
              </div>
              <div className="col-lg-12 col-md-12 col-12">
                <Box className="comment-text-area">
                  <TextField
                    fullWidth
                    label="ORDER NOTE (OPTIONAL)"
                    id="fullWidth"
                  />
                </Box>
              </div>
            </div>
            <div className="mt-5 payment-method-div">
              <h3>PAYMENT METHOD</h3>
              <hr className="payment-hr" />
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12 mb-5">
                  <div className="form-check">
                    <input
                      className="form-check-input "
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                    />
                    <label class="form-check-label" for="exampleRadios1">
                      <h4>Cash on delivary</h4>
                    </label>
                  </div>
                  <div className="cashOnDelivary-div">
                    <img
                      className="cashOnDelivary"
                      src={cashOnDelivary}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 mb-5">
                  <div className="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                    />
                    <label class="form-check-label" for="exampleRadios1">
                      <h4>Pay Online</h4>
                    </label>
                  </div>
                  <div className="bank-logo-div">
                    <img className="bank-logo" src={dbbl} alt="" />
                    <img className="bank-logo" src={visa} alt="" />
                    <img className="bank-logo" src={mastercardl} alt="" />
                    <img className="bank-logo" src={roket} alt="" />
                    <img className="bank-logo" src={nogod} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 col-12">
            <h3>ORDER REVIEW</h3>
            <hr className="payment-hr" />
            <h6 className="orderReview-cart-items-tags">YOUR CART : 3 ITEMS</h6>
            <hr className="payment-hr" />
            <div className={filterClickStatus ? "overlay-contents" : ""}>
              <div className="shop-category-color-wrapper mt-2  ">
                <div className="d-flex ">
                  <div className="w-100 custom-scrollbar-left-shopbar">
                    <div class="form-check d-flex justify-content-between ">
                      <div className="">
                        <img
                          className="img img-fluid order-review-img"
                          src={tShirt1}
                          alt=""
                        />
                        <label
                          className=" ms-3 mt-2 form-check-label"
                          for="flexCheckDefault"
                        >
                          <p className="items-tags">
                            Premimum Quality T-Shirt For Men
                          </p>
                          <div className="d-flex align-items-center">
                            <h4 className="orer-tk-size">Tk. 450</h4>
                            <div className="ms-4">
                              <h6 className="order-off-text">Tk 550</h6>
                              <hr className="discount-hr" />
                            </div>
                          </div>
                          <h4 className="orer-tk-size">Size: M</h4>
                        </label>
                      </div>
                      <div className=" ">
                        <FontAwesomeIcon icon={faXmark} />
                      </div>
                    </div>
                    <div class="form-check d-flex justify-content-between ">
                      <div className="">
                        <img
                          className="img img-fluid order-review-img"
                          src={tShirt2}
                          alt=""
                        />
                        <label
                          className=" ms-3 mt-2 form-check-label"
                          for="flexCheckDefault"
                        >
                          <p className="items-tags">
                            Premimum Quality T-Shirt For Men
                          </p>
                          <div className="d-flex align-items-center">
                            <h4 className="orer-tk-size">Tk. 450</h4>
                            <div className="ms-4">
                              <h6 className="order-off-text">Tk 550</h6>
                              <hr className="discount-hr" />
                            </div>
                          </div>
                          <h4 className="orer-tk-size">Size: M</h4>
                        </label>
                      </div>
                      <div className=" ">
                        <FontAwesomeIcon icon={faXmark} />
                      </div>
                    </div>
                    <div class="form-check d-flex justify-content-between ">
                      <div className="">
                        <img
                          className="img img-fluid order-review-img"
                          src={tShirt3}
                          alt=""
                        />
                        <label
                          className=" ms-3 mt-2 form-check-label"
                          for="flexCheckDefault"
                        >
                          <p className="items-tags">
                            Premimum Quality T-Shirt For Men
                          </p>
                          <div className="d-flex align-items-center">
                            <h4 className="orer-tk-size">Tk. 450</h4>
                            <div className="ms-4">
                              <h6 className="order-off-text">Tk 550</h6>
                              <hr className="discount-hr" />
                            </div>
                          </div>
                          <h4 className="orer-tk-size">Size: M</h4>
                        </label>
                      </div>
                      <div className=" ">
                        <FontAwesomeIcon icon={faXmark} />
                      </div>
                    </div>
                    <div class="form-check d-flex justify-content-between ">
                      <div className="">
                        <img
                          className="img img-fluid order-review-img"
                          src={tShirt4}
                          alt=""
                        />
                        <label
                          className=" ms-3 mt-2 form-check-label"
                          for="flexCheckDefault"
                        >
                          <p className="items-tags">
                            Premimum Quality T-Shirt For Men
                          </p>
                          <div className="d-flex align-items-center">
                            <h4 className="orer-tk-size">Tk. 450</h4>
                            <div className="ms-4">
                              <h6 className="order-off-text">Tk 550</h6>
                              <hr className="discount-hr" />
                            </div>
                          </div>
                          <h4 className="orer-tk-size">Size: M</h4>
                        </label>
                      </div>
                      <div className=" ">
                        <FontAwesomeIcon icon={faXmark} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="sub-delivary">SUB-TOTAL</h6>
                <p className="ammount-charge">$3500</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="sub-delivary">DELIVARY CHARGE</h6>
                <p className="ammount-charge">$70</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <h6>TOTAL</h6>
                <p className="ammount-charge">$3570</p>
              </div>
            </div>
            <div>
              <p className="order-coupon-code">
                <span>
                  <FontAwesomeIcon icon={faGift} />
                </span>{" "}
                Have a Coupon or Promo Code?
              </p>
              <div className="d-flex">
                <input
                  className="form-control me-2"
                  type="text"
                  placeholder="Coupon Code Here"
                  aria-label="readonly input example"
                  readonly
                />
                <button className="order-review-apply">APPLY</button>
              </div>
            </div>
            <div className="order-review-place-button-div">
              <button className="order-review-place-button">PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Checkout;
