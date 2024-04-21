import React from 'react';
import { Link } from "gatsby";

const MainBanner = () => {
  return (
    <div className="main-banner">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-5">
                <div className="hero-content">
                  <h1>Secure IT Solutions For a More Secure Environment</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>

                  <Link to="/contact" className="btn btn-primary">
                    Get Started
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 offset-lg-1">
                <div className="banner-image">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBanner