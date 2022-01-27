import React from 'react';
import { Container, Row } from 'react-bootstrap';
import flight from './../../icons/flight.svg';
import passport from './../../icons/passport.svg';
import subtract from './../../icons/subtract.svg';
import './FlightStatus.css';
const FlightStatus = () => {
    return (
        <div>
            <Container>
                <Row className="py-4">
                    <div className="col-lg-4 py-3">
                        <div className="d-flex align-items-center pt-3">
                            <img width="50px" src={subtract} alt="" />
                            <h5 className="ps-2"><strong>Can I travel to…?</strong></h5>
                        </div>
                        <button style={{ marginLeft: '60px' }} className="btn btn-primary mt-2"> Explore</button>
                    </div>
                    <div className="col-lg-4 py-3">
                        <div className="d-flex align-items-center pt-3">
                            <img width="60px" src={flight} alt="" />
                            <h5 className="ps-2"><strong>Track your Flight Status</strong></h5>
                        </div>
                        <button style={{ marginLeft: '70px' }} className="btn btn-primary"> Track Flight</button>
                    </div>
                    <div className="col-lg-4 py-3">
                        <div className="d-flex align-items-center pt-3">
                            <img width="50px" src={passport} alt="" />
                            <h5 className="ps-2"><strong>Track Visa Application Status</strong></h5>
                        </div>
                        <input style={{ marginLeft: '60px', padding: '6px 10px' }} className="px-2" type="text" placeholder="Tracking Number..." />
                        <button className="btn btn-primary ms-2 mb-1 go-btn"> Go</button>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default FlightStatus;