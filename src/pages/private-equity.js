import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from "../components/layout";
import Seo from "../components/Seo";
import Title from "../components/Title";
import TwoColumn from "../components/CorporateOverview/TwoColumn";
import Intro from "../components/PrivateEquity/Intro";

const PrivateEquity = () => {
  const images = useStaticQuery(graphql`
    query {
      PrivateEquity: file(relativePath: {eq: "private-equity.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      PrivateEquityOne: file(relativePath: {eq: "private-equity-1.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      PrivateEquityThree: file(relativePath: {eq: "private-equity-3.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      PrivateEquityFour: file(relativePath: {eq: "private-equity-4.jpg"}) {
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
  const privateequity = getImage(images.PrivateEquity);
  const privateEquityOne = getImage(images.PrivateEquityOne);
  const privateEquityThree = getImage(images.PrivateEquityThree);
  const privateEquityFour = getImage(images.PrivateEquityFour);

  return (
    <Layout>
      <Seo
        title="Private Equity"
        description="We are experts in designing partnerships that bring together international bidding consortiums to acquire Gulf based companies and to establish new projects. "
      />
      <Title title="Private Equity" />
      <TwoColumn
        title="Acquire Majority, or Significant Minority, Stakes in Non-Core Operating Companies Owned by Diversified Family Groups"
        text="<p>Many GCC based, diversified, family group companies face management and succession challenges that severely restrict their growth potential within the region. AGC's collective global experience in managing portfolio companies, and our contemporary approach to building collaborative relationships, can relieve these corporate pressures.</p<p>We aim to quicky grow our acquired targets and efficiently prepare them for optimised exits via private sales or an Initial Public Offering (IPO) within a three to five-year period.</p>"
        image={privateEquityOne}
        right={false}
      />
      <div className="bg-f7fafd">
        <TwoColumn
          title="Acquire Cornerstone Positions In Blue-Chip Companies With IPO Prospects"
          text="We assist high-potential companies navigate IPOs thereby allowing founding teams to focus on creating value. We work with the existing shareholder base, along with our client's management teams, to facilitate successful exits"
          image={privateequity}
          right={true}
        />
      </div>
      <TwoColumn
        title="Acquisition Partnerships with International Players to Establish Projects in Gulf Countries"
        text="We are experts in designing partnerships that bring together international bidding consortiums to acquire Gulf based companies and to establish new projects. We have deep cultural ties to the region and have access to an influential network of partners spanning across the Gulf's Public and Private sectors."
        image={privateEquityThree}
        right={false}
      />
      <div className="bg-f7fafd">
        <TwoColumn
          title="Investments In Small and Medium Size Enterprises"
          text="AGC targets companies that have demonstrated growth, alongside reliable profit pathways, with approximately two to three years of operational experience. We like to invest in strong and experienced management teams who show an ability to scale and who operate with integrity."
          image={privateEquityFour}
          right={true}
        />
      </div>
    </Layout>
  );
};

export default PrivateEquity;
