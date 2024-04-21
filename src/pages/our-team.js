import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import Layout from "../components/layout";
import Seo from "../components/Seo";
import Title from "../components/Title";
import TeamBlock from "../components/OurTeam/TeamBlock";

const CorporateOverview = () => {
  const images = useStaticQuery(graphql`
    query {
      SalmanMasaud: file(relativePath: {eq: "salman-masaud.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      WarwickGrigor: file(relativePath: {eq: "warwick-grigor.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      PeterOmalley: file(relativePath: {eq: "peter-omalley.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      AdamMalouf: file(relativePath: {eq: "adam-malouf.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      BhaskarDasgupta: file(relativePath: {eq: "bhaskar-dasgupta.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      KalDesai: file(relativePath: {eq: "kal-desai.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      MustafaKheriba: file(relativePath: {eq: "mustafa-kheriba.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      AnthonyDsilva: file(relativePath: {eq: "anthony-dsilva.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      MarcAouad: file(relativePath: {eq: "marc-aouad.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      MohamedJamal: file(relativePath: {eq: "mohamed-jamal.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }      
  `);
  const SalmanMasaud = getImage(images.SalmanMasaud);
  const WarwickGrigor = getImage(images.WarwickGrigor);
  const PeterOmalley = getImage(images.PeterOmalley);
  const AdamMalouf = getImage(images.AdamMalouf);
  const BhaskarDasgupta = getImage(images.BhaskarDasgupta);
  const KalDesai = getImage(images.KalDesai);
  const MustafaKheriba = getImage(images.MustafaKheriba);
  const AnthonyDsilva = getImage(images.AnthonyDsilva);
  const MarcAouad = getImage(images.MarcAouad);
  const MohamedJamal = getImage(images.MohamedJamal);
  return (
    <Layout>
      <Seo
        title="Our Team"
        description="At Australian Gulf Capital, our values run deep, determining how we work, who we hire, how we interact with others and how we define and reward success. Our team is culturally diverse and exceptionally skilled."
      />
      <Title title="Our Team" />

      <div className="ml-feedback-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>Board of Directors</h2>
          </div>
          <TeamBlock
            title="Warwick Grigor"
            jobTitle="Non-Executive Director"
            text="Warwick Grigor has over 35 years of experience as an investment and corporate analyst with a career focused in the mining and technology sectors. He was the former chairman at Canaccord Genuity/BGF, a leading Canadian investment bank and an ex-partner to Andrew Forrest, the Australian mining billionaire and the former CEO of Fortescue Metals Group. Warwick currently sits on the board of number of companies in the resources and mining sector."
            image={WarwickGrigor}
          />
          <TeamBlock
            title="Salman Masaud"
            jobTitle="CEO, Founder & Executive Director"
            text="Salman Masaud is a chartered accountant with an actuarial background. He is the director of a number of businesses, including a consulting firm that is on the panel of service providers for the Australian Government. He recently acted as the Corporate Finance Deals and Strategy GM for an unlisted Australia rare earth development company currently preparing to list on the ASX. He is also the former CEO and Chairman of the Board of a metal casting factory in the Gulf and has an extensive work history in Big 4 firms."
            image={SalmanMasaud}
          />
          <TeamBlock
            title="Adam Malouf"
            jobTitle="Investment and Advisory Committee Member"
            text="Adam Malouf is a seasoned C-suite senior executive and non-executive director with a wealth of international and regional experience. Adam is currently Chief Investment Officer for one of the Dubai Government's sovereign wealth funds, with responsibility for all aspects of investments. Adam is also a Fellow of the Australian Institute of Company Directors, and has been a non-executive director and chairman on several operational, supervisory and advisory boards for over 20 years. Adam is the Chair of the Middle East Advisory Committee for the Australian Institute of Company Directors, the world's largest director and governance institute, with over 45,000 members across 85 countries."
            image={AdamMalouf}
          />
          
        </div>
      </div>

      <div className="ml-feedback-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>Investment & Advisory Committee</h2>
          </div>
          
          <TeamBlock
            title="Kal Desai"
            jobTitle="Investment and Advisory Committee Member"
            text="Kal Desai is an Australian qualified chartered accountant with extensive senior finance experience across Australia, the U.K. and Middle East, specializing in the media and technology industries. Currently CFO at BEAK Engineering as well as holding advisory and board positions with various companies globally, all focused on helping entrepreneurs scale their businesses towards success. Kal has led a number of successful capital raises and exits for startups including the sale of Zawya to Thomson Reuters in 2012. He was also the founding CFO for Careem, which was one of the first unicorns in the Middle East, and eventually sold to Uber for $3.1 billon."
            image={KalDesai}
          />
          <TeamBlock
            title="Anthony D'Silva"
            jobTitle="Investment and Advisory Committee Member"
            text="Anthony D'Silva is the founder of Incu Global Ltd (Incu) a global multi-family office & fund incubation platform, and prior to Incu, Anthony was a partner/equity owner of Apex Fund Services Holdings and Managing Director at Apex Investment Consulting & Apex Fund Services, an independent and privately owned globally regulated fund administration and fund advisory firm with operating offices in 34 countries. He is currently registered director with the Cayman Islands Monetary Authority (CIMA), pursuant to the Directors Registration and Licensing Law, 2014. He is also a member of Australian Institute of Company Directors (MAICD), a member of the Association of Certified Anti-Money Laundering Specialists (ACAMS) and a member Hong Kong Securities Institute (MHKSI)."
            image={AnthonyDsilva}
          />
          <TeamBlock
            title="Marc Aouad"
            jobTitle="Investment and Advisory Committee Member"
            text="Marc Aouad has over 15 years of investment banking and asset management experience. He is currently a partner and managing director of C.H Stirling, an advisory company specialized in financing, restructuring and M&A. Marc advises GCC corporates, private equity companies and sovereign entities on acquisitions, divestments growth, financing and restructuring. He most recently advised Al-Jaber group and DBA & Sons on the sale of their respective shares in UE Medical to Olive Rock and Cerberus. Marc also worked in European Real Estate Finance and CMBS structuring, and in the MENA investment banking team at Merrill Lynch in London. Marc holds a Masters in Economics from USJ (Lebanon) and a Masters of Commerce (Grande Ecole) from ESCP Europe (France)."
            image={MarcAouad}
          />

          <TeamBlock  
            title="Dr. Bhaskar Dasgupta"
            jobTitle="Investment and Advisory Committee Member"
            text="Dr. Bhaskar Dasgupta is a Senior Board Member & Business Executive with proven regulatory engagement, strategic business development, business transformation experience deploying advanced analytical and pragmatic delivery skills in various regulated and unregulated sectors – banking, markets, crypto, asset management, technology. He is currently serving on the board of several financially regulated firms as a non-executive director and on the advisory boards of several Israeli, UAE, Indian, Brazilian, and UK startups. His last full-time role was to lead the development of Abu Dhabi’s Award-Winning International Financial Centre (Abu Dhabi Global Market) and Financial Regulator (Financial Service Regulatory Authority) for sectors such as Exchanges, Crypto, Digital Banking, Broker / Dealers, Venture Capital, FinTech, Sustainable Finance & Commodities."
            image={BhaskarDasgupta}
          />
        </div>
      </div>
    </Layout>
  );
};

export default CorporateOverview;
