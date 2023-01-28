// import "./BrowserCatagories.css";
// import React, { Component, useRef, useState } from "react";
// import Slider from "react-slick";
// import img1 from "../../images/img-Tshirt.jpg";
// import img2 from "../../images/img-panjabi.jpg";
// import img3 from "../../images/img-Women-dress.jpg";
// import img4 from "../../images/img-Women-sandle.jpg";
// import img5 from "../../images/img-Tshirt2.jpg";
// import img6 from "../../images/img-neckless.jpg";
// import img7 from "../../images/img-Women-Dress2.jpg";
// import img8 from "../../images/white Tshirt.jpg";
// import img9 from "../../images/img-panjabi-white.jpg";
// import img10 from "../../images/img-panjabi-pink.jpg";
// import img11 from "../../images/white Tshirt.jpg";
// import img12 from "../../images/white Tshirt.jpg";

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import { Pagination, Navigation } from "swiper";

// // const bCatagoriesbg = {
// //   background: `url(${img1})`,
// //   backgroundRepeat: "no-repeat",
// //   position: "relative",
// //   backgroundSize: "cover",
// //   overFlowX: "hiden",
// // };

// export default class BrowserCatagories extends Component {
//   render() {
//     const settings = {
//       infinite: true,
//       slidesToShow: 5,
//       slidesToScroll: 1,
//       autoplay: true,
//       speed: 2000,
//       autoplaySpeed: 2000,
//       cssEase: "linear",
//       overflowX: "hidden",
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//           },
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2,
//           },
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//           },
//         },
//       ],
//     };

//     // Best Selling
//     var style = {
//       infinite: true,
//       slidesToShow: 4,
//       marginLeft: 10,
//       slidesToScroll: 1,
//       autoplay: false,
//       speed: 2000,
//       autoplaySpeed: 2000,
//       cssEase: "linear",
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//           },
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2,
//           },
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//           },
//         },
//       ],
//     };
//     return (
//       <div>
//         {/* Browse Our Catagories */}

//         <div className="Name-tag-div1">
//           <div className="Name-tag-div2">
//             <h2 className="Name-tag">Browse Our Catagories</h2>
//           </div>
//         </div>

//         <div className="check-1">
//           <div className="check-2"></div>
//         </div>
//         <Slider {...settings}>
//           <div className="single-slider">
//             <img className="bcimages img-fluid" src={img1} />
//             <div className="bc-button-div">
//               <button className="bc-button">T-Shirt</button>
//             </div>
//           </div>
//           <div className="single-slider">
//             <img className="bcimages img-fluid" src={img2} />
//             <div className="bc-button-div">
//               <button className="bc-button">Men-Panjabi</button>
//             </div>
//           </div>
//           <div className="single-slider">
//             <img className="bcimages img-fluid" src={img3} />
//             <div className="bc-button-div">
//               <button className="bc-button">Women-Dress</button>
//             </div>
//           </div>
//           <div className="single-slider">
//             <img className="bcimages img-fluid" src={img4} />
//             <div className="bc-button-div">
//               <button className="bc-button">Women-Sandle</button>
//             </div>
//           </div>
//           <div className="single-slider">
//             <img className="bcimages img-fluid" src={img5} />
//             <div className="bc-button-div">
//               <button className="bc-button">T-Shirt</button>
//             </div>
//           </div>
//           <div className="single-slider">
//             <img
//               className="bcimages img-fluid"
//               style={{ borderRadius: 10 }}
//               src={img6}
//             />
//             <div className="bc-button-div">
//               <button className="bc-button">Neckless</button>
//             </div>
//           </div>
//           <div className="single-slider">
//             <img className="bcimages img-fluid" src={img7} />
//             <div className="bc-button-div">
//               <button className="bc-button">Women-Dress</button>
//             </div>
//           </div>
//         </Slider>

//         {/* Best Selling  */}
//         <div>
//           <div className="Name-tag-div1">
//             <div className="Name-tag-div2">
//               <h2 className="Name-tag">BEST SELLING PRODUCT</h2>
//             </div>
//           </div>

//           <div className="check-1">
//             <div className="check-2"></div>
//           </div>

//           <Slider {...style} className="container mt-5">
//             <div className="card">
//               <img src={img8} className="card-img-top img-fluid" alt="..." />
//               <ul className="check-inputs">
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bG-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bB-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bM-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bP-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bR-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//               </ul>
//               <div className="card-body">
//                 <p className="card-text">
//                   Premium Quality Solid T-Shirt For Men
//                 </p>
//                 <h5 className="card-title">Tk. 350</h5>
//                 <button className="Add-cart-button">Add To card</button>
//               </div>
//             </div>

//             <div className="card">
//               <img src={img8} className="card-img-top img-fluid" alt="..." />
//               <ul className="check-inputs">
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bG-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bB-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bM-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bP-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bR-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//               </ul>
//               <div className="card-body">
//                 <p className="card-text">
//                   Premium Quality Solid T-Shirt For Men
//                 </p>
//                 <h5 className="card-title">Tk. 350</h5>
//                 <button className="Add-cart-button">Add To card</button>
//               </div>
//             </div>
//             <div className="card">
//               <img src={img8} className="card-img-top img-fluid" alt="..." />
//               <ul className="check-inputs">
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bG-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bB-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bM-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bP-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bR-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//               </ul>
//               <div className="card-body">
//                 <p className="card-text">
//                   Premium Quality Solid T-Shirt For Men
//                 </p>
//                 <h5 className="card-title">Tk. 350</h5>
//                 <button className="Add-cart-button">Add To card</button>
//               </div>
//             </div>
//             <div className="card">
//               <img src={img8} className="card-img-top img-fluid" alt="..." />
//               <ul className="check-inputs">
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bG-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bB-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bM-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bP-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bR-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//               </ul>
//               <div className="card-body">
//                 <p className="card-text">
//                   Premium Quality Solid T-Shirt For Men
//                 </p>
//                 <h5 className="card-title">Tk. 350</h5>
//                 <button className="Add-cart-button">Add To card</button>
//               </div>
//             </div>
//             <div className="card">
//               <img src={img8} className="card-img-top img-fluid" alt="..." />
//               <ul className="check-inputs">
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bG-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bB-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bM-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bP-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bR-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//               </ul>
//               <div className="card-body">
//                 <p className="card-text">
//                   Premium Quality Solid T-Shirt For Men
//                 </p>
//                 <h5 className="card-title">Tk. 350</h5>
//                 <button className="Add-cart-button">Add To card</button>
//               </div>
//             </div>
//             <div className="card">
//               <img src={img8} className="card-img-top img-fluid" alt="..." />
//               <ul className="check-inputs">
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bG-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bB-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bM-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bP-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bR-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//               </ul>
//               <div className="card-body">
//                 <p className="card-text">
//                   Premium Quality Solid T-Shirt For Men
//                 </p>
//                 <h5 className="card-title">Tk. 350</h5>
//                 <button className="Add-cart-button">Add To card</button>
//               </div>
//             </div>
//             <div className="card">
//               <img src={img8} className="card-img-top img-fluid" alt="..." />
//               <ul className="check-inputs">
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bG-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bB-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bM-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bP-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bR-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//               </ul>
//               <div className="card-body">
//                 <p className="card-text">
//                   Premium Quality Solid T-Shirt For Men
//                 </p>
//                 <h5 className="card-title">Tk. 350</h5>
//                 <button className="Add-cart-button">Add To card</button>
//               </div>
//             </div>
//             <div className="card">
//               <img src={img8} className="card-img-top img-fluid" alt="..." />
//               <ul className="check-inputs">
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bG-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bB-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bM-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bP-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input bR-check-input"
//                     type="checkbox"
//                     value=""
//                     id="flexCheckDefault"
//                   />
//                 </div>
//               </ul>
//               <div className="card-body">
//                 <p className="card-text">
//                   Premium Quality Solid T-Shirt For Men
//                 </p>
//                 <h5 className="card-title">Tk. 350</h5>
//                 <button className="Add-cart-button">Add To card</button>
//               </div>
//             </div>
//           </Slider>
//         </div>
//       </div>
//     );
//   }
// }

// // import React from 'react';

// // const BrowserCatagories = () => {
// //     return (
// //         <div>

// //         </div>
// //     );
// // }

// // export default BrowserCatagories;
