import React from 'react';
import { Link } from "gatsby";
import * as Icon from 'react-feather';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BlogPost = () => {
  const images = useStaticQuery(graphql`
    query {
      one: file(relativePath: {eq: "about-us.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 768
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      two: file(relativePath: {eq: "mission.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 768
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      three: file(relativePath: {eq: "values.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 768
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }      
  `);
  const One = getImage(images.one);
  const Two = getImage(images.two);
  const Three = getImage(images.three);
  return (
    <div className="blog-area ptb-80">
      <div className="container">

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <div className="blog-image">
                <GatsbyImage
                  image={One}
                  alt="About Us"
                />
              </div>

              <div className="blog-post-content">
                <h3>
                  About Us
                </h3>

                <p>
                  Australian Gulf Capital is a prominent global investment management company specializing in alternative investments and providing innovative world-class products and services.
                  <br />
                  <br />
                  Australian Gulf Capital's diversified investor base includes corporations, financial institutions, sovereign wealth funds, pension funds, qualified high-net-worth investors and family offices.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <div className="blog-image">
                <GatsbyImage
                  image={Two}
                  alt="Our Mission"
                />
              </div>

              <div className="blog-post-content">
                <h3>
                  Our Mission
                </h3>

                <p>
                  At Australian Gulf Capital, we strive to be at the forefront of the financial markets' evolution.
                  <br />
                  <br />
                  We grow capital and build value for our clients by applying world-class expertise and best practice execution to generate sustainable, superior performance.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <div className="blog-image">
                <GatsbyImage
                  image={Three}
                  alt="Our Values"
                />
              </div>

              <div className="blog-post-content">
                <h3>
                  Our Values
                </h3>

                <p>
                  At Australian Gulf Capital, our values run deep, determining how we work, who we hire, how we interact with others and how we define and reward success. We nurture and support our teams within a collaborative environment that is designed to bring out the best in our employees.
                  <br />
                  <br />
                  Our team is culturally diverse and exceptionally skilled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost;  