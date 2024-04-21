import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from "../components/layout";
import Seo from "../components/Seo";
import Title from "../components/Title";
import TwoColumn from "../components/CorporateOverview/TwoColumn";
import TwoColumnText from "../components/CorporateFinance/TwoColumnText";

const CorporateFinance = () => {
  const images = useStaticQuery(graphql`
    query {
      corporatefinanceone: file(relativePath: {eq: "corporate-finance-1.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      corporatefinancetwo: file(relativePath: {eq: "corporate-finance-2.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      corporatefinancethree: file(relativePath: {eq: "corporate-fiance-3.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      corporatefinancefour: file(relativePath: {eq: "corporate-finance-4.jpg"}) {
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
  const corporatefinanceone = getImage(images.corporatefinanceone);
  const corporatefinancetwo = getImage(images.corporatefinancetwo);
  const corporatefinancethree = getImage(images.corporatefinancethree);
  const corporatefinancefour = getImage(images.corporatefinancefour);

  return (
    <Layout>
      <Seo
        title="Corporate Finance"
        description="We provide a full suite of domestic and cross-border M&A services to clients including mergers, acquisitions, sales, joint ventures and corporate restructuring."
      />
      <Title title="Corporate Finance" />
      <TwoColumn
        title="Feasibility & Transaction Advisory"
        text="We review business plans and validate complex financial models for our clients. We critique risk frameworks and design risk mitigation advice and help our clients refine and develop complex financial projections"
        image={corporatefinanceone}
        right={false}
      />
      <div className="bg-f7fafd">
        <TwoColumn
          title="Our Expertise"
          text="I can provide expert valuation advice pertaining to intangible assets and intellectual property such as brands. We can also undertake purchase price allocations (PPA) on acquisitions, as well as impairment testing on acquisitions for accounting purposes. Our team completes cost of capital analysis including WACC, and cost of equity analysis."
          image={corporatefinancetwo}
          right={true}
        />
      </div>
      <TwoColumn
        title="Mergers & Acquisitions"
        text="<p>We provide a full suite of domestic and cross-border M&A services to clients including mergers, acquisitions, sales, joint ventures and corporate restructuring.</p><p>Our divestiture advisory team covers buy/sell-side process management, including sourcing of ventures, valuations, preparation of the marketing documentation, deal negotiation and closing.</p><p>We can assist teams to identify acquisition targets in all the major markets and with specialised access in specific countries including in the GCC as well as Australia, Turkey and Pakistan.</p>"
        image={corporatefinancethree}
        right={false}
      />
      <div className="bg-f7fafd">
        <TwoColumn
          title="Financing"
          text="<p>Our team of bankers have experience in structuring and executing a diverse mix of equity offerings and debt issuance transactions. They can lease public and private capital raisings and recapitalization. Our debt issuance services can help our clients with structuring and negotiating Sharia compliant bank loans, public and private issuances of Sukuk and all refinancing solutions.</p>"
          image={corporatefinancefour}
          right={true}
        />
      </div>
    </Layout>
  );
};

export default CorporateFinance;
