import React from 'react';

import PartnerImg1 from '../../images/partner-img/partner-1.png'
import PartnerHoverImg1 from '../../images/partner-img/partner-hover1.png'
import PartnerImg2 from '../../images/partner-img/partner-2.png'
import PartnerHoverImg2 from '../../images/partner-img/partner-hover2.png'
import PartnerImg3 from '../../images/partner-img/partner-3.png'
import PartnerHoverImg3 from '../../images/partner-img/partner-hover3.png'
import PartnerImg4 from '../../images/partner-img/partner-10.png'
import PartnerHoverImg4 from '../../images/partner-img/partner-hover10.png'
import PartnerImg5 from '../../images/partner-img/partner-5.png'
import PartnerHoverImg5 from '../../images/partner-img/partner-hover5.png'
import PartnerImg6 from '../../images/partner-img/partner-6.png'
import PartnerHoverImg6 from '../../images/partner-img/partner-hover6.png'
import PartnerImg7 from '../../images/partner-img/partner-7.png'
import PartnerHoverImg7 from '../../images/partner-img/partner-hover7.png'

import Loadable from '@loadable/component';
// const OwlCarousel = Loadable(() => import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    responsive: {
        0:{
            items:2,
        },
        576:{
            items:4,
        },
        768:{
            items:4,
        },
        1024:{
            items:5,
        },
        1200:{
            items:6,
        }
    }
}

const Partner = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="ml-partner-area mt-minus-top ptb-80 pb-0">
            <div className="container">
                {/* {display ? <OwlCarousel 
                    className="partner-slides owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="single-ml-partner">
                        <a href="https://themeforest.net/user/envytheme/portfolio" target="_blank" rel="noreferrer">
                            <img src={PartnerImg1} alt="something" />
                            <img src={PartnerHoverImg1} alt="something" />
                        </a>
                    </div>
                
                    <div className="single-ml-partner">
                        <a href="https://themeforest.net/user/envytheme/portfolio" target="_blank" rel="noreferrer">
                            <img src={PartnerImg2} alt="something" />
                            <img src={PartnerHoverImg2} alt="something" />
                        </a>
                    </div>
                
                    <div className="single-ml-partner">
                        <a href="https://themeforest.net/user/envytheme/portfolio" target="_blank" rel="noreferrer">
                            <img src={PartnerImg3} alt="something" />
                            <img src={PartnerHoverImg3} alt="something" />
                        </a>
                    </div>
            
                    <div className="single-ml-partner">
                        <a href="https://themeforest.net/user/envytheme/portfolio" target="_blank" rel="noreferrer">
                            <img src={PartnerImg4} alt="something" />
                            <img src={PartnerHoverImg4} alt="something" />
                        </a>
                    </div>
        
                    <div className="single-ml-partner">
                        <a href="https://themeforest.net/user/envytheme/portfolio" target="_blank" rel="noreferrer">
                            <img src={PartnerImg5} alt="something" />
                            <img src={PartnerHoverImg5} alt="something" />
                        </a>
                    </div>
            
                    <div className="single-ml-partner">
                        <a href="https://themeforest.net/user/envytheme/portfolio" target="_blank" rel="noreferrer">
                            <img src={PartnerImg6} alt="something" />
                            <img src={PartnerHoverImg6} alt="something" />
                        </a>
                    </div>
                
                    <div className="single-ml-partner">
                        <a href="https://themeforest.net/user/envytheme/portfolio" target="_blank" rel="noreferrer">
                            <img src={PartnerImg7} alt="something" />
                            <img src={PartnerHoverImg7} alt="something" />
                        </a>
                    </div>
                </OwlCarousel> : ''} */}
            </div>
        </div>
    );
}

export default Partner;