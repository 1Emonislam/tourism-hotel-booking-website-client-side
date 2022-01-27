/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { GoLocation } from 'react-icons/go';
import { MdMeetingRoom, MdOutlineDateRange } from 'react-icons/md';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useSingleBookingService } from '../../hooks/useSingleBookingService';
import './SignleBookingService.css';
const SingleBookingService = () => {
    const { id } = useParams();
    const [bookingService] = useSingleBookingService(id)
    return (
        <div className="mt-5 pt-5">
            <Container>
                <Row>
                    <div className="col-12 img-fluid bg-img-body" style={{ backgroundImage: `url(${bookingService?.imgURL})`, backgroundRepeat: 'round' }}>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-8 px-3 body py-3">
                                <h1><strong> {bookingService?.title}</strong></h1>
                                <strong className="text-muted py-2"> <GoLocation /> {bookingService?.propertyAddress}</strong>
                                <p> {bookingService?.description}</p>
                            </div>

                            <div className="col-lg-3 mt-5 ps-4">
                                <div className="row">
                                    <div className="col-6">

                                        <small> Date: </small>
                                        <small> {bookingService?.date}</small>

                                    </div>

                                    <Row>
                                        <div className="col-6">
                                            <small><MdMeetingRoom /> {bookingService?.guestRoom} Room</small>
                                        </div>
                                        <div className="col-6">
                                            <small><MdOutlineDateRange /> {bookingService?.days} Day</small>
                                        </div>
                                        <hr className="mb-2" />
                                        <div className="col-6">
                                            <small className="text-small">Per Person Price: </small>
                                            <strong><small> ${bookingService?.price}</small></strong>
                                        </div>
                                        <div className="col-6">
                                            <small className="text-small">Double Person Price : </small>
                                            <strong> <small> ${parseFloat(bookingService?.price) * 2}</small></strong>
                                        </div>
                                        <div className="col-6">
                                            <small className="text-small">Twin Person Price : </small>
                                            <strong> <small> ${parseFloat(bookingService?.price) * 3}</small></strong>
                                        </div>
                                        <div className="col-6">
                                            <small className="text-small">Triple Person Price: </small>
                                            <small> <strong> ${parseFloat(bookingService?.price) * 4}</strong></small>
                                        </div>
                                        <div className="col-12 my-4">
                                            <Link to={`/booking-order-place/${bookingService?._id}`} className="btn btn-primary d-block m-auto">Booking Order</Link>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>

        </div>
    );
};

export default SingleBookingService;