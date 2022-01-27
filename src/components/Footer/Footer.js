import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo/logo-xl.png';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            {/* <!--====== FOOTER PART START ======--> */}

            <footer id="footer-part">
                <div className="footer-top pt-40 pb-70 mt-5 pb-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-about mt-40">
                                    <div className="logo">
                                        <NavLink to="/home"> <img width="50px" src={logo} alt="" /></NavLink>
                                    </div>
                                    <p>Affordable travel packages and the experience of a lifetime. Book an Intrepid tour today.The official site of the world's greatest adventure travel company. We offer a wide selection of small-group tours, safaris and expeditions</p>
                                    <div className="mt-20 d-flex " id="footer-social">
                                        <li><NavLink to="#"><i className="fab fa-facebook"></i></NavLink></li>
                                        <li><NavLink to="#"><i className="fab fa-twitter"></i></NavLink></li>
                                        <li><NavLink to="#"><i className="fab fa-google-plus"></i></NavLink></li>
                                        <li><NavLink to="#"><i className="fab fa-instagram"></i></NavLink></li>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-link mt-40">
                                    <div className="footer-title pb-25">
                                        <h5 className="text-start ps-4"><strong>Sitemap</strong></h5>
                                    </div>
                                    <div className="lg-d-flex">
                                        <ul>
                                            <li><NavLink to="/home"><i className="fa fa-angle-right"></i>Home</NavLink></li>
                                            <li><NavLink to="/my-orders"><i className="fa fa-angle-right"></i>My Orders</NavLink></li>
                                            <li><NavLink to="/manage-all-orders"><i className="fa fa-angle-right"></i>Manage Orders</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="footer-link support mt-40">
                                    <div className="footer-title pb-25">
                                        <h5 className="text-start ps-4"><strong>Support</strong></h5>
                                    </div>
                                    <ul>
                                        <li><NavLink to="#"><i className="fa fa-angle-right"></i>FAQS</NavLink></li>
                                        <li><NavLink to="#"><i className="fa fa-angle-right"></i>Privacy</NavLink></li>
                                        <li><NavLink to="#"><i className="fa fa-angle-right"></i>Abouts</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-address mt-40">
                                    <div className="footer-title pb-25">
                                        <h5 className="text-start ps-4"><strong>Contact Us</strong></h5>
                                    </div>
                                    <ul>
                                        <li className="d-flex">
                                            <div className="icon">
                                                <i className="fa fa-home"></i>
                                            </div>
                                            <div className="cont">
                                                <p className="text-start">Narail Kalia Upazila 7020 area Bangladesh</p>
                                            </div>
                                        </li>
                                        <li className="d-flex">
                                            <div className="icon">
                                                <i className="fa fa-phone"></i>
                                            </div>
                                            <div className="cont">
                                                <p>+3 123 456 789</p>
                                            </div>
                                        </li>
                                        <li className="d-flex">
                                            <div className="icon">
                                                <i className="fa fa-envelope-o"></i>
                                            </div>
                                            <div className="cont">
                                                <p>info@yourmail.com</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright pt-10 pb-25">
                    <div className="container">
                        <div className="row">
                            <div className="copyright text-md-right text-center pt-15 py-3">
                                &copy; All Right Reserved 2021
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* <!--====== FOOTER PART ENDS ======--> */}
        </div>
    );
};

export default Footer;