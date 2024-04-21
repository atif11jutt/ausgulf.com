import React from "react";
import Layout from "../components/_App/layout";
import Seo from "../components/_App/Seo";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/ITStartupTwo/MainBanner";
import Features from "../components/ITStartupTwo/Features";
import ServicesArea from "../components/ITStartupTwo/ServicesArea";
import OurServices from "../components/ITStartupTwo/OurServices";
import Team from "../components/Common/Team";
import FunFactsArea from "../components/Common/FunFactsArea";
import PricingStyleOne from "../components/PricingPlans/PricingStyleOne";
import Feedback from "../components/Common/Feedback";
import Partner from "../components/Common/Partner";
import BlogPost from "../components/Common/BlogPost";
import Footer from "../components/_App/Footer";

const ITStartup2 = () => (
    <Layout>
        <Seo title="IT Startp Demo 2" />
        <Navbar />
        <MainBanner />
        <Features />
        <ServicesArea />
        <OurServices />
        <Team />
        <FunFactsArea />
        <PricingStyleOne />
        <Feedback />
        <Partner />
        <BlogPost />
        <Footer />
    </Layout>
)

export default ITStartup2;
