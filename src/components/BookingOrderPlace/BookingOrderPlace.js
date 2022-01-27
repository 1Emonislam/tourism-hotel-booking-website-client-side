/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useBookingServices } from '../../hooks/useBookingServices';
import './BookingOrderPlace.css';
const BookingOrderPlace = () => {
    const { users } = useAuth()
    const { id } = useParams()
    const [bookingService] = useBookingServices(id);
    const [added, setAdded] = useState('')
    const refPrice = useRef('')
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.paying = parseFloat(bookingService?.price) * parseInt(refPrice?.current?.value);
        data.orderId = id;
        data.orderStatus = 'Pending';
        fetch('https://frightful-dracula-29721.herokuapp.com/booking-order-place', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    setAdded(data.insertedId)
                    reset();
                }

            })
    };
    const handleClick = (e) => {
        e.target.parentElement.style.display = 'none';
    }
    return (
        <div className="mt-5 pt-5 ">

            <Container>
                <Row>
                    <h4 className="text-center top-title"><strong>Check Out Order Placing! </strong></h4>
                    <div className="col-lg-6 m-auto text-center">
                        <form onSubmit={handleSubmit(onSubmit)} className="box-booking">
                            <input type="text" placeholder="Name" defaultValue={users?.displayName} {...register("name", { required: true, min: 1 })} required />
                            <input type="date" placeholder="Selected Travel Date" {...register("travelDate", { required: true, min: 1 })} required />

                            <input type="email" placeholder="Email" defaultValue={users?.email} {...register("email", { required: true, min: 5 })} required />

                            <select name="price" ref={refPrice}>
                                <option value="1">Per Person ${parseFloat(bookingService?.price) * 1}</option>
                                <option value="2">Double Person ${parseFloat(bookingService?.price) * 2}</option>
                                <option value="3">Twin Person ${parseFloat(bookingService?.price) * 3}</option>
                                <option value="4">Triple Person ${parseFloat(bookingService?.price) * 4}</option>

                            </select>
                            {/* <input ref={refPrice} type="number" placeholder="Total Family Members Tours. ex:1,2,3..." required /> */}


                            <input type="text" placeholder="Address" {...register("address", { required: true, min: 5 })} required />

                            <button type="submit" className="btn btn-primary"> Booking Order Place</button>
                        </form>
                        {added && <div className="alert">
                            <span className="closebtn" onClick={handleClick}>&times;</span>
                            <div>
                                <strong className="text-white">Purchased Successfully! </strong>
                                <h4>
                                    Back To: <Link to="/my-orders" className="btn btn-primary text-white">Order History</Link>
                                </h4>
                            </div>
                        </div>}
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default BookingOrderPlace;