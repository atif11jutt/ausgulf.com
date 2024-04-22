import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import Crossfund from "../../images/portfolio/crossfund.inline.svg";

const Partner = () => {
  const images = useStaticQuery(graphql`
    query {
      niftifybeta: file(relativePath: {eq: "portfolio/niftify-beta.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 352
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      anthropic: file(relativePath: {eq: "portfolio/anthropic.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 352
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      renie: file(relativePath: {eq: "portfolio/renie.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 352
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      coreweave: file(relativePath: {eq: "portfolio/coreweave.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 352
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      groq: file(relativePath: {eq: "portfolio/groq.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 352
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      councilofkings: file(relativePath: {eq: "portfolio/council-of-kings.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 352
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      genesysgo: file(relativePath: {eq: "portfolio/genesysgo.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 352
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      basismarkets: file(relativePath: {eq: "portfolio/basis-markets.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 352
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      mrhbdefi: file(relativePath: {eq: "portfolio/mrhb-defi.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 352
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      allart: file(relativePath: {eq: "portfolio/all-art.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 352
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      renovi: file(relativePath: {eq: "portfolio/renovi.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 352
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      mma: file(relativePath: {eq: "portfolio/mma.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 352
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      pipe: file(relativePath: {eq: "portfolio/pipe.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 352
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      rizq: file(relativePath: {eq: "portfolio/rizq.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 352
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      devnation: file(relativePath: {eq: "portfolio/devnation.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 352
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      softmining: file(relativePath: {eq: "portfolio/softmining.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 352
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      vulcanaugmetics: file(relativePath: {eq: "portfolio/vulcan-augmetics.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 352
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      aplushome: file(relativePath: {eq: "portfolio/a.plus-home.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 352
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      motusoperandi: file(relativePath: {eq: "portfolio/motus-operandi.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 352
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      muv: file(relativePath: {eq: "portfolio/muv.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 352
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      desolates: file(relativePath: {eq: "portfolio/desolates.jpeg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 352
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }      
  `);
  const niftifybeta = getImage(images.niftifybeta);
  const renie = getImage(images.renie);
  const anthropic = getImage(images.anthropic);
  const coreweave = getImage(images.coreweave);
  const groq = getImage(images.groq);
  const councilofkings = getImage(images.councilofkings);
  const genesysgo = getImage(images.genesysgo);
  const basismarkets = getImage(images.basismarkets);
  const mrhbdefi = getImage(images.mrhbdefi);
  const allart = getImage(images.allart);
  const renovi = getImage(images.renovi);
  const mma = getImage(images.mma);
  const pipe = getImage(images.pipe);
  const rizq = getImage(images.rizq);
  const devnation = getImage(images.devnation);
  const softmining = getImage(images.softmining);
  const vulcanaugmetics = getImage(images.vulcanaugmetics);
  const aplushome = getImage(images.aplushome);
  const motusoperandi = getImage(images.motusoperandi);
  const muv = getImage(images.muv);
  const desolates = getImage(images.desolates);
  return (
    <>
      <div className="ready-to-talk">
        <div className="container">
          <h1>Selected Portfolio Holdings</h1>
        </div>
      </div>

      <div className="partner-area partner-section pb-50">
        <div className="container">
          <div className="partner-inner">
            <div className="row justify-content-center">
            <div className="col-12 text-white h2 mt-5 mb-3">Artificial Intelligence & Quantum Computing</div>

              <div className="col-lg-2 col-md-3 col-6">
                <div className="partner-tile">
                  <GatsbyImage image={coreweave} alt="coreweave" />
                  <GatsbyImage image={coreweave} alt="coreweave" />
                </div>
              </div>

              <div className="col-lg-2 col-md-3 col-6">
                <div className="partner-tile">
                  <GatsbyImage image={groq} alt="groq" />
                  <GatsbyImage image={groq} alt="groq" />
                </div>
              </div>

              <div className="col-lg-2 col-md-3 col-6">
                <div className="partner-tile">
                  <GatsbyImage image={anthropic} alt="anthropic" />
                  <GatsbyImage image={anthropic} alt="anthropic" />
                </div>
              </div>

              <div className="col-12 text-white h2 mt-5 mb-3">Fintech</div>

              <div className="col-lg-2 col-md-3 col-6">
                <div className="partner-tile">
                  <Crossfund />
                  <Crossfund />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-6">
                <div className="partner-tile">
                  <GatsbyImage image={pipe} alt="pipe" />
                  <GatsbyImage image={pipe} alt="pipe" />
                </div>
              </div>

              <div className="col-12 text-white h2 mt-5 mb-3">Waste Management/Recycling</div>

              <div className="col-lg-2 col-md-3 col-6">
                <div className="partner-tile">
                  <GatsbyImage image={renie} alt="niftify beta" />
                  <GatsbyImage image={renie} alt="niftify beta" />
                </div>
              </div>

              <div className="col-12 text-white h2 mt-5 mb-3">Blockchain/Web3</div>

              <div className="col-lg-2 col-md-3 col-6">
                <div className="partner-tile">
                  <GatsbyImage image={niftifybeta} alt="niftify beta" />
                  <GatsbyImage image={niftifybeta} alt="niftify beta" />
                </div>
              </div>

              <div className="col-lg-2 col-md-3 col-6">
                <div className="partner-tile">
                  <GatsbyImage image={mrhbdefi} alt="mrhbdefi" />
                  <GatsbyImage image={mrhbdefi} alt="mrhbdefi" />
                </div>
              </div>

              <div className="col-lg-2 col-md-3 col-6">
                <div className="partner-tile">
                  <GatsbyImage image={renovi} alt="renovi" />
                  <GatsbyImage image={renovi} alt="renovi" />
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Partner;  