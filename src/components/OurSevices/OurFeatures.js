import React from 'react';
import { Link } from "gatsby";
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import * as Icon from 'react-feather';

const OurFeatures = ({ title }) => {
  const images = useStaticQuery(graphql`
    query {
      PrivateEquity: file(relativePath: {eq: "private-equity.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      corporatefinanceone: file(relativePath: {eq: "corporate-finance-1.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      VentureCapital: file(relativePath: {eq: "venture-capital.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      realestate: file(relativePath: {eq: "real-estate.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      digitalassets: file(relativePath: {eq: "digital-assets.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }      
  `);
  const finance = getImage(images.corporatefinanceone);
  const privateequity = getImage(images.PrivateEquity);
  const ventureCapital = getImage(images.VentureCapital);
  const realestate = getImage(images.realestate);
  const digitalassets = getImage(images.digitalassets);

  return (
    <div className="features-area ptb-80">
      <div className="container">
        {title && (
          <div className="section-title">
            <h2>What We Bring To You</h2>
          </div>
        )}

        <div className="row-single-feature-bg-image justify-content-center">
          <Link to="/private-equity/" className="single-feature-bg-image">
            <GatsbyImage
              image={privateequity}
              alt="Private Equity"
            />
            <h3>
              Private Equity
            </h3>
          </Link>
          <Link to="/venture-capital/" className="single-feature-bg-image">
            <GatsbyImage
              image={ventureCapital}
              alt="Venture Capital"
            />
            <h3>
              Venture Capital
            </h3>
          </Link>
          <Link to="/real-estate/" className="single-feature-bg-image">
            <GatsbyImage
              image={realestate}
              alt="Real Estate"
            />
            <h3>
              Real Estate
            </h3>
          </Link>
          <Link to="/corporate-finance/" className="single-feature-bg-image">
            <GatsbyImage
              image={finance}
              alt="Corporate Finance"
            />
            <h3>
              Corporate Finance
            </h3>
          </Link>
          <Link to="/digital-assets/" className="single-feature-bg-image">
            <GatsbyImage
              image={digitalassets}
              alt="Digital Assets"
            />
            <h3>
              Digital Assets
            </h3>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OurFeatures;  