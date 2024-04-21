import React from 'react';
import * as Icon from 'react-feather';

const OurServices = () => {
  return (
    <div className="ml-services-area ptb-80 bg-f7fafd">
      <div className="container">
        <div className="section-title">
          <h2>Our Key Values</h2>
          <div className="bar"></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6">
            <div className="single-ml-services-box">
              <div className="image">
                <Icon.ThumbsUp />
              </div>
              <h3>
                Excellence & Elegance
              </h3>
              <p>We have a long legacy and deep culture of excellence in investing. We achieve exceptional returns through our creativity, passion, and relentless focus on results, while maintaining a sense of refinement in all that we do. We aim to identify new opportunities and capitalize on them before others do.</p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-ml-services-box">
              <div className="image">
                <Icon.Users />
              </div>
              <h3>
                Leadership & Teamwork
              </h3>
              <p>Everyone at AG Capital is a leader, responsible for making a unique contribution toward the successes of each other and of our mission. We share credit when we meet with success and support each other when challenges arise. We have the courage to speak the truth, but always maintain a sense of humility and highest ethical standards.</p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-ml-services-box">
              <div className="image">
                <Icon.Wifi />
              </div>
              <h3>
                Social Impact
              </h3>
              <p>We work to generate and allocate the capital and ideas that can help people live more prosperous lives. If we want to change our destiny, we must first change our thinking. We strive to see a more prosperous world</p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-ml-services-box">
              <div className="image">
                <Icon.UserCheck />
              </div>
              <h3>
                Client First Approach
              </h3>
              <p>Always endeavoring to anticipate our clients' needs and changes in the markets where we operate. Placing the interests of our clients and partners first.</p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-ml-services-box">
              <div className="image">
                <Icon.Feather />
              </div>
              <h3>
                Our Culture
              </h3>
              <p>We foster a creative, innovative, dynamic and entrepreneurial culture allowing us to deliver new solutions for our clients.</p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-ml-services-box">
              <div className="image">
                <Icon.GitPullRequest />
              </div>
              <h3>
                Shareholders' Equity
              </h3>
              <p>At Australian Gulf Capital, we work hard to maximize the value of our shareholders' and investors' equity.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;