import React from 'react'
import FooterImg from "../../img/logo/footer-logo1.png"
import Footer2Img from "../../img/shapes/footer-shape2.png"
import Footer3Img from "../../img/shapes/footer-shape3.png"
import Footer4Img from "../../img/shapes/footer-shape4.png"
import Preloader from "../../img/logo/preloader-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="footer1 _relative">
                <div className="container">
                    <div className="footer-bg">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="footer-logo-area">
                                    <a href="/index" className="logo">
                                        <img src={FooterImg} alt="" />
                                    </a>
                                    <div className="space20"></div>
                                    <h5>Join Our Blockchain PayCoin Community</h5>
                                    <div className="space30"></div>
                                    {/* <a className="theme-btn1 btn3 btn--ripple ripple" href="contact.html">Join Now <FontAwesomeIcon icon={faArrowRight} rotation={310} /></a> */}
                                    <a className="theme-btn1 btn3 btn--ripple ripple" onClick={() => navigate('/contact')} >
                                        Join Now <FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} style={{ marginLeft: "5px" }} />
                                    </a>

                                </div>
                            </div>

                            <div className="col-lg col-md-4 col-6">
                                <div className="single-footer-items">
                                    <h3>Explore</h3>

                                    <ul className="menu-list">
                                        <li><a href="#">Tokens Sale</a></li>
                                        <li><a href="#">Ecosystem</a></li>
                                        <li><a href="#">Wallets Sale </a></li>
                                        <li><a href="#">Gravity Dex</a></li>
                                        <li><a href="#">Whitepaper</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg col-md-4 col-6">
                                <div className="single-footer-items">
                                    <h3>Solution</h3>

                                    <ul className="menu-list">
                                        <li><a href="#">Token Suite</a></li>
                                        <li><a href="#">Work Process</a></li>
                                        <li><a href="#">Wallets Sale </a></li>
                                        <li><a href="#">Tokenisation</a></li>
                                        <li><a href="#">Portal Token</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg col-md-4 col-6">
                                <div className="single-footer-items">
                                    <h3>Quick Links</h3>

                                    <ul className="menu-list">
                                        <li><a href="#">Our Features </a></li>
                                        <li><a href="#">Why Blockchain</a></li>
                                        <li><a href="blog.html">Our Blog</a></li>
                                        <li><a href="testimonial.html">Introduction</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>


                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="single-footer-items">
                                    <h3>Need Help?</h3>

                                    <ul className="contact-info">
                                        <li><a href="tel:+(1)1234567890">+(1) 123 456 7890</a></li>
                                        <li><a href="mailto:paycoindemo@.com">paycoindemo@.com</a></li>
                                        <li><a href="#">paycoinwebsite.com</a></li>
                                    </ul>

                                    <ul className="icons">
                                        <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faGooglePlusG} /></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <img className="footer-shape1" src={Footer4Img} alt="" />
                        <img className="footer-shape2" src={Footer2Img} alt="" />
                        <img className="footer-shape3" src={Footer3Img} alt="" />
                        <img className="footer-shape4" src={Footer4Img} alt="" />
                    </div>
                    <div className="space70"></div>
                </div>

                <div className="copyright-area _relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="coppyright">
                                    <p>Copyright © 2024 PayCoin crypto theme. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer