import React from 'react';

import Client1 from '../../images/client-image/client1.jpg'
import Client2 from '../../images/client-image/client2.jpg'
import Client3 from '../../images/client-image/client3.jpg'

import Loadable from '@loadable/component'
// const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    loop: false,
    nav: false,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
};

const FeedbackStyleFive = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="agency-portfolio-feedback-area ptb-80">
            <div className="container">
                {/* {display ? <OwlCarousel 
                    className="agency-portfolio-feedback-slides owl-carousel owl-theme"
                    {...options}
                >  
                    <div className="agency-portfolio-feedback-item">
                        <img src={Client1} alt="something" />
                        <p>Pellentesque sed purus eu urna vulputate interdum quis sit amet sapien. Pellentesque porta mauris at orci sagittis commodo. Curabitur aliquam nibh odio, vel ornare nisl volutpat quis. Maecenas congue dapibus lacus id fringilla. Vestibulum id augue massa. Proin sed neque dapibus, vulputate ligula eget, aliquam eros.</p>
                    </div>

                    <div className="agency-portfolio-feedback-item">
                        <img src={Client2} alt="something" />
                        <p>Pellentesque sed purus eu urna vulputate interdum quis sit amet sapien. Pellentesque porta mauris at orci sagittis commodo. Curabitur aliquam nibh odio, vel ornare nisl volutpat quis. Maecenas congue dapibus lacus id fringilla. Vestibulum id augue massa. Proin sed neque dapibus, vulputate ligula eget, aliquam eros.</p>
                    </div>

                    <div className="agency-portfolio-feedback-item">
                        <img src={Client3} alt="something" />
                        <p>Pellentesque sed purus eu urna vulputate interdum quis sit amet sapien. Pellentesque porta mauris at orci sagittis commodo. Curabitur aliquam nibh odio, vel ornare nisl volutpat quis. Maecenas congue dapibus lacus id fringilla. Vestibulum id augue massa. Proin sed neque dapibus, vulputate ligula eget, aliquam eros.</p>
                    </div>
                </OwlCarousel> : ''} */}
            </div>
        </div>
    )
}

export default FeedbackStyleFive;  