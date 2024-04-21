import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const MainBanner = () => {
  const video = useStaticQuery(graphql`
    query {
      file: file(relativePath: {eq: "banner-video.mp4"}) {
        publicURL
      }
      placeholder: file(relativePath: {eq: "slide6.jpg"}) {
        publicURL
      }
    }      
  `);
  return (
    <div className="bigdata-analytics-banner">
      {video.file.publicURL && (
        <video
          muted={true}
          autoPlay={true}
          loop={true}
          playsInline={true}
          preload="auto"
        >
          <source src={video.file.publicURL} type="video/mp4" poster={video.placeholder.publicURL} />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="container">
        <div className="bigdata-analytics-content">
          <h1>AUSTRALIAN GULF CAPITAL</h1>
          <p>Structuring innovative investment solutions for reduced risk and sustainable growth.</p>
        </div>
      </div>
    </div>
  )
}

export default MainBanner;  