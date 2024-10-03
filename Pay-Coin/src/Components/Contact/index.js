import React from 'react'
import ctaImg from '../../img/others/cta1-mian-img.png'
import cta1Img from '../../img/bg/cta1-shape-bg.png'
import heroImg from '../../img/hero/hero1-coin.png'
import toy from '../../img/icons/play-toy.png'
import contact1 from '../../img/icons/contact-page-icon1.png'
import contact2 from '../../img/icons/contact-page-icon2.png'
import contact3 from '../../img/icons/contact-page-icon3.png'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../Footer'
import Header from '../Header'

const Contact = () => {
    return (
        <>
            <Header />
            <div class="contact-page sp">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 m-auto text-center">
                            <div class="heading1">
                                <span class="span">Get in touch with PayCoin</span>
                                <h2>Leave A Message For Us</h2>
                            </div>
                        </div>
                    </div>

                    <div class="space60"></div>

                    <div class="contact-page-bg">
                        <div class="row align-items-center">
                            <div class="col-lg-7">
                                <div class="heading1">
                                    <h3>Send us a Message</h3>
                                    <div class="space16"></div>
                                    <p> Enjoy the convenience of our user-friendly interface, which caters to both <br /> novice traders and seasoned investors alike. With access to a wide range</p>
                                </div>
                                <form action="#">
                                    <div class="contact-form">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="single-input">
                                                    <input type="text" placeholder="First Name*" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="single-input">
                                                    <input type="email" placeholder="Email*" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="single-input">
                                                    <input type="number" placeholder="Phone*" />
                                                </div>  
                                            </div>
                                            <div class="col-md-6">
                                                <div class="single-input" >
                                                    <select class="wide" style={{
                                                        padding: '18px',
                                                        borderRadius: '4px',
                                                        border: 'none',
                                                        marginTop:'20px',
                                                        width: '100%',
                                                        background: '#F3F4FF'
                                                    }}>
                                                        <option value="">Subject*</option>
                                                        <option value="">Option 1</option>
                                                        <option value="">Option 2</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="single-input">
                                                    <textarea rows="3" placeholder="Your Message*"></textarea>
                                                </div>
                                            </div>
                                            <div class="space30"></div>
                                            <div class="col-md-12">
                                                <div class="button">
                                                    <button class="theme-btn1 btn btn--ripple ripple">Submit Now <i class="fa-solid fa-arrow-right"></i></button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </form>

                            </div>

                            <div class="col-lg-5">
                                <div class="contact-boxs">
                                    <div class="single-box">
                                        <div class="icon">
                                            <img src={contact1} alt="" />
                                        </div>
                                        <div class="heading">
                                            <h5>Call</h5>
                                            <a href="tel:+1234567890">+123 456 7890</a>
                                        </div>
                                    </div>

                                    <div class="single-box">
                                        <div class="icon">
                                            <img src={contact2} alt="" />
                                        </div>
                                        <div class="heading">
                                            <h5>Email</h5>
                                            <a href="mailto:info@paycoincrypto.com">info@paycoincrypto.com</a>
                                        </div>
                                    </div>

                                    <div class="single-box">
                                        <div class="icon">
                                            <img src={contact3} alt="" />
                                        </div>
                                        <div class="heading">
                                            <h5>Schedule Time</h5>
                                            <a href="#">24/7 Anytime All Support</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="video-area3 contact-page" style={{ backgroundColor: "#F3F4FF" }}>
                <div class="container bg" style={{ backgroundImage: `url(${require('../../img/bg/video3-area-bg.png')})`, backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div class="row align-items-center">
                        <div class="col-lg-7">
                            <div class="heading3-w">
                                <span class="span">technology</span>
                                <h2>How does blockchain <br /> work for business?</h2>
                                <div class="space16"></div>
                                <p>Being part of this ICO journey has been nothing short of extra. The team's dedication to transforming PayCoin blockchain technology is palpable, and their commitment to transparency and excellence.</p>
                                <div class="space30"></div>
                                <div class="">
                                    <a class="theme-btn1 btn3 btn--ripple ripple" href="contact.html">Explore PayCoin Market <i class="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <a class="video-area4-all play-btn" href="https://www.youtube.com/watch?v=Y8XpQpW5OVY">
                                <div id="play-video" class="video-play-button">
                                    <img src={toy} alt="" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="space100"></div>
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
                                    <a class="theme-btn1 btn2 btn--ripple ripple" href="contact.html">Sign Up Now <FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} style={{ marginLeft: "5px" }} /></a>
                                    <a class="theme-btn1 btn3 btn--ripple ripple" href="contact.html">Explore PayCoin Market <FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} style={{ marginLeft: "5px" }} /></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="cta1-all-imags">
                                <div class="image1">
                                    <img src={cta1Img} alt="" />
                                </div>
                                <div class="image2">
                                    <img src={ctaImg} alt="" />
                                </div>
                                <div class="coin-img">
                                    <img src={heroImg} alt="" />
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

export default Contact