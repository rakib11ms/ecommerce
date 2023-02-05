import "../Home/Home.css";
import footer from "../images/footer_page.png";

function Footer() {
    return (
        <>
            <footer className="contatiner-fluid footer-whole-wrapper text-white  mt-5">
                <div className="footer-background-image">
                    <img src="https://t4.ftcdn.net/jpg/05/00/76/75/360_F_500767502_AdezwSUsyb04l79RpV6zubKulRnIHpd0.jpg" />
                </div>


                <div className="footer-wrapper pt-5">


                    <div className="">
                        <div className="footer-company-image">
                            {/* <img src="" /> */}

                            <h3>Company Name
                            </h3>
                        </div>
                        <h5 className="mt-4 fw-bold fs-4 " style={{ color: "rgb(158, 123, 57)" }}>+88 0123123123</h5>
                        <p className="mb-2">Worktime: SAT- FRI, 10AM -11 PM</p>

                        <div className="footer-social-icons-wrapper">

                            <div className="footer-social-icons">
                                <i className="footer-social-icon-items fab fa-facebook"></i>

                            </div>
                            <div className="footer-social-icons mx-2">
                                <i className="footer-social-icon-items fab fa-instagram mx-1"></i>

                            </div>
                            <div className="footer-social-icons mx-2">
                                <i className="footer-social-icon-items fab fa-whatsapp mx-1"></i>

                            </div>
                            <div className="footer-social-icons mx-2">
                                <i className="footer-social-icon-items fab fa-instagram mx-1"></i>

                            </div>

                        </div>
                    </div>

                    <div className="">
                        <h6 className="text-color-footer">INFORMATION</h6>

                        <div className="footer-li mt-3 ">
                            <li className="my-2 fw-bold ">About Us</li>
                            <li className="my-2 fw-bold ">Privacy Policy</li>
                            <li className="my-2 fw-bold ">Shipping Information</li>
                            <li className="my-2 fw-bold ">Return & Exchange Policy</li>
                            <li className="my-2 fw-bold ">Contact Us</li>
                            <li className="my-2 fw-bold ">FAQs</li>
                        </div>
                    </div>

                    <div className="footer-contact-text">
                        <h6 className="text-color-footer">CONTACT INFO</h6>

                        <div className="mt-3">
                            <span className="my-1 text-justify ">98/2,Vista Garden (3rd-Floor) , Shepara,Parbata , Mirpur-10,Dhaka-1216,Bangladesh.
                            </span>
                            <p className="mt-2">manfaredbd@gmail.com

                            </p>



                            <div className="">
                                <p className="my-0 mx-5 ">091823128123</p>

                                <p className="my-0">0177-8749534 | 0177-8749534</p>
                                <p className="my-0">0177-8749534| 0177-8749534</p>
                            </div>
                        </div>
                    </div>
                    <div className="">

                        <div className="mt-3 px-5">
                            <img src={footer} style={{ width: '100%', height: '100%' }} />
                        </div>
                    </div>
                </div>

            </footer>


        </>

    )
}
export default Footer