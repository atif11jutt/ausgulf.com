import React from 'react';


// Client Images
import Client1 from '../../images/client-image/client1.jpg';
import Client2 from '../../images/client-image/client2.jpg';
import Client3 from '../../images/client-image/client3.jpg';

// Shape Images
import Shape1 from "../../images/shape1.png";
import Shape2 from "../../images/shape2.svg";
import Shape4 from "../../images/shape4.svg";
import Shape5 from "../../images/shape5.png";

import Loadable from '@loadable/component';
// const OwlCarousel = Loadable(() => import('react-owl-carousel3'));

const options = {
    loop: false,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    items: 1,
}

const FeedbackStyleTwo = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="feedback-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>What users Saying</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                {/* {display ? <OwlCarousel 
                    className="testimonials-slides owl-carousel owl-theme"
                    {...options}
                >
                    <div className="single-feedback-item">
                        <div className="client-info align-items-center">
                            <div className="image">
                                <img 
                                    src={Client1}
                                    alt="something"
                                />
                            </div>

                            <div className="title">
                                <h3>Steve Lucy</h3>
                                <span>Lead Developer at Envato</span>
                            </div>
                        </div>

                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="single-feedback-item">
                        <div className="client-info align-items-center">
                            <div className="image">
                                <img 
                                    src={Client2}
                                    alt="something"
                                />
                            </div>

                            <div className="title">
                                <h3>David Luiz</h3>
                                <span>Lead Developer at Envato</span>
                            </div>
                        </div>

                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="single-feedback-item">
                        <div className="client-info align-items-center">
                            <div className="image">
                                <img 
                                    src={Client3}
                                    alt="something"
                                />
                            </div>

                            <div className="title">
                                <h3>Marta Smith</h3>
                                <span>Lead Developer at Envato</span>
                            </div>
                        </div>

                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </OwlCarousel> : ''} */}
            </div>

            {/* Shape Images */}
            <div className="shape1">
                <img src={Shape1} alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
            <div className="shape4">
                <img src={Shape4} alt="shape" />
            </div>
            <div className="shape5">
                <img src={Shape5} alt="shape" />
            </div>
            <div className="shape6 rotateme">
                <img src={Shape4} alt="shape" />
            </div>
            <div className="shape7">
                <img src={Shape4} alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
        </div>
    );
}

export default FeedbackStyleTwo;
