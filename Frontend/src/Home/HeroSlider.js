import React, { Component, useEffect, useRef, useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import hero from "../images/hero.png";
import hero2 from "../images/hero2.png";
import "./HeroSlider.css";
import axios from "axios";

function HeroSlider() {
    const [HeroSliders,setHeroSliders]=useState([]);
    console.log('hero sliders',HeroSliders)
    useEffect(()=>{
        axios.get(`/api/v1/marketplace/slider/home-small-banner`).then(res => {
            if (res.status == 200) {
                setHeroSliders(res.data.data);


            }
        })
    },[])
    return (
        <>

            <Carousel autoPlay={true} showThumbs={false} showArrows={false}
                dynamicHeight={false} swipeable={true}
                emulateTouch={true} infiniteLoop={true}
                dots={false}
                showStatus={false}
                interval={10000}
                dotVerticalPosition="right"
                dotVerticalAlign="center"


            >
                {
                    HeroSliders.map((item,i)=>{
                        return(
                            <>
                                   <div>
                    <img src={`https://s3-ap-southeast-1.amazonaws.com/bbt.demo/${item.image}`} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                            </>
                        )
                    })
                }
                
            </Carousel>
        </>

    )
}
export default HeroSlider