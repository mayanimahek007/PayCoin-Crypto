import React from 'react'
import LoginImg1 from '../../img/others/login-qr.png'
import LoginImg2 from '../../img/icons/google-longin.png'
import LoginImg3 from '../../img/icons/apple-login.png'
import Header from '../Header'
import Footer from '../Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    return (
        <>
            <Header />
            <div class="login-page sp">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 m-auto">
                            <div class="login-bg">
                                <div class="heading1 text-center">
                                    <span class="span">Account Login</span>
                                    <h2>Login to PayCoin</h2>
                                </div>

                                <div class="login-area">
                                    <h5>Login Your Account</h5>

                                    <div class="form-area">
                                        <form action="#">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="single-input">
                                                        <label>Email/ID</label>
                                                        <input type="text" placeholder="Email/ID" />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="single-input">
                                                        <label>Password</label>
                                                        <input type="password" placeholder="Please fill in the email form." />
                                                    </div>
                                                </div>
                                                <div class="check-box-area">
                                                    <div class="box">
                                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /><label for="vehicle1" > Remember me</label>
                                                    </div>
                                                    <div class="pera">
                                                        <a href="#">Forgot Password?</a>
                                                    </div>
                                                </div>
                                                <div class="google-buttons">
                                                    <a href="#" class="google-btn"><img src={LoginImg2} alt="" /> Sign In with Google</a>
                                                    <a href="#" class="google-btn"><img src={LoginImg3} alt="" /> Sign In with Google</a>
                                                </div>
                                                <div class="button">
                                                    <button class="theme-btn1 btn btn--ripple ripple">Login <FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} style={{ marginLeft: "5px" }} /></button>
                                                </div>

                                                <div class="qr-code-area">
                                                    <p>Not A Member? <a href="#">Register</a></p>
                                                    <div class="space20"></div>
                                                    <div class="image">
                                                        <img src={LoginImg1} alt="" />
                                                    </div>
                                                    <div class="space20"></div>
                                                    <h6>Login With QR Code</h6>
                                                    <div class="space16"></div>
                                                    <p>Scan this code with the <a href="#">PayCoin</a><br /> mobile app to log in instantly.</p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
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

export default Login