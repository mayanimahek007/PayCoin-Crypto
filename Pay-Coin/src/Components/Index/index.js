import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Chart/chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import heroImg from '../../img/bg/cta1-shape-bg.png'
import heroImg1 from '../../img/others/cta1-mian-img.png'
import heroImg2 from '../../img/hero/hero1-coin.png'
import heroImg3 from '../../img/hero/hero1-main.png'
import appimg1 from '../../img/hero/app1.png'
import appimg2 from '../../img/hero/app2.png'
import qrimg from '../../img/hero/qr.png'
import ShapeImg from '../../img/shapes/blog-shape.png'
import blogImg from '../../img/blog/blog1-image3.png'
import blogImg1 from '../../img/blog/blog1-image2.png'
import blogImg2 from '../../img/blog/blog1-image1.png'
import iconImg from '../../img/icons/author.png'
import iconImg1 from '../../img/icons/date.png'
import iconImg2 from '../../img/icons/tes1-icon.png'
import mapImg1 from '../../img/testimonial/map.png'
import mapImg2 from '../../img/testimonial/tes1-img1.png'
import mapImg3 from '../../img/testimonial/tes1-img2.png'
import mapImg4 from '../../img/testimonial/tes1-img3.png'
import mapImg5 from '../../img/testimonial/tes1-img4.png'
import mapImg6 from '../../img/testimonial/tes1-img5.png'
import mapImg7 from '../../img/testimonial/tes1-img6.png'
import bg from '../../img/bg/mobile-image-bg.png'
import other1 from '../../img/others/mobile-area-img.png'
import other2 from '../../img/others/mobile-area-coin.png'
import other3 from '../../img/others/mobile-area-qr.png'
import appleImg from '../../img/others/apple-btn.png'
import GoogleImg from '../../img/others/goole-btn.png'
import ShapeImg2 from '../../img/shapes/mobile-area-shape.png'
import ShapeImg3 from '../../img/shapes/service1-shape1.png'
import ShapeImg4 from '../../img/shapes/service1-shape2.png'
import ShapeImg5 from '../../img/shapes/service1-shape3.png'
import ShapeImg6 from '../../img/shapes/service1-shape4.png'
import arrowimg from '../../img/shapes/arrow.png'
import workImg from '../../img/work/work1-img3.png'
import workImg2 from '../../img/work/work1-img2.png'
import workImg3 from '../../img/work/work1-img1.png'
import iconImg3 from '../../img/icons/service1-icon4.svg'
import iconImg4 from '../../img/icons/service1-icon3.svg'
import iconImg5 from '../../img/icons/service1-icon2.svg'
import iconImg6 from '../../img/icons/service1-icon1.svg'
import iconImg7 from '../../img/icons/about1-icon1.svg'
import iconImg8 from '../../img/icons/about1-icon2.svg'
import serviceImg1 from '../../img/service/service1-main-img.png'
import serviceImg2 from '../../img/service/service1-img-shape1.png'
import serviceImg3 from '../../img/service/service1-img-shape2.png'
import logoImg from '../../img/logo/marketing-logo6.png'
import logoImg1 from '../../img/logo/marketing-logo5.png'
import logoImg2 from '../../img/logo/marketing-logo4.png'
import logoImg3 from '../../img/logo/marketing-logo3.png'
import logoImg4 from '../../img/logo/marketing-logo2.png'
import logoImg5 from '../../img/logo/marketing-logo1.png'
import BankImg from '../../img/icons/BankImg1.png'
import BankImg1 from '../../img/icons/BankImg2.png'
import BankImg2 from '../../img/icons/BankImg3.png'
import mobileImg from '../../img/hero/hero1-mobile1.png'
import mobileImg1 from '../../img/hero/hero1-mobile2.png'
import mobileImg2 from '../../img/hero/hero1-mobile3.png'
import aboutImg from '../../img/bg/about1-shape-bg.png'
import aboutImg1 from '../../img/shapes/about1-shape.png'
import aboutImg2 from '../../img/about/about1-img1.png'
import aboutImg3 from '../../img/about/about1-img2.png'
import aboutImg4 from '../../img/about/about1-img3.png'
import factImg from '../../img/icons/fact-icon1.svg'
import factImg1 from '../../img/icons/fact-icon2.svg'
import factImg2 from '../../img/icons/fact-icon3.svg'
import footershape1 from '../../img/shapes/footer-shape4.png'
import footershape2 from '../../img/shapes/footer-shape1.png'
import footershape3 from '../../img/shapes/footer-shape2.png'
import footershape4 from '../../img/shapes/footer-shape3.png'
import footershape5 from '../../img/shapes/footer-shape5.png'
import Header from '../Header'
import Footer from '../Footer'
import { faStar } from '@fortawesome/free-regular-svg-icons';

const Index = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,  // You can set the duration here or directly in the HTML as data-aos-duration
        });
    }, []);

    return (
        <>
            <Header />
            <div className="hero-area1" style={{ backgroundImage: `url(${require('../../img/bg/hero1-bg.png')})` }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="main-heading">
                                <span className="span" data-aos="fade-right" data-aos-duration="800">Invest in the Future of PayCoin</span>
                                <h1>Crypto Exchange With PayCoin App</h1>
                                <div className="space16"></div>
                                <p data-aos="fade-right" data-aos-duration="1000">At PayCoin, we're committed to providing you with at a cutting-edge trading experience a  that goes beyond.</p>
                                <div className="subscribe-form">
                                    <form action="#" data-aos="fade-right" data-aos-duration="1200">
                                        <input type="email" placeholder="Email Address" />
                                        <div className="button">
                                            <button className="theme-btn1 btn btn--ripple ripple">Get Started <FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} /></button>
                                        </div>
                                    </form>
                                    <div className="pay-option" data-aos="fade-right" data-aos-duration="1400">
                                        <ul>
                                            <li className="text">Buy Crypto With:</li>
                                            <li><a href="#"><img src={BankImg} alt="" /></a></li>
                                            <li><a href="#"><img src={BankImg1} alt="" /></a></li>
                                            <li><a href="#"><img src={BankImg2} alt="" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="hero1-images">
                                <div className="mobile-all-imges">
                                    <div className="mobile-image1 reveal">
                                        <img src={mobileImg} alt="" />
                                    </div>
                                    <div className="mobile-image2 animate1">
                                        <img src={mobileImg1} alt="" />
                                    </div>
                                    <div className="mobile-image3 animate3">
                                        <img src={mobileImg2} alt="" />
                                    </div>
                                </div>

                                <div className="main-images">
                                    <div className="main-img1">
                                        <img src={heroImg2} alt="" />
                                    </div>
                                    <div className="main-img2 reveal">
                                        <img src={heroImg3} alt="" />
                                    </div>
                                    <div className="app-btn1">
                                        <a href="#"><img src={appimg1} alt="" /></a>
                                    </div>
                                    <div className="app-btn2">
                                        <a href="#"><img src={appimg2} alt="" /></a>
                                    </div>
                                    <div className="qr-code">
                                        <img src={qrimg} alt="" />
                                    </div>
                                    <div className="shape animate1">
                                        <img src={arrowimg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about1 sp">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about1-images">
                                <div className="image1">
                                    <img src={aboutImg} alt="" />
                                </div>
                                <div className="image2">
                                    <img src={aboutImg1} alt="" />
                                </div>
                                <div className="image3 animate1">
                                    <img src={aboutImg2} alt="" />
                                </div>
                                <div className="image4 animate4" data-aos="fade-up" data-aos-duration="800">
                                    <img src={aboutImg3} alt="" />
                                </div>
                                <div className="image5 animate3" data-aos="fade-up" data-aos-duration="1000">
                                    <img src={aboutImg4} alt="" />
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="heading1">
                                <span className="span" data-aos="fade-left" data-aos-duration="800">WHY ChOOSE PAYCOIN</span>
                                <h2 className="text-anime-style-3">Where Innovation Meets Cryptocurrency Trading</h2>
                                <div className="space16"></div>
                                <p data-aos="fade-left" data-aos-duration="800">At PayCoin, we pride ourselves on offering a user-friendly platform that caters to both novice traders & seasoned PayCoin investors.</p>

                                <div className="" data-aos="fade-left" data-aos-duration="1000">
                                    <div className="icon-box">
                                        <div className="">
                                            <div className="icon">
                                                <img src={iconImg7} alt="" />
                                            </div>
                                        </div>
                                        <div className="heading1">
                                            <h5><a href="about.html">Crypto Exchange Safely</a></h5>
                                            <p>Our platform built on cutting-edge technology, ensuring lightning-fast transactions real-time.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="" data-aos="fade-left" data-aos-duration="1200">
                                    <div className="icon-box">
                                        <div className="">
                                            <div className="icon">
                                                <img src={iconImg8} alt="" />
                                            </div>
                                        </div>
                                        <div className="heading1">
                                            <h5><a href="about.html">Mobile App Support</a></h5>
                                            <p>Our platform built on cutting-edge technology, ensuring lightning-fast transactions real-time.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fact sp" style={{ backgroundImage: `url(${require('../../img/bg/fact1-bg.png')})` }}>
                <div className="container face-contact">
                    <div className="row">
                        <div className="col-lg-10 m-auto">
                            <div className="heading1 text-center">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration="700">Fact PayCOIn Crypto Exchange</span>
                                <h2 className="text-anime-style-3">Exchange Crypto Securely</h2>
                            </div>

                            <div className="space60"></div>
                            <div className="boxs-area" data-aos="zoom-in-up" data-aos-duration="900">
                                <div className="single-box">
                                    <p><img src={factImg} alt="" /> Bitcoin Sell</p>
                                    <h3><span className="counter">10</span>B+</h3>
                                </div>
                                <div className="single-box">
                                    <p><img src={factImg1} alt="" /> Digital Assets</p>
                                    <h3><span className="counter">100</span>M+</h3>
                                </div>
                                <div className="single-box no">
                                    <p><img src={factImg2} alt="" /> Happy User</p>
                                    <h3><span className="counter">20</span>M+</h3>
                                </div>

                                <img className="box-shape1 animate3" src={footershape3} alt="" />
                                <img className="box-shape2" src={footershape5} alt="" />
                                <img className="box-shape3 animate1" src={footershape5} alt="" />
                            </div>
                        </div>
                    </div>
                    <img className="shape1 animate3" src={footershape1} alt="" />
                    <img className="shape2 animate4" src={footershape2} alt="" />
                </div>
            </div>


            <section className="coin-list sp">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-8 m-auto text-center">
                            <div className="heading1">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration="700">BItCoin Market update</span>
                                <h2 className="text-anime-style-3">Cryptocurrency Market Update</h2>
                            </div>
                        </div>
                    </div>

                    <div className="space20"></div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="coin-list__main" data-aos="fade-up" data-aos-duration="800">
                                <div className="flat-tabs">
                                    <div className="content-tab">
                                        <div className="content-inner">
                                            <table className="table">
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
                                                    <tr className="spacer">
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr >
                                                        <th scope="row"><span className="icon-star"><FontAwesomeIcon icon={faStar} /></span></th>
                                                        <td>
                                                            <a href="#" style={{ marginTop: "25px" }}>
                                                                <img src={logoImg5} alt="" />
                                                                <span>BitCoin (BSTD)</span>
                                                            </a>
                                                        </td>
                                                        <td className="boild" style={{ paddingTop: "35px" }}>$56,623.54</td>
                                                        <td className="up" style={{ paddingTop: "35px" }}>+0.07%</td>
                                                        <td><div id="total-revenue-chart-1"></div></td>
                                                        <td><a href="#" className="btn" style={{ marginTop: "17px" }}>Trade</a></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr className="spacer">
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><span className="icon-star"><FontAwesomeIcon icon={faStar} /></span></th>
                                                        <td>
                                                            <a href="#" style={{ marginTop: "23px" }}>
                                                                <img src={logoImg4} alt="" />
                                                                <span>Ethereum (ETH)</span>
                                                            </a>
                                                        </td>
                                                        <td className="boild" style={{ paddingTop: "35px" }}>$56,000.54</td>
                                                        <td className="up" style={{ paddingTop: "35px" }}>+0.37%</td>
                                                        <td><div id="total-revenue-chart-2"></div></td>
                                                        <td><a href="#" className="btn" style={{ marginTop: "17px" }}>Trade</a></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr className="spacer">
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><span className="icon-star"><FontAwesomeIcon icon={faStar} /></span></th>
                                                        <td>
                                                            <a href="#" style={{ marginTop: "23px" }}>
                                                                <img src={logoImg3} alt="" />
                                                                <span>Binance (BNB)</span>
                                                            </a>
                                                        </td>
                                                        <td className="boild" style={{ paddingTop: "35px" }}>$56,123.54</td>
                                                        <td className="up" style={{ paddingTop: "35px" }}>+0.17%</td>
                                                        <td><div id="total-revenue-chart-3"></div></td>
                                                        <td><a href="#" className="btn" style={{ marginTop: "17px" }}>Trade</a></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr className="spacer">
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><span className="icon-star"><FontAwesomeIcon icon={faStar} /></span></th>
                                                        <td>
                                                            <a href="#" style={{ marginTop: "23px" }}>
                                                                <img src={logoImg2} alt="" />
                                                                <span>Tether (USDT)</span>
                                                            </a>
                                                        </td>
                                                        <td className="boild" style={{ paddingTop: "35px" }}>$56,343.54</td>
                                                        <td className="up" style={{ paddingTop: "35px" }}>+0.27%</td>
                                                        <td><div id="total-revenue-chart-4"></div></td>
                                                        <td><a href="#" className="btn" style={{ marginTop: "17px" }}>Trade</a></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr className="spacer">
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><span className="icon-star"><FontAwesomeIcon icon={faStar} /></span></th>
                                                        <td>
                                                            <a href="#" style={{ marginTop: "23px" }}>
                                                                <img src={logoImg1} alt="" />
                                                                <span>Solana (SOL)</span>
                                                            </a>
                                                        </td>
                                                        <td className="boild" style={{ paddingTop: "35px" }}>$200.04</td>
                                                        <td className="down" style={{ paddingTop: "35px" }}>-0.44%</td>
                                                        <td><div id="total-revenue-chart-5"></div></td>
                                                        <td><a href="#" className="btn" style={{ marginTop: "17px" }}>Trade</a></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr className="spacer">
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><span className="icon-star"><FontAwesomeIcon icon={faStar} /></span></th>
                                                        <td>
                                                            <a href="#" style={{ marginTop: "23px" }}>
                                                                <img src={logoImg} alt="" />
                                                                <span>USD Coin (USDC)</span>
                                                            </a>
                                                        </td>
                                                        <td className="boild" style={{ paddingTop: "35px" }}>$181.00</td>
                                                        <td className="down" style={{ paddingTop: "35px" }}>-0.03%</td>
                                                        <td><div id="total-revenue-chart-6"></div></td>
                                                        <td><a href="#" className="btn" style={{ marginTop: "17px" }}>Trade</a></td>
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

            <div className="buy-sell sp" style={{ backgroundImage: `url(${require('../../img/bg/cta1-bg.png')})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center">
                            <div className="heading1-w">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration="700">Buy and Sell BITCOIN</span>
                                <h2 className="text-anime-style-3">The Simple Way Buy & Sell Coin</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="buy-sell-bottom">
                <div className="container">
                    <div className="bg">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <div className="box-area-all" data-aos="flip-right" data-aos-duration="900">
                                    <div className="icon">
                                        <img src={iconImg6} alt="" />
                                    </div>
                                    <div className="single-box heading1">
                                        <h5><a href="buy.html">Trade Local Currency</a></h5>
                                        <div className="space10"></div>
                                        <p>With our intuitive interface and robust features, you buy, sell.</p>
                                    </div>
                                </div>

                                <div className="space50"></div>
                                <div className="box-area-all box-area-all2" data-aos="flip-right" data-aos-duration="900">
                                    <div className="icon">
                                        <img src={iconImg5} alt="" />
                                    </div>
                                    <div className="single-box heading1">
                                        <h5><a href="buy.html">Largest Coin Offer</a></h5>
                                        <div className="space10"></div>
                                        <p>Plus, our commitment to the security means that PayCoin.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6">
                                <div className="service1-main-images" data-aos="zoom-out" data-aos-duration="900">
                                    <div className="image1">
                                        <img src={serviceImg1} alt="" />
                                    </div>

                                    <div className="image2 animate1">
                                        <img src={serviceImg2} alt="" />
                                    </div>

                                    <div className="image3 animate3">
                                        <img src={serviceImg3} alt="" />
                                    </div>

                                    <div className="shape1">
                                        <img src={ShapeImg3} alt="" />
                                    </div>

                                    <div className="shape2">
                                        <img src={ShapeImg4} alt="" />
                                    </div>

                                    <div className="shape3">
                                        <img src={ShapeImg5} alt="" />
                                    </div>

                                    <div className="shape4">
                                        <img src={ShapeImg6} alt="" />
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="box-area-all box-area-all3" data-aos="flip-right" data-aos-duration="900">
                                    <div className="icon">
                                        <img src={iconImg4} alt="" />
                                    </div>
                                    <div className="single-box heading1">
                                        <h5><a href="buy.html">Safe And Secure</a></h5>
                                        <div className="space10"></div>
                                        <p>Trusted partner in the world of crypto trading Join us today.</p>
                                    </div>
                                </div>

                                <div className="space50"></div>
                                <div className="box-area-all box-area-all4" data-aos="flip-right" data-aos-duration="900">
                                    <div className="icon">
                                        <img src={iconImg3} alt="" />
                                    </div>
                                    <div className="single-box heading1">
                                        <h5><a href="buy.html">Trade For Anywhere</a></h5>
                                        <div className="space10"></div>
                                        <p>Resources designed to help
                                            navigate best the dynamic</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="space100"></div>

            <div className="work1 sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center">
                            <div className="heading1">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration="700">how it works</span>
                                <h2 className="text-anime-style-3">Buy Bitcoin In 3 Steps</h2>
                            </div>
                        </div>
                    </div>

                    <div className="space30"></div>
                    <div className="row work-top">
                        <div className="col-lg-4 col-md-6">
                            <div className="work-box-area" data-aos="zoom-in-up" data-aos-duration="800" data-aos-offset="100">
                                <span>1</span>
                                <div className="space50"></div>
                                <div className="work-box">
                                    <div className="heading1">
                                        <h5><a href="buy.html">Create PayCoin Account</a></h5>
                                        <div className="space16"></div>
                                        <p>Creating account with PayCoin is quick, easy, secure. Simply click to account.</p>
                                    </div>
                                    <div className="image">
                                        <img src={workImg3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="work-box-area active" data-aos="zoom-in-up" data-aos-duration="1000">
                                <span>2</span>
                                <div className="space50"></div>
                                <div className="work-box">
                                    <div className="heading1">
                                        <h5><a href="buy.html">Create PayCoin Account</a></h5>
                                        <div className="space16"></div>
                                        <p>Creating account with PayCoin is quick, easy, secure. Simply click to account.</p>
                                    </div>
                                    <div className="image">
                                        <img src={workImg2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="work-box-area" data-aos="zoom-in-up" data-aos-duration="1200">
                                <span>3</span>
                                <div className="space50"></div>
                                <div className="work-box">
                                    <div className="heading1">
                                        <h5><a href="buy.html">Start PayCoin Investing</a></h5>
                                        <div className="space16"></div>
                                        <p>Creating account with PayCoin is quick, easy, secure. Simply click to account.</p>
                                    </div>
                                    <div className="image">
                                        <img src={workImg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="mobile-area sp" style={{ backgroundImage: `url(${require('../../img/bg/cta1-bg.png')})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="heading1-w">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration="700">mobile version available </span>
                                <h2 className="text-anime-style-3">Download PayCoin App</h2>
                                <div className="space16"></div>
                                <p data-aos="fade-right" data-aos-duration="900">Take your crypto trading experience to the next level with the PayCoin mobile app. Available for download on both iOS and Android devices, our app puts the power crypto trading right in the palm of your hand.</p>
                                <div className="space30"></div>
                                <div className="button" data-aos="fade-right" data-aos-duration="1000">
                                    <a href="#"><img src={appleImg} alt="" /></a>
                                    <a href="#"><img src={GoogleImg} alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="mobile-area images">
                                <div className="bg">
                                    <img src={bg} alt="" />
                                </div>
                                <div className="main-image">
                                    <img src={other1} alt="" />
                                </div>
                                <div className="coin shape-animaiton4">
                                    <img src={other2} alt="" />
                                </div>
                                <div className="qr">
                                    <img src={other3} alt="" />
                                </div>
                                <div className="shape animate3">
                                    <img src={ShapeImg2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="testimonials-2 sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto text-center">
                            <div className="heading1">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration="700">Testimonials</span>
                                <h2 className="text-anime-style-3">Feedback Our Investor</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space30"></div>
                    <div className="row">
                        <div className="col-xl-6 col-md-12 left _relative">
                            <div className="swiper swiper-testimonial-2">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="testimonials-box-2">
                                            <div className="icon">
                                                <img src={iconImg2} alt="" />
                                            </div>
                                            <p className="text">
                                                "I've been trading cryptocurrencies for years, and I've tried many different platforms, but none Coin compare to PayCoin. The user-friendly interface, lightning-fast transactions, and top-notch PayCoin Buy or Sell.”
                                            </p>
                                            <div className="bottom">
                                                <div className="info">
                                                    <img src={mapImg2} alt="" />
                                                    <div className="content">
                                                        <h6 className="name"><a href="#">Marvin McKinney</a></h6>
                                                        <p className="position">CEO of Startup</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testimonials-box-2">
                                            <div className="icon">
                                                <img src={iconImg2} alt="" />
                                            </div>
                                            <p className="text">
                                                "I've been trading cryptocurrencies for years, and I've tried many different platforms, but none Coin compare to PayCoin. The user-friendly interface, lightning-fast transactions, and top-notch PayCoin Buy or Sell.”
                                            </p>
                                            <div className="bottom">
                                                <div className="info">
                                                    <img src={mapImg3} alt="" />
                                                    <div className="content">
                                                        <h6 className="name"><a href="#">Marvin McKinney</a></h6>
                                                        <p className="position">CEO of Startup</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testimonials-box-2">
                                            <div className="icon">
                                                <img src={iconImg2} alt="" />
                                            </div>
                                            <p className="text">
                                                "I've been trading cryptocurrencies for years, and I've tried many different platforms, but none Coin compare to PayCoin. The user-friendly interface, lightning-fast transactions, and top-notch PayCoin Buy or Sell.”
                                            </p>
                                            <div className="bottom">
                                                <div className="info">
                                                    <img src={mapImg4} alt="" />
                                                    <div className="content">
                                                        <h6 className="name"><a href="#">Marvin McKinney</a></h6>
                                                        <p className="position">CEO of Startup</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testimonials-box-2">
                                            <div className="icon">
                                                <img src={iconImg2} alt="" />
                                            </div>
                                            <p className="text">
                                                "I've been trading cryptocurrencies for years, and I've tried many different platforms, but none Coin compare to PayCoin. The user-friendly interface, lightning-fast transactions, and top-notch PayCoin Buy or Sell.”
                                            </p>
                                            <div className="bottom">
                                                <div className="info">
                                                    <img src={mapImg5} alt="" />
                                                    <div className="content">
                                                        <h6 className="name"><a href="#">Marvin McKinney</a></h6>
                                                        <p className="position">CEO of Startup</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="testimonials-box-2">
                                            <div className="icon">
                                                <img src={iconImg2} alt="" />
                                            </div>
                                            <p className="text">
                                                "I've been trading cryptocurrencies for years, and I've tried many different platforms, but none Coin compare to PayCoin. The user-friendly interface, lightning-fast transactions, and top-notch PayCoin Buy or Sell.”
                                            </p>
                                            <div className="bottom">
                                                <div className="info">
                                                    <img src={mapImg6} alt="" />
                                                    <div className="content">
                                                        <h6 className="name"><a href="#">Marvin McKinney</a></h6>
                                                        <p className="position">CEO of Startup</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="testimonials-box-2">
                                            <div className="icon">
                                                <img src={iconImg2} alt="" />
                                            </div>
                                            <p className="text">
                                                "I've been trading cryptocurrencies for years, and I've tried many different platforms, but none Coin compare to PayCoin. The user-friendly interface, lightning-fast transactions, and top-notch PayCoin Buy or Sell.”
                                            </p>
                                            <div className="bottom">
                                                <div className="info">
                                                    <img src={mapImg7} alt="" />
                                                    <div className="content">
                                                        <h6 className="name"><a href="#">Marvin McKinney</a></h6>
                                                        <p className="position">CEO of Startup</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="pagination-buttons">
                                <div className="swiper-button-next">
                                    <button><i className="fa-solid fa-angle-right"></i></button>
                                </div>
                                <div className="swiper-button-prev">
                                    <button><i className="fa-solid fa-angle-left"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="map-testimonial">
                                <img className="map" src={mapImg1} alt="" />

                                <div className="swiper swiper-thumb2">
                                    <div className="swiper-wrapper list-img">
                                        <div className="swiper-slide">
                                            <div>
                                                <img src={mapImg2} alt="" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div><img src={mapImg3} alt="" /></div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div><img src={mapImg4} alt="" /></div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div><img src={mapImg5} alt="" /></div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div><img src={mapImg6} alt="" /></div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div><img src={mapImg7} alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="blog1 sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading1">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration="700">Our Blog</span>
                                <h2 className="text-anime-style-3">Latest Blog & News</h2>
                            </div>
                        </div>
                    </div>

                    <div className="space30"></div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration="800" data-aos-offset="100">
                            <div className="blog-box">
                                <div className="image img100 image-anime">
                                    <img src={blogImg2} alt="" />
                                </div>
                                <div className="tags">
                                    <a href="#"><img src={iconImg} alt="" /> Alex Robertson</a>
                                    <a href="#"><img src={iconImg1} alt="" /> 7/31/2023</a>
                                </div>
                                <div className="heading1">
                                    <h5><a href="blog-details.html">The Power of Diversification in Cryptocurrency on Investment</a></h5>
                                    <div className="space16"></div>
                                    <p>In today's dynamic financial landscape, a cryptocurrency trading has emerged as.</p>
                                    <div className="space16"></div>
                                    <a href="blog-details.html" className="learn">Read More <span><FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} /></span></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-offset="100">
                            <div className="blog-box">
                                <div className="image img100 image-anime">
                                    <img src={blogImg1} alt="" />
                                </div>
                                <div className="tags">
                                    <a href="#"><img src={iconImg} alt="" /> Alex Robertson</a>
                                    <a href="#"><img src={iconImg1} alt="" /> 7/31/2023</a>
                                </div>
                                <div className="heading1">
                                    <h5><a href="blog-details.html">The Best Ultimate Crypto Trading Handbook Strategies, Tips More</a></h5>
                                    <div className="space16"></div>
                                    <p>In today's dynamic financial landscape, a cryptocurrency trading has emerged as.</p>
                                    <div className="space16"></div>
                                    <a href="blog-details.html" className="learn">Read More <span><FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} /></span></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration="1100" data-aos-offset="100">
                            <div className="blog-box">
                                <div className="image img100 image-anime">
                                    <img src={blogImg} alt="" />
                                </div>
                                <div className="tags">
                                    <a href="#"><img src={iconImg} alt="" /> Alex Robertson</a>
                                    <a href="#"><img src={iconImg1} alt="" /> 7/31/2023</a>
                                </div>
                                <div className="heading1">
                                    <h5><a href="blog-details.html">The Benefits of Diversification in Cryptocurrency Investment</a></h5>
                                    <div className="space16"></div>
                                    <p>In today's dynamic financial landscape, a cryptocurrency trading has emerged as.</p>
                                    <div className="space16"></div>
                                    <a href="blog-details.html" className="learn">Read More <span><FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} /></span></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <img src={ShapeImg} alt="" className="shape" />
            </div>

            <div className="cta1" style={{ backgroundImage: `url(${require('../../img/bg/cta1-bg.png')})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading1-w">
                                <h2>Join Our Investment Area</h2>
                                <div className="space16"></div>
                                <p>Take your crypto trading experience to the next level with the PayCoin mobile app. Available for download on both iOS and Android devices, our app puts the power crypto trading right in the palm of your hand.</p>

                                <div className="space30"></div>
                                <div className="buttons">
                                    <a className="theme-btn1 btn2 btn--ripple ripple" href="contact.html">Sign Up Now <FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} /></a>
                                    <a className="theme-btn1 btn3 btn--ripple ripple" href="contact.html">Explore PayCoin Market <FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="cta1-all-imags">
                                <div className="image1">
                                    <img src={heroImg} alt="" />
                                </div>
                                <div className="image2">
                                    <img src={heroImg1} alt="" />
                                </div>
                                <div className="coin-img">
                                    <img src={heroImg2} alt="" />
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

export default Index