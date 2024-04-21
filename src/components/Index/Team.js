import React from 'react';
import Loadable from '@loadable/component'
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
  items: 3,
  loop: true,
  nav: false,
  dots: true,
  margin: 30,
  autoplay: false,
  smartSpeed: 200,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    900: {
      items: 3
    },
    1200: {
      items: 3
    },
    1500: {
      items: 3
    }
  }
}

const Team = () => {
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
    }      
  `);
  const [display, setDisplay] = React.useState(false);
  const SalmanMasaud = getImage(images.SalmanMasaud);
  const WarwickGrigor = getImage(images.WarwickGrigor);
  const PeterOmalley = getImage(images.PeterOmalley);
  const AdamMalouf = getImage(images.AdamMalouf);
  const KalDesai = getImage(images.KalDesai);
  const MustafaKheriba = getImage(images.MustafaKheriba);
  const AnthonyDsilva = getImage(images.AnthonyDsilva);
  const MarcAouad = getImage(images.MarcAouad);

  React.useEffect(() => {
    setDisplay(true);
  }, [])

  return (
    <div className="team-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>Meet Our Team</h2>
        </div>
      </div>

      {display ? <OwlCarousel
        className="team-slider owl-carousel owl-theme owl-theme-style"
        {...options}
      >
        <div className="single-team">
          <div className="team-image">
            <GatsbyImage
              image={SalmanMasaud}
              alt="Salman Masaud"
            />
          </div>

          <div className="team-content">
            <div className="team-info">
              <h3>Salman Masaud</h3>
              <span>CEO, Founder and Executive Director</span>
            </div>

            <p>
              Salman Masaud is a chartered accountant with an actuarial background. He is the director of a number of businesses, including a consulting firm that is on the panel of service providers for the Australian Government.
            </p>
          </div>
        </div>

        <div className="single-team">
          <div className="team-image">
            <GatsbyImage
              image={WarwickGrigor}
              alt="Warwick Grigor"
            />
          </div>

          <div className="team-content">
            <div className="team-info">
              <h3>Alex Maxwel</h3>
              <span>Non-Executive Director</span>
            </div>

            <p>Warwick Grigor has over 35 years of experience as an investment and corporate analyst, specialized in the mining and technology sectors.
              <br />
              <br />
              He was the former chairman at Canaccord Genuity/BGF, a leading Canadian investment bank and an ex-partner to Andrew Forrest, the Australian mining billionaire and the former CEO of Fortescue Metals Group. Warwick currently sits on the board of number of companies in the resources and mining sector.</p>
          </div>
        </div>

        <div className="single-team">
          <div className="team-image">
            <GatsbyImage
              image={PeterOmalley}
              alt="Peter O'Malley"
            />
          </div>

          <div className="team-content">
            <div className="team-info">
              <h3>Peter O'Malley</h3>
              <span>Non-Executive Director</span>
            </div>

            <p>
              Peter O'Malley is an investor and investment banker with 30 years of international experience principally covering natural resources and technology companies. He has executed over $600 billion in transactions across multiple jurisdictions and disciplines including, but not limited to; mergers and acquisitions, equity and debt financing, convertibles, commodities and liability management.
            </p>
          </div>
        </div>

        <div className="single-team">
          <div className="team-image">
            <GatsbyImage
              image={AdamMalouf}
              alt="Adam Malouf"
            />
          </div>

          <div className="team-content">
            <div className="team-info">
              <h3>Adam Malouf</h3>
              <span>Investment and Advisory Committee Member</span>
            </div>

            <p>
              Adam is a seasoned and dynamic C-suite senior executive and non-executive director with a wealth of international and regional experience in strategic, technical and functional areas, having worked with multinational corporations, government, regional conglomerates, family offices, private investment offices and sovereign wealth funds.
            </p>
          </div>
        </div>

        <div className="single-team">
          <div className="team-image">
            <GatsbyImage
              image={KalDesai}
              alt="Kal Desai"
            />
          </div>

          <div className="team-content">
            <div className="team-info">
              <h3>Kal Desai</h3>
              <span>Investment and Advisory Committee Member</span>
            </div>
            <p>
              Kal is an Australian qualified chartered accountant with extensive senior finance experience across Australia, the U.K. and Middle East, specialising in the media and technology industries.  Currently CFO at BEAK Engineering as well as holding advisory and board positions with various companies globally. He was also the founding CFO for Careem, which was one of the first unicorns in the Middle East, and eventually sold to Uber for $3.1b.
            </p>
          </div>
        </div>

        <div className="single-team">
          <div className="team-image">
            <GatsbyImage
              image={MustafaKheriba}
              alt="Mustafa Kheriba"
            />
          </div>

          <div className="team-content">
            <div className="team-info">
              <h3>Mustafa Kheriba</h3>
              <span>Non-Executive Director</span>
            </div>

            <p>
              Mustafa is currently focused on helping listed and non listed entities extract shareholder value through him serving on their respective boards and advising them. Mustafa is the Ex-Deputy Chief Executive Officer and Group Head of Asset & Wealth Management at Shuaa Capital where he oversaw all deal origination, structuring, fund raising, portfolio management and special purpose investments.
            </p>
          </div>
        </div>

        <div className="single-team">
          <div className="team-image">
            <GatsbyImage
              image={AnthonyDsilva}
              alt="Anthony D'Silva"
            />
          </div>

          <div className="team-content">
            <div className="team-info">
              <h3>Anthony D'Silva</h3>
              <span>Investment and Advisory Committee Member</span>
            </div>

            <p>Anthony D'Silva has been involved in the financial services, asset management and alternative  investment industry since 2000. An Australian national currently residing between Cayman, Europe &  Asia and having extensively travelled and conducted business in major financial hubs globally.</p>
          </div>
        </div>

        <div className="single-team">
          <div className="team-image">
            <GatsbyImage
              image={MarcAouad}
              alt="Marc Aouad"
            />
          </div>

          <div className="team-content">
            <div className="team-info">
              <h3>Marc Aouad</h3>
              <span>Investment and Advisory Committee Member</span>
            </div>

            <p>
              Marc Aouad has over 15 years of investment banking and asset management experience. He is currently a partner and managing director of C.H Stirling, an advisory company specialized in financing, restructuring and M&A.
              Marc advises GCC corporates, private equity companies and sovereign entities on acquisitions, divestments growth, financing and restructuring. He most recently advised Al Jaber group and DBA & Sons on the sale of their respective shares in UE Medical to Olive Rock and Cerberus.
            </p>
          </div>
        </div>
      </OwlCarousel> : ''}
    </div>
  )
}

export default Team;