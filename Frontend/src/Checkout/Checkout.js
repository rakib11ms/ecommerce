import React from "react";
import "./Checkout.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import MenuItem from "@mui/material/MenuItem";

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
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <h3 className="checkout-text">CHECKOUT</h3>
        <hr className="checkout-hr" />
        <div>
          <p>
            Returning Customer? <span>Click here to login</span>
          </p>
          <div className="authentication-buttons bg-light">
            <div className="d-flex justify-content-center  w-100">
              <div className="d-flex rounded-1 ">
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
        <h1>DELIVARY & BILLING INFO</h1>
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12 col-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-6">
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
                    />
                  </div>
                </Box>
              </div>
              <div className="col-lg-6 col-md-6 col-6">
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
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>
                </Box>
              </div>
              <div className="col-lg-6 col-md-6 col-6">
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
                    />
                  </div>
                </Box>
              </div>
              <div className="col-lg-6 col-md-6 col-6">
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
              <div className="col-lg-6 col-md-6 col-6">
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
                      label="Select"
                      defaultValue="EUR"
                      helperText="Please select your currency"
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
              <div className="col-lg-6 col-md-6 col-6">
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
                    />
                  </div>
                </Box>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 col-12"></div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Checkout;
