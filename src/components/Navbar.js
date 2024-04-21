import React from "react";
import { Link } from 'gatsby';
import * as Icon from 'react-feather';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Navbar = () => {
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
      file(name: {eq: "agc-deck"}) {
        publicURL
      }
    }      
  `);
  const [menu, setMenu] = React.useState(true);
  const Logo = getImage(images.logo);
  const { publicURL } = images.file;

  const toggleNavbar = () => {
    setMenu(!menu)
  }

  React.useEffect(() => {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  })

  const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
  const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

  return (
    <header id="header" className="headroom">
      <div className="startp-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link to="/" onClick={toggleNavbar} className="navbar-brand">
              <GatsbyImage
                image={Logo}
                alt="Australian gulf capital"
              />
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/our-team" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                    Our Team
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/our-services" className="nav-link">
                    Our Services <Icon.ChevronDown />
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to="/private-equity" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                        Private Equity
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/venture-capital" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                        Venture Capital
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/corporate-finance" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                        Corporate Finance
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/real-estate" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                        Real Estate
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/digital-assets" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                        Digital assets
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link to="#" activeClassName="active" className="nav-link">
                    Media
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link to="/portfolio" activeClassName="active" className="nav-link">
                    Portfolio
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/contact-us" activeClassName="active" className="nav-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;