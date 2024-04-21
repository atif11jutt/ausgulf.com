import React from "react";
import Layout from "../components/layout";
import Seo from "../components/Seo";
import Partner from "../components/Portfolio/Partner";

const Portfolio = () => {
  return (
    <Layout classWrapper="portfolio-page">
      <Seo
        title="Selected Portfolio Holdings"
        description="We adhere to a clear strategy that actively manages risk despite volatile market movements. The company's Blockchain Innovators fund consists of a diversified portfolio containing our favourite ideas from the Metaverse, DeFi, Gaming and NFT spaces."
      />
      <Partner />
    </Layout>
  );
};

export default Portfolio;
