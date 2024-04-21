import React from 'react';
import { Link } from "gatsby";
import * as Icon from 'react-feather';

const OurFeatures = ({ title }) => {
  return (
    <div className="features-area pt-80 pb-50 bg-f7fafd">
      <div className="container">
        {title && (
          <div className="section-title">
            <h2>What We Bring To You</h2>
          </div>
        )}

        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6">
            <Link to="/private-equity/" className="single-features">
              <div className="icon">
                <Icon.Umbrella />
              </div>
              <h3>
                Private Equity
              </h3>
              <p>
                Australian Gulf Private Equity aims to be a trusted partner to family businesses and family-owned conglomerates in Gulf and Asia. We closely involve ourselves with the senior management of our portfolio companies to realize both operational and financial value for all parties, including our co-investors. We invest in potential targets through our Flagship Gulf Fund.
              </p>
              <span className="read-more-btn">
                <Icon.ArrowRight /> Read More
              </span>
            </Link>
          </div>

          <div className="col-lg-6 col-md-6">
            <Link to="/venture-capital/" className="single-features">
              <div className="icon">
                <Icon.Box />
              </div>
              <h3>
                Venture Capital
              </h3>
              <p>
                We partner with founders to help them build their startups into high-growth ventures that will become the disruptive companies of tomorrow. Our investment process is rapid, disciplined and transparent. Our initial investment is almost always in a company's first or second round of funding when the product is nascent, and the potential is the greatest.
              </p>
              <span className="read-more-btn">
                <Icon.ArrowRight /> Read More
              </span>
            </Link>
          </div>

          <div className="col-lg-6 col-md-6">
            <Link to="/real-estate/" className="single-features">
              <div className="icon">
                <Icon.Home />
              </div>
              <h3>
                Real Estate
              </h3>
              <p>
                We provide Middle Eastern and Asian investors with access to lucrative Australian Real Estate opportunities.  Australian Gulf Capital Real Estate focuses on the creation of new investment products that are unique, well-managed and high performing in comparison with their peer group. This is done through establishing partnerships with renowned real estate developers.
              </p>
              <span className="read-more-btn">
                <Icon.ArrowRight /> Read More
              </span>
            </Link>
          </div>

          <div className="col-lg-6 col-md-6">
            <Link to="/corporate-finance/" className="single-features">
              <div className="icon">
                <Icon.DollarSign />
              </div>
              <h3>
                Corporate Finance
              </h3>
              <p>
                We aspire to be the advisors of choice to our clients in Saudi Arabia and in the region. Our Corporate Finance offers capital raising and M&A advisory services to businesses, private investors and families.
                <br />
                <br />
                Our bankers have wide industry specific experience that allows us to innovate compelling structures and solutions for complex transactions.
              </p>
              <span className="read-more-btn">
                <Icon.ArrowRight /> Read More
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurFeatures;  