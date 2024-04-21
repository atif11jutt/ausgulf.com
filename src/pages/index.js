import React from "react";
import Layout from "../components/layout";
import Seo from "../components/Seo";
import MainBanner from "../components/Index/MainBanner";
import ThreeColumn from "../components/Index/ThreeColumn";

const IndexPage = () => (
  <Layout>
    <Seo
      title="Home"
      description="Australian Gulf Capital is a prominent global investment management company specializing in alternative investments and providing innovative world-class products and services."
    />
    <MainBanner />
    <ThreeColumn />
  </Layout>
);

export default IndexPage;
