import React from 'react';
import { Container } from 'react-bootstrap';
import bookingbgImage from '../../images/about-background.jpg';
const BookingWithUsAbout = () => {
    return (
        <div style={{ backgroundImage: `url(${bookingbgImage})`, backgroundPosition: 'top' }}>
            <Container>
                <div className="pt-5">
                    <div className="py-4">
                        <h2 className="pt-5"><strong>Why Booking With Us?</strong></h2>
                        <p className="text-muted">100% Tailor made and personalised holidays which means you have <br /> the flexibility to make changes to an itinerary to ensure your holiday is<br /> as you want it to be.</p>
                    </div>
                    <div>
                        <h6 className="text-muted py-1">
                            <strong>All placges and activiates are carefully picked by us.</strong>
                        </h6>
                        <h6 className="text-muted py-1">
                            <strong>Best price guaranteee & Hassle free!</strong>
                        </h6>
                        <h6 className="text-muted py-1">
                            <strong>We are an award winning agency.</strong>
                        </h6>
                        <h6 className="text-muted py-1">
                            <strong>Trusted by more than 23,420 customers</strong>
                        </h6>
                        <button className="btn btn btn-primary mb-5 mt-3"> Find More Booking</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BookingWithUsAbout;