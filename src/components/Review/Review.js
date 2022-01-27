import React, { useEffect, useState } from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import bgImage from './../../images/main-home-parallax-2.jpg';
import './Review.css';
const Review = () => {
    const [gellary, setGellary] = useState();
    const [clientReview, setClientReview] = useState();
    useEffect(() => {
        fetch('https://frightful-dracula-29721.herokuapp.com/gellary')
            .then(res => res.json())
            .then(data => setGellary(data))

    }, [])
    useEffect(() => {
        fetch('https://frightful-dracula-29721.herokuapp.com/client-review')
            .then(res => res.json())
            .then(data => setClientReview(data))

    }, [])
    return (
        <div style={{ backgroundImage: `url(${bgImage})` }}>
            <Container>
                <Row className="bg-img-corusel py-5">
                    <div className="col-lg-6">

                        <Carousel fade>
                            {
                                gellary?.slice(0, 10).map(g => <Carousel.Item key={g._id}>
                                    <img src={g.img} className="img-corusel img-fluid" alt="" />
                                </Carousel.Item>)
                            }
                        </Carousel>
                    </div>
                    <div className="col-lg-6">
                        <div className="box-review">
                            <Carousel>
                                {
                                    clientReview?.slice(0, 8).map(cr => <Carousel.Item interval={2000} key={cr._id}>
                                        <img style={{ width: '200px', height: '200px', borderRadius: '100px' }} src={cr.img} alt="" />
                                        <h5 className="py-3">
                                            <strong>
                                                {cr?.name}
                                            </strong>
                                        </h5>
                                        <p className="text-muted">
                                            {
                                                cr.body
                                            }
                                        </p>
                                    </Carousel.Item>)
                                }

                            </Carousel>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Review;