import React from 'react';
// import { Link } from "gatsby";
// import * as Icon from 'react-feather';

// import Loadable from '@loadable/component'
// const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

// const options = {
//     items: 4,
//     loop: true,
//     nav: false,
//     autoplay: true,
//     margin:30,
//     dots: false,
//     responsive: {
//         0: {
//             items: 1
//         },
//         576: {
//             items: 2
//         },
//         768: {
//             items: 2
//         },
//         1200: {
//             items: 3
//         },
//         1500: {
//             items: 4
//         }
//     }
// }

const RecentWorks = () => {
    // const [display, setDisplay] = React.useState(false);

    // React.useEffect(() => {
    //     setDisplay(true);
    // }, [])

    return (
        <div className="works-area pt-80 pb-50 bg-f7fafd">
            <div className="container">
                <div className="section-title">
                    <h2>Our Recent Works</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            {/* {display ? <OwlCarousel 
                className="works-slides owl-carousel owl-theme"
                {...options}
            > 
                <div className="single-works">
                    <img src={WorksImage1} alt="something" />

                    <Link to="/project-details" className="icon">
                        <Icon.Settings />
                    </Link>

                    <div className="works-content">
                        <h3>
                            <Link to="/project-details">
                                Incredible infrastructure
                            </Link>
                        </h3>
                        <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                    </div>
                </div>
    
                <div className="single-works">
                    <img src={WorksImage2} alt="something" />

                    <Link to="/project-details" className="icon">
                        <Icon.Settings />
                    </Link>

                    <div className="works-content">
                        <h3>
                            <Link to="/project-details">
                                Email Notifications
                            </Link>
                        </h3>
                        <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                    </div>
                </div>
    
                <div className="single-works">
                    <img src={WorksImage3} alt="something" />

                    <Link to="/project-details" className="icon">
                        <Icon.Settings />
                    </Link>

                    <div className="works-content">
                        <h3>
                            <Link to="/project-details">
                                Best Analytics Audits
                            </Link>
                        </h3>
                        <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                    </div>
                </div>
        
                <div className="single-works">
                    <img src={WorksImage4} alt="something" />

                    <Link to="/project-details" className="icon">
                        <Icon.Settings />
                    </Link>

                    <div className="works-content">
                        <h3>
                            <Link to="/project-details">
                                Simple Dashboard
                            </Link>
                        </h3>
                        <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                    </div>
                </div>
    
                <div className="single-works">
                    <img src={WorksImage5} alt="something" />

                    <Link to="/project-details" className="icon">
                        <Icon.Settings />
                    </Link>
                    
                    <div className="works-content">
                        <h3>
                            <Link to="/project-details">Information Retrieval</Link>
                        </h3>
                        <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                    </div>
                </div>
            </OwlCarousel> : ''} */}
        </div>
    )
}

export default RecentWorks;
