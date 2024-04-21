import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const TwoColumn = ({ title, text, image, right }) => (
  <div className={`two-column-wrapper${right ? ' row-reverse' : ''}`}>
    <div className="image-wrapper">
      <div className="agency-about-img">
        <GatsbyImage
          image={image}
          alt={title}
        />
      </div>
    </div>
    <div className="ptb-80">
      <div className={`text-wrapper${!right ? ' offset-lg-6' : ''}`}>
        <div className="">
          {title && (
            <h2>{title}</h2>
          )}
          {text && (
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: text }}
            />
          )}
        </div>
      </div>
    </div>
  </div>
);

export default TwoColumn;