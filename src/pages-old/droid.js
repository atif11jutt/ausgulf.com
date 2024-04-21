import React from "react";
import Layout from "../components/_App/layout";
import Navbar from "../components/droid/navBar";
import MainBanner from "../components/droid/MainBanner";
import InfoBoxes from "../components/droid/infoBoxes";
import ThreeTile from "../components/droid/ThreeTile";
import FreeAccess from "../components/droid/freeAccess";
import AllInvestments from "../components/droid/allInvestments";
import Diversified from "../components/droid/diversified";
import CoinToken from "../components/droid/coinToken";
import NFT from "../components/droid/nft";
import BlueChip from "../components/droid/blueChip";
import AlgoTrading from "../components/droid/algoTrading";
import BasisTrading from "../components/droid/basisTrades";
import Experience from "../components/droid/experience";
import Contact from "../components/droid/contact";
import NFTFact from "../components/droid/NFTFacts";
import Footer from "../components/droid/footer";

const Droid = () => (
    <Layout>
      <Navbar />
      <MainBanner />
      <InfoBoxes />
      <FreeAccess />
      <ThreeTile />
      <NFTFact />
      <AllInvestments />
      <Diversified />
      <CoinToken />
      <NFT />
      <BlueChip />
      <AlgoTrading />
      <BasisTrading />
      <Experience />
      <Contact />
      <Footer />
    </Layout>
)

// logo copyright socials footer
export default Droid;
