import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../Header';
import Footer from '../Footer';

import coinImg from '../../img/hero/hero1-coin.png'
import coinImg2 from "../../img/others/cta1-mian-img.png"
import cta1 from "../../img/bg/cta1-shape-bg.png"
import cta2 from "../../img/shapes/blog-shape.png"
import authorImg from "../../img/icons/author.png"
import dateImg from "../../img/icons/date.png"
import blogImg from "../../img/blog/blog1-image3.png"
import blogImg5 from "../../img/blog/blog1-image2.png"
import blogImg6 from "../../img/blog/blog1-image1.png"
import mapimg from "../../img/testimonial/map.png"
import mapimg1 from "../../img/testimonial/tes1-img1.png"
import mapimg2 from "../../img/testimonial/tes1-img2.png"
import mapimg3 from "../../img/testimonial/tes1-img3.png"
import mapimg4 from "../../img/testimonial/tes1-img4.png"
import mapimg5 from "../../img/testimonial/tes1-img5.png"
import mapimg6 from "../../img/testimonial/tes1-img6.png"
import testicon from "../../img/icons/tes1-icon.png"
import bankicon1 from "../../img/icons/bank1.svg"
import bankicon2 from "../../img/icons/bank2.svg"
import bankicon3 from "../../img/icons/bank3.svg"
import heromob from "../../img/hero/hero1-mobile1.png"
import heromob1 from "../../img/hero/hero1-mobile2.png"
import heromob2 from "../../img/hero/hero1-mobile3.png"
import heromain from "../../img/hero/hero1-main.png"
import app1 from "../../img/hero/app1.png"
import app2 from "../../img/hero/app2.png"
import appqr from "../../img/hero/qr.png"
import appARROW from "../../img/shapes/arrow.png"
import about1 from "../../img/bg/about1-shape-bg.png"
import about2 from "../../img/shapes/about1-shape.png"
import about3 from "../../img/about/about1-img1.png"
import about4 from "../../img/about/about1-img2.png"
import about5 from "../../img/about/about1-img3.png"
import abouticon1 from "../../img/icons/about1-icon1.svg"
import abouticon2 from "../../img/icons/about1-icon2.svg"
import fact from "../../img/icons/fact-icon1.svg"
import fact2 from "../../img/icons/fact-icon2.svg"
import fact3 from "../../img/icons/fact-icon3.svg"
import footerimg from "../../img/shapes/footer-shape2.png"
import footer5 from "../../img/shapes/footer-shape5.png"
import footer4 from "../../img/shapes/footer-shape4.png"
import footer1 from "../../img/shapes/footer-shape1.png"
import marketing from "../../img/logo/marketing-logo1.png"
import marketing2 from "../../img/logo/marketing-logo2.png"
import marketing3 from "../../img/logo/marketing-logo3.png"
import marketing4 from "../../img/logo/marketing-logo4.png"
import marketing5 from "../../img/logo/marketing-logo5.png"
import marketing6 from "../../img/logo/marketing-logo5.png"
import service from "../../img/icons/service1-icon1.svg"
import service1 from "../../img/icons/service1-icon2.svg"
import service2 from "../../img/service/service1-main-img.png"
import service3 from "../../img/service/service1-img-shape1.png"
import service4 from "../../img/service/service1-img-shape2.png"
import service5 from "../../img/shapes/service1-shape1.png"
import service6 from "../../img/shapes/service1-shape2.png"
import service7 from "../../img/shapes/service1-shape3.png"
import service8 from "../../img/shapes/service1-shape4.png"
import service9 from "../../img/icons/service1-icon3.svg"
import service10 from "../../img/icons/service1-icon4.svg"
import work from "../../img/work/work1-img1.png"
import work1 from "../../img/work/work1-img2.png"
import work2 from "../../img/work/work1-img3.png"
import appleicon from "../../img/others/apple-btn.png"
import gglicon from "../../img/others/goole-btn.png"
import mobbg from "../../img/bg/mobile-image-bg.png"
import mobarea from "../../img/others/mobile-area-img.png"
import mobareacoin from "../../img/others/mobile-area-coin.png"
import mobqr from "../../img/others/mobile-area-qr.png"
import mobshape from "../../img/shapes/mobile-area-shape.png"
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Singlepage = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,  // You can set the duration here or directly in the HTML as data-aos-duration
        });
    }, []);

    return (
        <>
            <Header />
            <div class="hero-area1" style={{ backgroundImage: `url(${require('../../img/bg/hero1-bg.png')})` }}>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5">
                            <div class="main-heading">
                                <span class="span" data-aos="fade-right" data-aos-duration="800">Invest in the Future of PayCoin</span>
                                <h1>Crypto Exchange With PayCoin App</h1>
                                <div class="space16"></div>
                                <p data-aos="fade-right" data-aos-duration="1000">At PayCoin, we're committed to providing you with at a cutting-edge trading experience a  that goes beyond.</p>
                                <div class="subscribe-form">
                                    <form action="#" data-aos="fade-right" data-aos-duration="1200">
                                        <input type="email" placeholder="Email Address" />
                                        <div class="button">
                                            <button class="theme-btn1 btn btn--ripple ripple">Get Started <i class="fa-solid fa-arrow-right"></i></button>
                                        </div>
                                    </form>
                                    <div class="pay-option" data-aos="fade-right" data-aos-duration="1400">
                                        <ul>
                                            <li class="text">Buy Crypto With:</li>
                                            <li><a href="#"><img src={bankicon1} alt="" /></a></li>
                                            <li><a href="#"><img src={bankicon2} alt="" /></a></li>
                                            <li><a href="#"><img src={bankicon3} alt="" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-7">
                            <div class="hero1-images">
                                <div class="mobile-all-imges">
                                    <div class="mobile-image1 reveal">
                                        <img src={heromob} alt="" />
                                    </div>
                                    <div class="mobile-image2 animate1">
                                        <img src={heromob1} alt="" />
                                    </div>
                                    <div class="mobile-image3 animate3">
                                        <img src={heromob2} alt="" />
                                    </div>
                                </div>

                                <div class="main-images">
                                    <div class="main-img1">
                                        <img src={coinImg} alt="" />
                                    </div>
                                    <div class="main-img2 reveal">
                                        <img src={heromain} alt="" />
                                    </div>
                                    <div class="app-btn1">
                                        <a href="#"><img src={app1} alt="" /></a>
                                    </div>
                                    <div class="app-btn2">
                                        <a href="#"><img src={app2} alt="" /></a>
                                    </div>
                                    <div class="qr-code">
                                        <img src={appqr} alt="" />
                                    </div>
                                    <div class="shape animate1">
                                        <img src={appARROW} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">

                <div class="about1 sp" id="about">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="about1-images">
                                    <div class="image1">
                                        <img src={about1} alt="" />
                                    </div>
                                    <div class="image2">
                                        <img src={about2} alt="" />
                                    </div>
                                    <div class="image3 animate1">
                                        <img src={about3} alt="" />
                                    </div>
                                    <div class="image4 animate4" data-aos="fade-up" data-aos-duration="800">
                                        <img src={about4} alt="" />
                                    </div>
                                    <div class="image5 animate3" data-aos="fade-up" data-aos-duration="1000">
                                        <img src={about5} alt="" />
                                    </div>

                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="heading1">
                                    <span class="span" data-aos="fade-left" data-aos-duration="800">WHY ChOOSE PAYCOIN</span>
                                    <h2 class="text-anime-style-3">Where Innovation Meets Cryptocurrency Trading</h2>
                                    <div class="space16"></div>
                                    <p data-aos="fade-left" data-aos-duration="800">At PayCoin, we pride ourselves on offering a user-friendly platform that caters to both novice traders & seasoned PayCoin investors.</p>

                                    <div class="" data-aos="fade-left" data-aos-duration="1000">
                                        <div class="icon-box">
                                            <div class="">
                                                <div class="icon">
                                                    <img src={abouticon1} alt="" />
                                                </div>
                                            </div>
                                            <div class="heading1">
                                                <h5><a href="#">Crypto Exchange Safely</a></h5>
                                                <p>Our platform built on cutting-edge technology, ensuring lightning-fast transactions real-time.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="" data-aos="fade-left" data-aos-duration="1200">
                                        <div class="icon-box">
                                            <div class="">
                                                <div class="icon">
                                                    <img src={abouticon2} alt="" />
                                                </div>
                                            </div>
                                            <div class="heading1">
                                                <h5><a href="#">Mobile App Support</a></h5>
                                                <p>Our platform built on cutting-edge technology, ensuring lightning-fast transactions real-time.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fact sp" id="fact" style={{ backgroundImage: `url(${require('../../img/bg/fact1-bg.png')})` }}>
                    <div class="container face-contact">
                        <div class="row">
                            <div class="col-lg-10 m-auto">
                                <div class="heading1 text-center">
                                    <span class="span" data-aos="zoom-in-left" data-aos-duration="700">Fact PayCOIn Crypto Exchange</span>
                                    <h2 class="text-anime-style-3">Exchange Crypto Securely</h2>
                                </div>

                                <div class="space60"></div>
                                <div class="boxs-area" data-aos="zoom-in-up" data-aos-duration="900">
                                    <div class="single-box">
                                        <p><img src={fact} alt="" /> Bitcoin Sell</p>
                                        <h3><span class="counter">10</span>B+</h3>
                                    </div>
                                    <div class="single-box">
                                        <p><img src={fact2} alt="" /> Digital ../..</p>
                                        <h3><span class="counter">100</span>M+</h3>
                                    </div>
                                    <div class="single-box no">
                                        <p><img src={fact3} alt="" /> Happy User</p>
                                        <h3><span class="counter">20</span>M+</h3>
                                    </div>

                                    <img class="box-shape1 animate3" src={footerimg} alt="" />
                                    <img class="box-shape2" src={footer5} alt="" />
                                    <img class="box-shape3 animate1" src={footer5} alt="" />
                                </div>
                            </div>
                        </div>
                        <img class="shape1 animate3" src={footer4} alt="" />
                        <img class="shape2 animate4" src={footer1} alt="" />
                    </div>
                </div>

                <section class="coin-list sp" id="market">
                    <div class="container">

                        <div class="row">
                            <div class="col-lg-8 m-auto text-center">
                                <div class="heading1">
                                    <span class="span" data-aos="zoom-in-left" data-aos-duration="700">BItCoin Market update</span>
                                    <h2 class="text-anime-style-3">Cryptocurrency Market Update</h2>
                                </div>
                            </div>
                        </div>

                        <div class="space20"></div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="coin-list__main" data-aos="fade-up" data-aos-duration="800">
                                    <div class="flat-tabs">
                                        <div class="content-tab">
                                            <div class="content-inner">
                                                <table class="table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col"></th>
                                                            <th scope="col">Name/Pair</th>
                                                            <th scope="col">Last Price</th>
                                                            <th scope="col">24 Change</th>
                                                            <th scope="col">Chart</th>
                                                            <th scope="col">Trade</th>
                                                            <th scope="col"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr class="spacer">
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><span class="icon-star"><FontAwesomeIcon icon={faStar} /></span></th>
                                                            <td>
                                                                <a href="#" style={{ marginTop: "25px" }}>
                                                                    <img src={marketing} alt="" />
                                                                    <span>BitCoin (BSTD)</span>
                                                                </a>
                                                            </td>
                                                            <td class="boild" style={{ paddingTop: "35px" }}>$56,623.54</td>
                                                            <td class="up" style={{ paddingTop: "35px" }}>+0.07%</td>
                                                            <td><div id="total-revenue-chart-1"></div></td>
                                                            <td><a href="#" class="btn" style={{ marginTop: "17px" }}>Trade</a></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr class="spacer">
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><span class="icon-star"><FontAwesomeIcon icon={faStar} /></span></th>
                                                            <td>
                                                                <a href="#" style={{ marginTop: "25px" }}>
                                                                    <img src={marketing2} alt="" />
                                                                    <span>Ethereum (ETH)</span>
                                                                </a>
                                                            </td>
                                                            <td class="boild" style={{ paddingTop: "35px" }}>$56,000.54</td>
                                                            <td class="up" style={{ paddingTop: "35px" }}>+0.37%</td>
                                                            <td><div id="total-revenue-chart-2"></div></td>
                                                            <td><a href="#" class="btn" style={{ marginTop: "17px" }}>Trade</a></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr class="spacer">
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><span class="icon-star"><FontAwesomeIcon icon={faStar} /></span></th>
                                                            <td>
                                                                <a href="#" style={{ marginTop: "25px" }}>
                                                                    <img src={marketing3} alt="" />
                                                                    <span>Binance (BNB)</span>
                                                                </a>
                                                            </td>
                                                            <td class="boild" style={{ paddingTop: "35px" }}>$56,123.54</td>
                                                            <td class="up" style={{ paddingTop: "35px" }}>+0.17%</td>
                                                            <td><div id="total-revenue-chart-3"></div></td>
                                                            <td><a href="#" class="btn" style={{ marginTop: "17px" }}>Trade</a></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr class="spacer">
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><span class="icon-star"><FontAwesomeIcon icon={faStar} /></span></th>
                                                            <td>
                                                                <a href="#" style={{ marginTop: "25px" }}>
                                                                    <img src={marketing4} alt="" />
                                                                    <span>Tether (USDT)</span>
                                                                </a>
                                                            </td>
                                                            <td class="boild" style={{ paddingTop: "35px" }}>$56,343.54</td>
                                                            <td class="up" style={{ paddingTop: "35px" }}>+0.27%</td>
                                                            <td><div id="total-revenue-chart-4"></div></td>
                                                            <td><a href="#" class="btn" style={{ marginTop: "17px" }}>Trade</a></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr class="spacer">
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><span class="icon-star"><FontAwesomeIcon icon={faStar} /></span></th>
                                                            <td>
                                                                <a href="#" style={{ marginTop: "25px" }}>
                                                                    <img src={marketing5} alt="" />
                                                                    <span>Solana (SOL)</span>
                                                                </a>
                                                            </td>
                                                            <td class="boild" style={{ paddingTop: "35px" }}>$200.04</td>
                                                            <td class="down" style={{ paddingTop: "35px" }}>-0.44%</td>
                                                            <td><div id="total-revenue-chart-5"></div></td>
                                                            <td><a href="#" class="btn" style={{ marginTop: "17px" }}>Trade</a></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr class="spacer">
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><span class="icon-star"><FontAwesomeIcon icon={faStar} /></span></th>
                                                            <td>
                                                                <a href="#" style={{ marginTop: "25px" }}>
                                                                    <img src={marketing6} alt="" />
                                                                    <span>USD Coin (USDC)</span>
                                                                </a>
                                                            </td>
                                                            <td class="boild" style={{ paddingTop: "35px" }}>$181.00</td>
                                                            <td class="down" style={{ paddingTop: "35px" }}>-0.03%</td>
                                                            <td><div id="total-revenue-chart-6"></div></td>
                                                            <td><a href="#" class="btn" style={{ marginTop: "17px" }}>Trade</a></td>
                                                            <td></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="buy-sell sp" style={{ backgroundImage: `url(${require('../../img/bg/cta1-bg.png')})` }}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 m-auto text-center">
                                <div class="heading1-w">
                                    <span class="span" data-aos="zoom-in-left" data-aos-duration="700">Buy and Sell BITCOIN</span>
                                    <h2 class="text-anime-style-3">The Simple Way Buy & Sell Coin</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="buy-sell-bottom">
                    <div class="container">
                        <div class="bg">
                            <div class="row align-items-center">
                                <div class="col-lg-3">
                                    <div class="box-area-all" data-aos="flip-right" data-aos-duration="900">
                                        <div class="icon">
                                            <img src={service} alt="" />
                                        </div>
                                        <div class="single-box heading1">
                                            <h5><a href="#">Trade Local Currency</a></h5>
                                            <div class="space10"></div>
                                            <p>With our intuitive interface and robust features, you buy, sell.</p>
                                        </div>
                                    </div>

                                    <div class="space50"></div>
                                    <div class="box-area-all box-area-all2" data-aos="flip-right" data-aos-duration="900">
                                        <div class="icon">
                                            <img src={service1} alt="" />
                                        </div>
                                        <div class="single-box heading1">
                                            <h5><a href="#">Largest Coin Offer</a></h5>
                                            <div class="space10"></div>
                                            <p>Plus, our commitment to the security means that PayCoin.</p>
                                        </div>
                                    </div>

                                </div>

                                <div class="col-lg-6">
                                    <div class="service1-main-images" data-aos="zoom-out" data-aos-duration="900">
                                        <div class="image1">
                                            <img src={service2} alt="" />
                                        </div>

                                        <div class="image2">
                                            <img src={service3} alt="" />
                                        </div>

                                        <div class="image3">
                                            <img src={service4} alt="" />
                                        </div>

                                        <div class="shape1">
                                            <img src={service5} alt="" />
                                        </div>

                                        <div class="shape2">
                                            <img src={service6} alt="" />
                                        </div>

                                        <div class="shape3">
                                            <img src={service7} alt="" />
                                        </div>

                                        <div class="shape4">
                                            <img src={service8} alt="" />
                                        </div>

                                    </div>
                                </div>

                                <div class="col-lg-3">
                                    <div class="box-area-all box-area-all3" data-aos="flip-right" data-aos-duration="900">
                                        <div class="icon">
                                            <img src={service9} alt="" />
                                        </div>
                                        <div class="single-box heading1">
                                            <h5><a href="#">Safe And Secure</a></h5>
                                            <div class="space10"></div>
                                            <p>Trusted partner in the world of crypto trading Join us today.</p>
                                        </div>
                                    </div>

                                    <div class="space50"></div>
                                    <div class="box-area-all box-area-all4" data-aos="flip-right" data-aos-duration="900">
                                        <div class="icon">
                                            <img src={service10} alt="" />
                                        </div>
                                        <div class="single-box heading1">
                                            <h5><a href="#">Trade For Anywhere</a></h5>
                                            <div class="space10"></div>
                                            <p>Resources designed to help
                                                navigate best the dynamic</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="space100"></div>

                <div class="work1 sp" id="work">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 m-auto text-center">
                                <div class="heading1">
                                    <span class="span" data-aos="zoom-in-left" data-aos-duration="700">how it works</span>
                                    <h2 class="text-anime-style-3">Buy Bitcoin In 3 Steps</h2>
                                </div>
                            </div>
                        </div>

                        <div class="space30"></div>
                        <div class="row work-top">
                            <div class="col-lg-4 col-md-6">
                                <div class="work-box-area" data-aos="zoom-in-up" data-aos-duration="800" data-aos-offset="100">
                                    <span>1</span>
                                    <div class="space50"></div>
                                    <div class="work-box">
                                        <div class="heading1">
                                            <h5><a href="#">Create PayCoin Account</a></h5>
                                            <div class="space16"></div>
                                            <p>Creating account with PayCoin is quick, easy, secure. Simply click to account.</p>
                                        </div>
                                        <div class="image">
                                            <img src={work} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="work-box-area active" data-aos="zoom-in-up" data-aos-duration="1000">
                                    <span>2</span>
                                    <div class="space50"></div>
                                    <div class="work-box">
                                        <div class="heading1">
                                            <h5><a href="#">Create PayCoin Account</a></h5>
                                            <div class="space16"></div>
                                            <p>Creating account with PayCoin is quick, easy, secure. Simply click to account.</p>
                                        </div>
                                        <div class="image">
                                            <img src={work1} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="work-box-area" data-aos="zoom-in-up" data-aos-duration="1200">
                                    <span>3</span>
                                    <div class="space50"></div>
                                    <div class="work-box">
                                        <div class="heading1">
                                            <h5><a href="#">Start PayCoin Investing</a></h5>
                                            <div class="space16"></div>
                                            <p>Creating account with PayCoin is quick, easy, secure. Simply click to account.</p>
                                        </div>
                                        <div class="image">
                                            <img src={work2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="mobile-area sp" style={{ backgroundImage: `url(${require('../../img/bg/cta1-bg.png')})` }}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-5">
                                <div class="heading1-w">
                                    <span class="span" data-aos="zoom-in-left" data-aos-duration="700">mobile version available </span>
                                    <h2 class="text-anime-style-3">Download PayCoin App</h2>
                                    <div class="space16"></div>
                                    <p data-aos="fade-right" data-aos-duration="900">Take your crypto trading experience to the next level with the PayCoin mobile app. Available for download on both iOS and Android devices, our app puts the power crypto trading right in the palm of your hand.</p>
                                    <div class="space30"></div>
                                    <div class="button" data-aos="fade-right" data-aos-duration="1000">
                                        <a href="#"><img src={appleicon} alt="" /></a>
                                        <a href="#"><img src={gglicon} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="mobile-area images">
                                    <div class="bg">
                                        <img src={mobbg} alt="" />
                                    </div>
                                    <div class="main-image">
                                        <img src={mobarea} alt="" />
                                    </div>
                                    <div class="coin shape-animaiton4">
                                        <img src={mobareacoin} alt="" />
                                    </div>
                                    <div class="qr">
                                        <img src={mobqr} alt="" />
                                    </div>
                                    <div class="shape animate3">
                                        <img src={mobshape} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="testimonials-2 sp" id="tes">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-md-12 left _relative">
                                <div class="swiper swiper-testimonial-2">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="testimonials-box-2">
                                                <div class="icon">
                                                    <img src={testicon} alt="" />
                                                </div>
                                                <p class="text">
                                                    "I've been trading cryptocurrencies for years, and I've tried many different platforms, but none Coin compare to PayCoin. The user-friendly interface, lightning-fast transactions, and top-notch PayCoin Buy or Sell.”
                                                </p>
                                                <div class="bottom">
                                                    <div class="info">
                                                        <img src={mapimg1} alt="" />
                                                        <div class="content">
                                                            <h6 class="name"><a href="#">Marvin McKinney</a></h6>
                                                            <p class="position">CEO of Startup</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="testimonials-box-2">
                                                <div class="icon">
                                                    <img src={testicon} alt="" />
                                                </div>
                                                <p class="text">
                                                    "I've been trading cryptocurrencies for years, and I've tried many different platforms, but none Coin compare to PayCoin. The user-friendly interface, lightning-fast transactions, and top-notch PayCoin Buy or Sell.”
                                                </p>
                                                <div class="bottom">
                                                    <div class="info">
                                                        <img src={mapimg2} alt="" />
                                                        <div class="content">
                                                            <h6 class="name"><a href="#">Marvin McKinney</a></h6>
                                                            <p class="position">CEO of Startup</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="testimonials-box-2">
                                                <div class="icon">
                                                    <img src={testicon} alt="" />
                                                </div>
                                                <p class="text">
                                                    "I've been trading cryptocurrencies for years, and I've tried many different platforms, but none Coin compare to PayCoin. The user-friendly interface, lightning-fast transactions, and top-notch PayCoin Buy or Sell.”
                                                </p>
                                                <div class="bottom">
                                                    <div class="info">
                                                        <img src={mapimg3} alt="" />
                                                        <div class="content">
                                                            <h6 class="name"><a href="#">Marvin McKinney</a></h6>
                                                            <p class="position">CEO of Startup</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="testimonials-box-2">
                                                <div class="icon">
                                                    <img src={testicon} alt="" />
                                                </div>
                                                <p class="text">
                                                    "I've been trading cryptocurrencies for years, and I've tried many different platforms, but none Coin compare to PayCoin. The user-friendly interface, lightning-fast transactions, and top-notch PayCoin Buy or Sell.”
                                                </p>
                                                <div class="bottom">
                                                    <div class="info">
                                                        <img src={mapimg4} alt="" />
                                                        <div class="content">
                                                            <h6 class="name"><a href="#">Marvin McKinney</a></h6>
                                                            <p class="position">CEO of Startup</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="swiper-slide">
                                            <div class="testimonials-box-2">
                                                <div class="icon">
                                                    <img src={testicon} alt="" />
                                                </div>
                                                <p class="text">
                                                    "I've been trading cryptocurrencies for years, and I've tried many different platforms, but none Coin compare to PayCoin. The user-friendly interface, lightning-fast transactions, and top-notch PayCoin Buy or Sell.”
                                                </p>
                                                <div class="bottom">
                                                    <div class="info">
                                                        <img src={mapimg5} alt="" />
                                                        <div class="content">
                                                            <h6 class="name"><a href="#">Marvin McKinney</a></h6>
                                                            <p class="position">CEO of Startup</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="swiper-slide">
                                            <div class="testimonials-box-2">
                                                <div class="icon">
                                                    <img src={testicon} alt="" />
                                                </div>
                                                <p class="text">
                                                    "I've been trading cryptocurrencies for years, and I've tried many different platforms, but none Coin compare to PayCoin. The user-friendly interface, lightning-fast transactions, and top-notch PayCoin Buy or Sell.”
                                                </p>
                                                <div class="bottom">
                                                    <div class="info">
                                                        <img src={mapimg6} alt="" />
                                                        <div class="content">
                                                            <h6 class="name"><a href="#">Marvin McKinney</a></h6>
                                                            <p class="position">CEO of Startup</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="pagination-buttons">
                                    <div class="swiper-button-next">
                                        <button><i class="fa-solid fa-angle-right"></i></button>
                                    </div>
                                    <div class="swiper-button-prev">
                                        <button><i class="fa-solid fa-angle-left"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-md-12">
                                <div class="map-testimonial">
                                    <img class="map" src={mapimg} alt="" />

                                    <div class="swiper swiper-thumb2">
                                        <div class="swiper-wrapper list-img">
                                            <div class="swiper-slide">
                                                <div>
                                                    <img src={mapimg1} alt="" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div><img src={mapimg2} alt="" /></div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div><img src={mapimg3} alt="" /></div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div><img src={mapimg4} alt="" /></div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div><img src={mapimg5} alt="" /></div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div><img src={mapimg6} alt="" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="blog1 sp" id="blog">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 m-auto text-center">
                                <div class="heading1">
                                    <span class="span" data-aos="zoom-in-left" data-aos-duration="700">Our Blog</span>
                                    <h2 class="text-anime-style-3">Latest Blog & News</h2>
                                </div>
                            </div>
                        </div>

                        <div class="space30"></div>
                        <div class="row">
                            <div class="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration="800" data-aos-offset="100">
                                <div class="blog-box">
                                    <div class="image img100 image-anime">
                                        <img src={blogImg6} alt="" />
                                    </div>
                                    <div class="tags">
                                        <a href="#"><img src={authorImg} alt="" /> Alex Robertson</a>
                                        <a href="#"><img src={dateImg} alt="" /> 7/31/2023</a>
                                    </div>
                                    <div class="heading1">
                                        <h5><a href="blog-details.html">The Power of Diversification in Cryptocurrency on Investment</a></h5>
                                        <div class="space16"></div>
                                        <p>In today's dynamic financial landscape, a cryptocurrency trading has emerged as.</p>
                                        <div class="space16"></div>
                                        <a href="blog-details.html" class="learn">Read More <span><i class="fa-solid fa-arrow-right"></i></span></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-offset="100">
                                <div class="blog-box">
                                    <div class="image img100 image-anime">
                                        <img src={blogImg5} alt="" />
                                    </div>
                                    <div class="tags">
                                        <a href="#"><img src={authorImg} alt="" /> Alex Robertson</a>
                                        <a href="#"><img src={dateImg} alt="" /> 7/31/2023</a>
                                    </div>
                                    <div class="heading1">
                                        <h5><a href="blog-details.html">The Best Ultimate Crypto Trading Handbook: Strategies, Tips More</a></h5>
                                        <div class="space16"></div>
                                        <p>In today's dynamic financial landscape, a cryptocurrency trading has emerged as.</p>
                                        <div class="space16"></div>
                                        <a href="blog-details.html" class="learn">Read More <span><i class="fa-solid fa-arrow-right"></i></span></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration="1100" data-aos-offset="100">
                                <div class="blog-box">
                                    <div class="image img100 image-anime">
                                        <img src={blogImg} alt="" />
                                    </div>
                                    <div class="tags">
                                        <a href="#"><img src={authorImg} alt="" /> Alex Robertson</a>
                                        <a href="#"><img src={dateImg} alt="" /> 7/31/2023</a>
                                    </div>
                                    <div class="heading1">
                                        <h5><a href="blog-details.html">The Benefits of Diversification in Cryptocurrency Investment</a></h5>
                                        <div class="space16"></div>
                                        <p>In today's dynamic financial landscape, a cryptocurrency trading has emerged as.</p>
                                        <div class="space16"></div>
                                        <a href="blog-details.html" class="learn">Read More <span><i class="fa-solid fa-arrow-right"></i></span></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <img src={cta2} alt="" class="shape" />
                </div>


            </div>


            <div class="cta1" style={{ backgroundImage: `url(${require('../../img/bg/cta1-bg.png')})` }}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="heading1-w">
                                <h2>Join Our Investment Area</h2>
                                <div class="space16"></div>
                                <p>Take your crypto trading experience to the next level with the PayCoin mobile app. Available for download on both iOS and Android devices, our app puts the power crypto trading right in the palm of your hand.</p>

                                <div class="space30"></div>
                                <div class="buttons">
                                    <a class="theme-btn1 btn2 btn--ripple ripple" href="register.html">Sign Up Now <FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} /></a>
                                    <a class="theme-btn1 btn3 btn--ripple ripple" href="market.html">Explore PayCoin Market <FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} /></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="cta1-all-imags">
                                <div class="image1">
                                    <img src={cta1} alt="" />
                                </div>
                                <div class="image2">
                                    <img src={coinImg2} alt="" />
                                </div>
                                <div class="coin-img">
                                    <img src={coinImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Singlepage