import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner from './banner.png';
const Banner = () => {
    return (
        <>
            <div className="banner">
                <Carousel fade>
                    <Carousel.Item>
                        <img width="100%" height="90%"
                            className="d-block m-auto"
                            src={banner}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};

export default Banner;