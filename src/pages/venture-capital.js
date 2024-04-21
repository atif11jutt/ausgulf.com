import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from "../components/layout";
import Seo from "../components/Seo";
import Title from "../components/Title";
import TwoColumn from "../components/CorporateOverview/TwoColumn";

const VentureCapital = () => {
  const images = useStaticQuery(graphql`
    query {
      VentureCapital: file(relativePath: {eq: "venture-capital.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      VentureCapitalOne: file(relativePath: {eq: "vc-1.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      VentureCapitalTwo: file(relativePath: {eq: "vc-2.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      VentureCapitalThree: file(relativePath: {eq: "vc-3.jpg"}) {
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
  const ventureCapital = getImage(images.VentureCapital);
  const VentureCapitalOne = getImage(images.VentureCapitalOne);
  const VentureCapitalTwo = getImage(images.VentureCapitalTwo);
  const VentureCapitalThree = getImage(images.VentureCapitalThree);
  return (
    <Layout>
      <Seo
        title="Venture Capital"
        description="We invest in the very early stages of the company lifecycle and secure backing from a select list of capital partners. We look for companies that exist within our sphere of influence and where we can add some value operationally"
      />
      <Title title="Venture Capital" />
      <TwoColumn
        title="Pre-Seed to Series A"
        text="We invest in the very early stages of the company lifecycle and secure backing from a select list of capital partners. We look for companies that exist within our sphere of influence and where we can add some value operationally, in addition to the benefit of capital injection."
        image={VentureCapitalOne}
        right={true}
      />
      <div className="bg-f7fafd">
        <TwoColumn
          title="Syndicates"
          text="AG capital can lead, and manage, large investment syndicates."
          image={VentureCapitalTwo}
          right={false}
        />
      </div>
      <TwoColumn
        title="Advisory Support"
        text="In certain circumstances, where a company is not ready for our investment, we can still support the founders with advisory and consultancy services. These services can be provided in exchange for equity."
        image={VentureCapitalThree}
        right={true}
      />
      <div className="bg-f7fafd">
        <TwoColumn
          title="Capital Raising & Liquidity Events"
          text="AG capital can assist in raising capital, debt, and providing strategic advice on these actions. We can also assist with liquidity events and IPOs in multiple markets."
          image={ventureCapital}
          right={false}
        />
      </div>
    </Layout>
  );
};

export default VentureCapital;
