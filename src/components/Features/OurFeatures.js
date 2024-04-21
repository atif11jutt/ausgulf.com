import React from 'react';
import { Link } from "gatsby";
import * as Icon from 'react-feather';

const OurFeatures = () => {
    return (
        <div className="features-area pt-80 pb-50 bg-f9f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>Our Features</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                            <div className="icon">
                                <Icon.Settings />
                            </div>
                            <h3>
                                <Link to="/feature-details">
                                    Incredible Infrastructure
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                            <div className="icon">
                                <Icon.Mail />
                            </div> 
                            <h3>
                                <Link to="/feature-details">
                                    Email Notifications
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                            <div className="icon">
                                <Icon.Grid />
                            </div>
                            <h3>
                                <Link to="/feature-details">
                                    Simple Dashboard
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                            <div className="icon">
                                <Icon.Info />
                            </div>
                            <h3>
                                <Link to="/feature-details">
                                    Information Retrieval
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                            <div className="icon bg-eb6b3d">
                                <Icon.Box />
                            </div>
                            <h3>
                                <Link to="/feature-details">
                                    Drag & Drop Functionality
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                            <div className="icon bg-eb6b3d">
                                <Icon.Bell />
                            </div>
                            <h3>
                                <Link to="/feature-details">
                                    Deadline Reminders
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurFeatures;  