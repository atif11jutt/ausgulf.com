import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from "../components/layout";
import Seo from "../components/Seo";
import Title from "../components/Title";
import TwoColumn from "../components/CorporateOverview/TwoColumn";

const RealEstate = () => {
  const images = useStaticQuery(graphql`
    query {
      realestate: file(relativePath: {eq: "real-estate.jpg"}) {
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
  const realestate = getImage(images.realestate);

  return (
    <Layout>
      <Seo
        title="Real Estate"
        description="Our Real Estate investment philosophy is built upon a deep understanding of markets fundamentals and a meticulous valuation process"
      />
      <Title title="Real Estate" />
      <TwoColumn
        title="Our Investment Philosophy"
        text="<p>Our Real Estate investment philosophy is built upon a deep understanding of markets fundamentals and a meticulous valuation process. We are fielding increasingly interest from Gulf investors who are seeking exposure to the Australian Real Estate market.</p>"
        image={realestate}
        right={false}
      />
    </Layout>
  );
};

export default RealEstate;
