import React, { useState } from 'react'
import UserImg from '../../img/others/profile-image.png'
import UserProImg from '../../img/icons/profile-icon1.svg'
import UserProImg1 from '../../img/icons/profile-icon2.svg'
import UserProImg2 from '../../img/icons/profile-icon3.svg'
import UserProImg3 from '../../img/icons/profile-icon4.svg'
import UserProImg4 from '../../img/icons/profile-icon5.svg'
import Header from '../Header'
import Footer from '../Footer'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const User = () => {

  const [activeTab, setActiveTab] = useState('profile-tab1');

  return (
    <>
      <Header />

      <script src="assets/js/jquery-3-7-1.min.js"></script>

      <div class="paginacontainer">

        <div class="progress-wrap">
          <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>

      </div>
      <div className="mobile-header mobile-header-main d-block d-lg-none ">
        <div className="container-fluid">
          <div className="col-12">
            <div className="mobile-header-elements">
              <div className="mobile-logo">
                <a href="index1.html"><img src="assets/img/logo/header-logo1.png" alt="" /></a>
              </div>
              <div className="mobile-nav-icon">
                <i className="fa-duotone fa-bars-staggered"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-sidebar d-block d-lg-none">
        <div className="logo-m">
          <a href="/index"><img src="assets/img/logo/header-logo1.png" alt="" /></a>
        </div>
        <div className="menu-close">
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="mobile-nav">

          <ul>
            <li className="has-dropdown"><a href="#">Home </a>
              <ul className="sub-menu">
                <li className="has-dropdown has-dropdown1"><a href="#">Multipage</a>
                  <ul className="sub-menu">
                    <li><a href="/index">Home 1</a></li>
                    <li><a href="index2.html">Home 2</a></li>
                    <li><a href="index3.html">Home 3</a></li>
                    <li><a href="index4.html">Home 4</a></li>
                  </ul>
                </li>
                <li className="has-dropdown has-dropdown1"><a href="#">Landing Page</a>
                  <ul className="sub-menu">
                    <li><a href="single-index1.html">Home 1</a></li>
                    <li><a href="single-index2.html">Home 2</a></li>
                    <li><a href="single-index3.html">Home 3</a></li>
                    <li><a href="single-index4.html">Home 4 </a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="about.html">About Us</a></li>
            <li className="has-dropdown"><a href="#">Market</a>
              <ul className="sub-menu">
                <li><a href="market.html">Market Update</a></li>
                <li><a href="buy.html">Buy Crypto</a></li>
                <li><a href="sell.html">Sell Crypto</a></li>
              </ul>
            </li>

            <li className="has-dropdown"><a href="#">Pages</a>
              <ul className="sub-menu">
                <li><a href="contact.html">Contact</a></li>
                <li><a href="faq.html">FAQ</a></li>
                <li><a href="error.html">404</a></li>
              </ul>
            </li>

            <li><a href="blog.html">Blog</a></li>
            <li className="has-dropdown has-dropdown1"><a href="blog-details.html" className="main">Blog Detials</a>
              <ul className="sub-menu">
                <li><a href="blog-details-left.html">Details Left</a></li>
                <li><a href="blog-details-right.html">Details Right</a></li>
                <li><a href="blog-details.html">Single Details</a></li>
              </ul>
            </li>

            <li className="has-dropdown"><a href="#">Account</a>
              <ul className="sub-menu">
                <li><a href="user.html">My Profile</a></li>
                <li><a href="login.html">Login</a></li>
                <li><a href="register.html">Register</a></li>
              </ul>
            </li>

          </ul>

          <div className="mobile-button">
            <a className="theme-btn1 btn btn--ripple ripple" href="contact.html">Get A Quote <FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} /></a>
          </div>

          <div className="single-footer-items">
            <h3>Contact Us</h3>

            <div className="contact-box">
              <div className="pera">
                <a href="tel:+880123456789">+880 123 456 789</a>
              </div>
            </div>

            <div className="contact-box">
              <div className="pera">
                <a href="mailto:info@mail.com">info@mail.com</a>
              </div>
            </div>

            <div className="contact-box">
              <div className="pera">
                <a href="tel:+880123456789">8502 Preston Rd. <br /> Inglewoo Maine 98380</a>
              </div>
            </div>

          </div>

          <div className="contact-infos">
            <h3>Our Location</h3>
            <ul className="social-icon">
              <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
            </ul>
          </div>

        </div>
      </div>

      <div className="profile-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="profile-user-id">
                <div className="image">
                  <img src={UserImg} alt="" />
                </div>
                <div className="heading">
                  <h4>Shakib Mahmud</h4>
                  <h6>shakibmahmud@gmail.com</h6>
                </div>

                <div className="space10"></div>
                <div className="tab-content-buttons">
                  <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button
                      className={`nav-link ${activeTab === 'profile-tab1' ? 'active' : ''}`}
                      onClick={() => setActiveTab('profile-tab1')}
                      id="profile-tab1-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#profile-tab1"
                      type="button"
                      role="tab"
                      aria-controls="profile-tab1"
                      aria-selected="true">
                      <img src={UserProImg} alt="" /> User Profile
                    </button>
                    {/* <button className={`nav-link ${activeTab === 'profile-tab2' ? 'active' : ''}`}
                      onClick={() => setActiveTab('profile-tab2')} id="profile-tab2-tab" data-bs-toggle="pill" data-bs-target="#profile-tab2" type="button" role="tab" aria-controls="profile-tab2" aria-selected="false"><img src={UserProImg1} alt="" /> Referrals</button> */}
                    <button className={`nav-link ${activeTab === 'profile-tab2' ? 'active' : ''}`}
                      onClick={() => setActiveTab('profile-tab2')}
                      id="profile-tab2-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#profile-tab2"
                      type="button"
                      role="tab"
                      aria-controls="profile-tab2"
                      aria-selected={activeTab === 'profile-tab2'}>
                      <img src={UserProImg1} alt="" /> Referrals
                    </button>

                    <button
                      className={`nav-link ${activeTab === 'profile-tab3' ? 'active' : ''}`}
                      onClick={() => setActiveTab('profile-tab3')}
                      id="profile-tab3-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#profile-tab3"
                      type="button"
                      role="tab"
                      aria-controls="profile-tab3"
                      aria-selected="false"
                    ><img src={UserProImg2} alt="" /> API Keys
                    </button>

                    <button
                      className={`nav-link ${activeTab === 'profile-tab4' ? 'active' : ''}`}
                      onClick={() => setActiveTab('profile-tab4')}
                      id="profile-tab4-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#profile-tab4"
                      type="button"
                      role="tab"
                      aria-controls="profile-tab4"
                      aria-selected="false">
                      <img src={UserProImg3} alt="" /> 2FA
                    </button>

                    <button
                      className={`nav-link ${activeTab === 'profile-tab5' ? 'active' : ''}`}
                      onClick={() => setActiveTab('profile-tab5')}
                      id="profile-tab5-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#profile-tab5"
                      type="button"
                      role="tab"
                      aria-controls="profile-tab5"
                      aria-selected="false">
                      <img src={UserProImg4} alt="" /> Change Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content-body">
                <div className="d-flex align-items-start">
                  <div className="tab-content" id="v-pills-tabContent">
                    {activeTab === 'profile-tab1' && (
                      <div className="tab-pane fade show active" id="profile-tab1" role="tabpanel" aria-labelledby="profile-tab1-tab">

                        <div className="profile-form">
                          <div className="heading1">
                            <h3>User Profile</h3>
                            <form action="#">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="single-input">
                                    <label>First Name</label>
                                    <input type="text" placeholder="Shakib" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="single-input">
                                    <label>Last Name</label>
                                    <input type="text" placeholder="Mahmud" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="single-input">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="shakibmahmud@gmail.com" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="single-input">
                                    <label>Phone Number</label>
                                    <input type="number" placeholder="+123 456 7890" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="single-input">
                                    <label>Nationality</label>
                                    <select className="wide" style={{
                                      padding: '18px',
                                      borderRadius: '4px',
                                      border: 'none',
                                      width: '100%',
                                      background: '#F3F4FF'
                                    }}>
                                      <option value="">England</option>
                                      <option value="">Argentina</option>
                                      <option value="">Brazil</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="single-input">
                                    <label>Gender</label>
                                    <select className="wide" style={{
                                      padding: '18px',
                                      borderRadius: '4px',
                                      border: 'none',
                                      width: '100%',
                                      background: '#F3F4FF'
                                    }}>
                                      <option value="">Male</option>
                                      <option value="">Female</option>
                                    </select>
                                  </div>
                                </div>
                              </div>

                              <div className="space30"></div>
                              <div className="heading1">
                                <h3>Features PayCoin</h3>
                              </div>
                              <div className="wallet-option">
                                <div className="heading">
                                  <h6>Fiat and Spot wallet</h6>
                                </div>
                                <div className="plan-toggle-wrap">
                                  <div className="toggle-inner toggle-inner2">
                                    <input id="ce-toggle" checked type="checkbox" />
                                    <span className="custom-toggle"></span>
                                  </div>
                                </div>
                              </div>

                              <div className="border-all"></div>

                              <div className="bottom-area">
                                <div className="heading">
                                  <h6>Margin wallet</h6>
                                  <p>Enabled 100x Leverage</p>
                                </div>
                              </div>

                              <div className="space30"></div>
                              <div className="button">
                                <button className="theme-btn1 btn btn--ripple ripple">Update Profile <FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} /></button>
                              </div>
                            </form>
                          </div>
                        </div>

                      </div>
                    )}
                    {activeTab === 'profile-tab2' && (
                      <div className="tab-pane fade show active" id="profile-tab2" role="tabpanel" aria-labelledby="profile-tab2-tab">

                        <div className="profile-heading">
                          <h6>Total Rewards</h6>
                          <div className="space20"></div>
                          <h3>$1,500.00 <span className="up">USD</span></h3>
                          <div className="space20"></div>
                          <p>Earning 20% Of The Trading Fees Your Referrals Pay</p>
                        </div>
                        <div className="space30"></div>
                        <div className="profile-form">
                          <div className="heading1">
                            <h3>Invite friends to earn 20%</h3>
                            <form action="#">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="single-input">
                                    <label>Referrals Link</label>
                                    <input type="text" placeholder="https://accounts.paycoin/login" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="single-input">
                                    <label>Referrals Code</label>
                                    <input type="text" placeholder="NH78BH" />
                                    <button className="copy-btn">Copy</button>
                                  </div>
                                </div>

                              </div>
                            </form>
                          </div>
                        </div>

                        <div className="space30"></div>
                        <div className="button">
                          <button className="theme-btn1 btn btn--ripple ripple">My Wallet <FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} /></button>
                        </div>

                      </div>
                    )}
                    {activeTab === 'profile-tab3' && (
                      <div className="tab-pane fade show active" id="profile-tab3" role="tabpanel" aria-labelledby="profile-tab3-tab">

                        <div className="profile-heading">
                          <h3>API Access is <span className="down">Disabled</span></h3>
                          <div className="space20"></div>
                          <p>Enable API access on your account to generate keys.</p>
                        </div>
                        <div className="space30"></div>
                        <div className="profile-form">
                          <div className="heading1">
                            <h3>Enable API keys</h3>
                            <form action="#">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="single-input">
                                    <label>API Key</label>
                                    <input type="text" placeholder="API Key" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="single-input">
                                    <label>2FA Code</label>
                                    <input type="text" placeholder="2FA Code" />
                                  </div>
                                </div>

                              </div>
                            </form>
                          </div>
                        </div>

                        <div className="space30"></div>
                        <div className="button">
                          <button className="theme-btn1 btn btn--ripple ripple">Enable API Keys <FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} /></button>
                        </div>

                      </div>
                    )}
                    {activeTab === 'profile-tab4' && (
                      <div className="tab-pane fade show active" id="profile-tab4" role="tabpanel" aria-labelledby="profile-tab4-tab">

                        <div className="profile-heading">
                          <h3>2FA <span className="down">Enabled</span></h3>
                          <div className="space20"></div>
                          <p>Enable API access on your account to generate keys.</p>
                        </div>
                        <div className="space30"></div>
                        <div className="profile-form">
                          <div className="heading1">
                            <h3>Enabled 2FA</h3>
                            <form action="#">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="single-input">
                                    <label>Your Password</label>
                                    <input type="password" placeholder="Password" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="single-input">
                                    <label>2FA Code</label>
                                    <input type="text" placeholder="2FA Code" />
                                  </div>
                                </div>

                              </div>
                            </form>
                          </div>
                        </div>

                        <div className="space30"></div>
                        <div className="button">
                          <button className="theme-btn1 btn btn--ripple ripple">Enable API Keys <FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} /></button>
                        </div>

                      </div>
                    )}
                    {activeTab === 'profile-tab5' && (
                      <div className="tab-pane fade show active" id="profile-tab5" role="tabpanel" aria-labelledby="profile-tab5-tab">

                        <div className="profile-heading">
                          <h3>Change Password</h3>
                          <div className="space20"></div>
                          <p>Enable API access on your account to generate keys.</p>
                        </div>
                        <div className="space30"></div>
                        <div className="profile-form">
                          <div className="heading1">
                            <h3>New Password</h3>
                            <form action="#">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="single-input">
                                    <label>Old Password</label>
                                    <input type="password" placeholder="*******" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="single-input">
                                    <label>2FA Code</label>
                                    <input type="password" placeholder="*******" />
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div className="single-input">
                                    <label>New Password</label>
                                    <input type="password" placeholder="8 charcter password" />
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div className="single-input">
                                    <label>Confirm Password</label>
                                    <input type="password" placeholder="Confirm Password" />
                                  </div>
                                </div>

                              </div>
                            </form>
                          </div>
                        </div>

                        <div className="space30"></div>
                        <div className="button">
                          <button className="theme-btn1 btn btn--ripple ripple">Change Password<FontAwesomeIcon icon={faArrowRight} transform={{ rotate: 315 }} /></button>
                        </div>


                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
      <Footer />

    </>
  )
}

export default User;