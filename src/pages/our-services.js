import React from "react";
import Layout from "../components/layout";
import Seo from "../components/Seo";
import OurFeatures from "../components/OurSevices/OurFeatures";
import Title from "../components/Title";

const OurSevices = () => (
  <Layout>
    <Seo
      title="Our Services"
      description="At Australian Gulf Capital, we strive to be at the forefront of the financial markets' evolution. We grow capital and build value for our clients by applying world-class expertise and best practice execution to generate sustainable, superior performance."
    />
    <Title title="Our Services" />
    <OurFeatures title={false} />
  </Layout>
);

export default OurSevices;
