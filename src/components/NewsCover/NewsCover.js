import React from 'react';
import brand1 from '../../images/banner-1.png';
import brand2 from '../../images/banner-2.png';
import brand3 from '../../images/banner-3.png';
import brand4 from '../../images/banner-4.png';
import './NewsCover.css';
const NewsCover = () => {
    return (
        <div>
            <div className="container">
                <div className="row news-cover-brand py-1">
                    <h2 className="text-center pt-5"><strong>We are featured in</strong></h2>
                    <h5 className="text-muted text-center">See what others are saying about us</h5>
                    <div className="col-lg-3 py-3"> <img src={brand1} alt="" /></div>
                    <div className="col-lg-3 py-3"> <img src={brand2} alt="" /></div>
                    <div className="col-lg-3 py-3"> <img src={brand3} alt="" /></div>
                    <div className="col-lg-3 py-3"> <img src={brand4} alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default NewsCover;