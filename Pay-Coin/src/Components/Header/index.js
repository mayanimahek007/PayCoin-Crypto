import React from 'react';
import '../../assets/Css/aos.css'
import '../../assets/Css/bootstrap.min.css'
import '../../assets/Css/fontawesome.css'
import '../../assets/Css/magnific-popup.css'
import '../../assets/Css/main.css'
import '../../assets/Css/mobile-menu.css'
import '../../assets/Css/nice-select.css'
import '../../assets/Css/owl.carousel.min.css'
import '../../assets/Css/slick-slider.css'
import Img1 from "../../img/demo/demo1.png"
import Img2 from "../../img/demo/demo2.png"
import Img3 from "../../img/demo/demo3.png"
import Img4 from "../../img/demo/demo4.png"
import HeaderImg from "../../img/logo/header-logo1.png"
import LoginImg from "../../img/icons/login.png"
import { useNavigate } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/contact')
    }

    return (
        <>
            <div>
                
                <div className="header-area header-area1 header-area-all d-none d-lg-block" id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <a href="/index">
                                            <img src={HeaderImg} alt="" />
                                        </a>
                                    </div>

                                    <div className="main-menu-ex main-menu-ex1">
                                        <ul>
                                            <li><a href="#">Home <i className="fa-solid fa-angle-down"></i></a>
                                                <div className="tp-submenu">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="all-images-menu">
                                                                <div className="homemenu-thumb">
                                                                    <div className="img1">
                                                                        <img src={Img1} alt="" />
                                                                    </div>
                                                                    <div className="homemenu-btn">
                                                                        <a className="header-btn1" href="/index">Multi Page <FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} /></a>
                                                                        <div className="space16"></div>
                                                                        <a className="header-btn1" onClick={()=>navigate('singlePage')} target="_blank">One page <FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} /></a>
                                                                    </div>
                                                                </div>

                                                                <div className="homemenu-thumb">
                                                                    <div className="img1">
                                                                        <img src={Img2} alt="" />
                                                                    </div>
                                                                    <div className="homemenu-btn">
                                                                        <a className="header-btn1" href="index2.html">Multi Page <FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} /></a>
                                                                        <div className="space16"></div>
                                                                        <a className="header-btn1" href="single-index2.html" target="_blank">One page <FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} /></a>
                                                                    </div>
                                                                </div>

                                                                <div className="homemenu-thumb">
                                                                    <div className="img1">
                                                                        <img src={Img3} alt="" />
                                                                    </div>
                                                                    <div className="homemenu-btn">
                                                                        <a className="header-btn1" href="index3.html">Multi Page <FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} /></a>
                                                                        <div className="space16"></div>
                                                                        <a className="header-btn1" href="single-index3.html" target="_blank">One page <FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} /></a>
                                                                    </div>
                                                                </div>

                                                                <div className="homemenu-thumb" style={{ margin: 0 }}>
                                                                    <div className="img1">
                                                                        <img src={Img4} alt="" />
                                                                    </div>
                                                                    <div className="homemenu-btn">
                                                                        <a className="header-btn1" href="index4.html">Multi Page <FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} /></a>
                                                                        <div className="space16"></div>
                                                                        <a className="header-btn1" href="single-index4.html" target="_blank">One page <FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} /></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li><a href="about.html">About Us</a></li>

                                            <li className="dropdown-menu-parrent"><a href="#" className="main1">Market <i className="fa-solid fa-angle-down"></i></a>
                                                <ul>
                                                    <li><a href="market.html">Market Update</a></li>
                                                    <li><a href="buy.html">Buy Crypto</a></li>
                                                    <li><a href="sell.html">Sell Crypto</a></li>
                                                </ul>
                                            </li>

                                            <li className="dropdown-menu-parrent"><a href="#" className="main1">Pages <i className="fa-solid fa-angle-down"></i></a>
                                                <ul>
                                                    <li><a href="contact.html">Contact</a></li>
                                                    <li><a href="faq.html">FAQ</a></li>
                                                    <li><a href="error.html">404</a></li>
                                                </ul>
                                            </li>

                                            <li className="dropdown-menu-parrent"><a href="#" className="main1">Blog <i className="fa-solid fa-angle-down"></i></a>
                                                <ul>
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li className="has-dropdown has-dropdown1"><a href="blog-details.html" className="main">Blog Details<span><i className="fa-solid fa-angle-right"></i></span></a>
                                                        <ul className="sub-menu">
                                                            <li><a href="blog-details-left.html">Details Left</a></li>
                                                            <li><a href="blog-details-right.html">Details Right</a></li>
                                                            <li><a href="blog-details.html">Single Details</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="dropdown-menu-parrent"><a href="#" className="main1">Account <i className="fa-solid fa-angle-down"></i></a>
                                                <ul>
                                                    <li><a href="user.html">My Profile</a></li>
                                                    <li><a href="login.html">Login</a></li>
                                                    <li><a href="register.html">Register</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="header2-buttons">
                                        <div className="button">
                                            <a className="login" onClick={() => navigate('/login')}>Login <img src={LoginImg} alt="" /></a>
                                            <a className="theme-btn1 btn btn--ripple ripple" onClick={() => handleNavigate()} style={{color:"white"}}>Get A Quote <FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} style={{ marginLeft: "5px" }} /></a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
