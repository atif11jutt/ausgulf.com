import React from "react";
import Layout from "../components/_App/layout";
import Seo from "../components/_App/Seo"; 
import NavbarStyleTwo from "../components/_App/NavbarStyleTwo";
import MainBanner from "../components/Hosting/MainBanner";
import TopFeatures from '../components/Hosting/TopFeatures';
import DomainSearch from '../components/Hosting/DomainSearch';
import WhyChoose from '../components/Hosting/WhyChoose';
import PricingStyleTwo from '../components/PricingPlans/PricingStyleTwo';
import FeedbackStyleTwo from '../components/Common/FeedbackStyleTwo';
import Partner from "../components/Common/Partner";
import Features from '../components/Hosting/Features';
import BlogPost from "../components/Common/BlogPost";
import Cta from '../components/Common/CTA';
import Footer from "../components/_App/Footer";

const Hosting = () => (
    <Layout>
        <Seo title="Hosting Home" /> 
        <NavbarStyleTwo />
        <MainBanner />
        <TopFeatures />
        <DomainSearch />
        <WhyChoose />
        <PricingStyleTwo />
        <FeedbackStyleTwo />
        <div className="pb-80">
            <Partner />
        </div>
        <Features />
        <BlogPost />
        <Cta />
        <Footer />
    </Layout>
)

export default Hosting;
