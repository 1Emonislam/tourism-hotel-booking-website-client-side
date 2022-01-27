/* eslint-disable array-callback-return */
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { BsCalendarMinus } from "react-icons/bs";
import { MdMeetingRoom, MdRoom } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { useBookingService } from '../../hooks/useBookingServices';
import './BookingServices.css';
const BookingServices = () => {
    const [bookingService] = useBookingService();
    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    {
                        bookingService?.length === 0 ? <div className="container text-center my-5"> <Spinner animation="border" /> </div> : <h2 className="text-center my-3"><strong>Travel Booking Services {bookingService?.length}</strong></h2>

                    }
                    {
                        bookingService?.slice(0, 6)?.map(bs => <div key={bs._id} className="col-lg-4 mb-5">
                            <div className="imgbox"> <img className="img-fluid" src={bs.imgURL} alt="" /></div>
                            <div className="content">
                                <h4><strong>{bs.title.slice(0, 48)}.</strong></h4>
                                <div>
                                    <p><BsCalendarMinus /> {bs.days} Day<span className="ps-4"> <MdMeetingRoom /> Room: {bs.guestRoom}</span>
                                    </p>
                                    <strong className="text-dark">Price: ${bs.price}</strong>
                                    <p className="text-secondary"> <MdRoom />{bs.propertyAddress}</p>
                                    <p className="text-muted"> {bs.description.slice(0, 113)}...</p>
                                    <NavLink className="btn btn-primary" to={`/booking-services/${bs._id}`}> Book Now</NavLink>
                                </div>
                            </div>

                        </div>)
                    }

                </div>

            </div>
        </div>
    );
};

export default BookingServices;