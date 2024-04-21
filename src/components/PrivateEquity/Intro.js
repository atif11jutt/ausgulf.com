import React from 'react';

const Intro = ({ title, text }) => (
  <div className="ptb-80 intro-wrapper">
    <div className="container">
      <div className="section-title">
        <h2>{title}</h2>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </div>
  </div>
);

export default Intro;