import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const TeamBlock = ({ image, title, jobTitle, text }) => (
  <div className="single-ml-feedback-item">
    <div className="client-info">
      <GatsbyImage
        className="profile-pic"
        image={image}
        alt={title}
      />
      <h3>{title}</h3>
      <span>{jobTitle}</span>
    </div>
    {text && (
      <div
        className="client-info-content"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: text }}
      />
    )}
  </div>
);

export default TeamBlock;