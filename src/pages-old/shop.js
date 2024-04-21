import React from "react";
import Layout from "../components/_App/layout";
import Seo from "../components/_App/Seo"; 
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from '../components/Common/PageBanner';
import ProductCard from '../components/Shop/ProductCard';

const Shop = () => (
    <Layout>
        <Seo title="Shop" /> 

        <Navbar />

        <PageBanner pageTitle="Products" /> 

        <ProductCard />

        <Footer />
    </Layout>
)

export default Shop;