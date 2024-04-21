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
  const digitalassets = getImage(images.digitalassets);

  return (
    <Layout>
      <Seo
        title="Digital Assets"
        description="Australian Gulf Capital sees crypto as a multi-decade, multi-trillion-dollar opportunity. We are focused on identifying only the highest-quality opportunities for our clients"
      />
      <Title title="Digital Assets" />
      <TwoColumn
        text="<p>Australian Gulf Capital sees crypto as a multi-decade, multi-trillion-dollar opportunity. It is clear to us that a technological paradigm shift is underway. New industries are being created and others are being transformed. As we speak, the new wave of generational companies is emerging from within the crypto-ecosystem.</p><p>We are focused on identifying only the highest-quality opportunities for our clients. We adhere to a clear strategy that actively manages risk despite volatile market movements. The company's Blockchain Innovators fund consists of a diversified portfolio containing our favourite ideas from the Metaverse, DeFi, Gaming and NFT spaces.</p>"
        image={digitalassets}
        right={true}
      />
    </Layout>
  );
};

export default RealEstate;
