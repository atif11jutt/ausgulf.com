import React from "react";
import Layout from "../components/_App/layout";
import Seo from "../components/_App/Seo"; 
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from '../components/Common/PageBanner';
import * as Icon from 'react-feather';
import { Link } from "gatsby";

import BlogImg1 from "../assets/images/blog-image/blog1.jpg";
import BlogImg2 from "../assets/images/blog-image/blog2.jpg";
import BlogImg3 from "../assets/images/blog-image/blog3.jpg";
import BlogImg4 from "../assets/images/blog-image/blog4.jpg";
import BlogImg5 from "../assets/images/blog-image/blog5.jpg";
import BlogImg6 from "../assets/images/blog-image/blog6.jpg";

const Blog1 = () => (
    <Layout>
        <Seo title="Blog" /> 

        <Navbar />

        <PageBanner pageTitle="Blog Grid" />

        <div className="blog-area ptb-80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="blog-image">
                                <Link to="/blog-details">
                                    <img src={BlogImg1} alt="something" />
                                </Link>

                                <div className="date">
                                    <Icon.Calendar /> March 15, 2021
                                </div>
                            </div>

                            <div className="blog-post-content">
                                <h3>
                                    <Link to="/blog-details">
                                        The Security Risks of Changing Package Owners
                                    </Link>
                                </h3>

                                <span>By <Link to="/author">Admin</Link></span>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                                <Link to="/blog-details" className="read-more-btn">
                                    Read More <Icon.ArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="blog-image">
                                <Link to="/blog-details">
                                    <img src={BlogImg2} alt="something" />
                                </Link>

                                <div className="date">
                                    <Icon.Calendar /> March 17, 2021
                                </div>
                            </div>

                            <div className="blog-post-content">
                                <h3>
                                    <Link to="/blog-details">
                                        Tips to Protecting Your Business and Family
                                    </Link>
                                </h3>
 
                                <span>By <Link to="/author">Smith</Link></span>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                                <Link to="/blog-details" className="read-more-btn">
                                    Read More <Icon.ArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="blog-image">
                                <Link to="/blog-details">
                                    <img src={BlogImg3} alt="something" />
                                </Link>

                                <div className="date">
                                    <Icon.Calendar /> March 19, 2021
                                </div>
                            </div>

                            <div className="blog-post-content"> 
                                <h3>
                                    <Link to="/blog-details">
                                        Protect Your Workplace from Cyber Attacks
                                    </Link>
                                </h3>
 
                                <span>By <Link to="/author">John</Link></span>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                                <Link to="/blog-details" className="read-more-btn">
                                    Read More <Icon.ArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="blog-image">
                                <Link to="/blog-details">
                                    <img src={BlogImg4} alt="something" />
                                </Link>

                                <div className="date">
                                    <Icon.Calendar /> March 15, 2021
                                </div>
                            </div>

                            <div className="blog-post-content">
                                <h3>
                                    <Link to="/blog-details">
                                        Here are the 5 most telling signs of micromanagement
                                    </Link>
                                </h3>
 
                                <span>By <Link to="/author">Admin</Link></span>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                                <Link to="/blog-details" className="read-more-btn">
                                    Read More <Icon.ArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="blog-image">
                                <Link to="/blog-details">
                                    <img src={BlogImg5} alt="something" />
                                </Link>

                                <div className="date">
                                    <Icon.Calendar /> March 17, 2021
                                </div>
                            </div>

                            <div className="blog-post-content">
                                <h3>
                                    <Link to="/blog-details">
                                        I Used The Web For A Day On A 50 MB Budget
                                    </Link>
                                </h3>
 
                                <span>By <Link to="/author">Smith</Link></span>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                                <Link to="/blog-details" className="read-more-btn">
                                    Read More <Icon.ArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="blog-image">
                                <Link to="/blog-details">
                                    <img src={BlogImg6} alt="something" />
                                </Link>

                                <div className="date">
                                    <Icon.Calendar /> March 19, 2021
                                </div>
                            </div>

                            <div className="blog-post-content">
                                <h3>
                                    <Link to="/blog-details">
                                        Making Peace With The Feast Or Famine Of Freelancing
                                    </Link>
                                </h3>
 
                                <span>By <Link to="/author">John</Link></span>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                                <Link to="/blog-details" className="read-more-btn">
                                    Read More <Icon.ArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* Pagination */}
                    <div className="col-lg-12 col-md-12">
                        <div className="pagination-area">
                            <nav aria-label="Page navigation">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item">
                                        <Link to="#" className="page-link">
                                            Prev
                                        </Link>
                                    </li>

                                    <li className="page-item active">
                                        <Link to="#" className="page-link">1</Link>
                                    </li>

                                    <li className="page-item">
                                        <Link to="#" className="page-link">2</Link>
                                    </li>

                                    <li className="page-item">
                                        <Link to="#" className="page-link">3</Link>
                                    </li> 

                                    <li className="page-item">
                                        <Link to="#" className="page-link">
                                            Next
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </Layout>
)

export default Blog1;