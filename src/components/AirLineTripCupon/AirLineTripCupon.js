import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './AirLineTripCupon.css';
const AirLineTripCupon = () => {
    const [airPlane, setAirPlane] = useState()
    useEffect(() => {
        fetch('https://frightful-dracula-29721.herokuapp.com/airplane-sift')
            .then(res => res.json())
            .then(data => setAirPlane(data))
    }, [])
    return (
        <div>
            <Container>
                <Row className="py-5 rowbox">

                    {

                        airPlane?.slice(0, 3).map(ar => <div key={ar._id} className="col-lg-4">
                            <Row >
                                <div className="col-lg-4">
                                    <img className="img-fluid" src={ar.img} alt="" />
                                </div>
                                <div className="col-lg-8">
                                    <strong className="">{ar.title}</strong>
                                </div>
                            </Row>
                        </div>)
                    }


                </Row>
            </Container>
        </div>
    );
};

export default AirLineTripCupon;