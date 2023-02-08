import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import hero from "../images/hero.png";
import hero2 from "../images/hero2.png";
import "./HeroSlider.css";

function HeroSlider() {
    return (
        <>

            <Carousel autoPlay={true} showThumbs={false} showArrows={false}
                dynamicHeight={false} swipeable={true}
                emulateTouch={true} infiniteLoop={true}
                dots={false}
                showStatus={false}

                dotVerticalPosition="right"
                dotVerticalAlign="center"


            >
                <div>
                    <img src="http://2.bp.blogspot.com/-tIn2KLvryHc/U73jHiyUwYI/AAAAAAAABjM/GlBN6nvEb4M/w1200-h630-p-k-no-nu/Web-Slide5.jpg" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="https://i0.wp.com/www.nogorpolli.com/wp-content/uploads/2018/12/richman-is-a-contemporary-fashion-clothing-brand-in-bangladesh-nogorpolli-%E0%A6%A8%E0%A6%97%E0%A6%B0-%E0%A6%AA%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A7%80-nogor-polli-apparel-clothing-fashion-store.png?fit=1200%2C630&ssl=1" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="https://www.nogorpolli.com/wp-content/uploads/2018/12/yellow-is-the-most-innovative-clothing-brand-in-bangladesh-nogorpolli-%E0%A6%A8%E0%A6%97%E0%A6%B0-%E0%A6%AA%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A7%80-nogor-polli-apparel-clothing-fashion-store.png" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </>

    )
}
export default HeroSlider