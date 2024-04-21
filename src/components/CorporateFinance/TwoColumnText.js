import React from 'react';

const TwoColumnText = ({ titleColOne, textColOne, titleColTwo, textColTwo }) => (
  <div className="ptb-80 two-column-text">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          {titleColOne && (
            <h2>{titleColOne}</h2>
          )}
          {titleColOne && (
            <div className="bar"></div>
          )}
          {textColOne && (
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: textColOne }}
            />
          )}
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="">
            {titleColTwo && (
              <h2>{titleColTwo}</h2>
            )}
            {titleColTwo && (
              <div className="bar"></div>
            )}
            {textColTwo && (
              <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: textColTwo }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TwoColumnText;