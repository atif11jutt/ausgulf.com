import React from 'react';
import { Link } from "gatsby";
import * as Icon from 'react-feather';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Footer = () => {
  const images = useStaticQuery(graphql`
    query {
      logo: file(relativePath: {eq: "logo.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 350
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }      
  `);
  const currentYear = new Date().getFullYear();
  const Logo = getImage(images.logo);

  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-sm-6">
            <div className="single-footer-widget">
              <div className="logo">
                <Link to="/">
                  <GatsbyImage
                    image={Logo}
                    alt="Australian gulf capital"
                  />
                </Link>
              </div>
              <p>
                &copy; {currentYear} Australian Gulf Capital Pty Ltd. Registered with ASIC under company number 640558498. ADGM commercial license number 0000007479. Registered in the USA as an LLC with registration number 3003179.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 offset-lg-1">
            <div className="single-footer-widget">
              <h3>Support</h3>
              <ul className="list">
                <li>
                  <Link to="/disclaimer">
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget">
              <h3>Social</h3>

              <ul className="social-links">
                <li>
                  <a href="https://twitter.com/AusGulfCapital" className="twitter" target="_blank" aria-label="Twitter" rel="noreferrer"><Icon.Twitter /></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/australian-gulf-capital/" className="linkedin" target="_blank" aria-label="LinkedIn" rel="noreferrer"><Icon.Linkedin /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer; 