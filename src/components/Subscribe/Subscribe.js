import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './subscribe.css';
const Subscribe = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <Container>
                <Row style={{ padding: '30px 8px', background: '#eee', margin: '60px 0px', borderRadius: '5px' }}>
                    <Col lg={6}>
                        <h2 className="text-muted"><strong>Subscribe to Travel Booking Tips.</strong>
                        </h2>
                        <p style={{ color: 'gray' }}> Subscribe to see Secret Deals. Prices drop the second you sign up!

                        </p>

                    </Col>
                    <Col lg={6}>
                        <form onSubmit={handleSubmit(onSubmit)} className="pt-3 mobile-subscribe">
                            <input className="input-email py-2 mb-2 w-75 px-3 rounded b-0" type="email" placeholder="Email"{...register("email")} required />
                            <button className="subscribe">Subscribe</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Subscribe;