import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './AddaNewBooking.css';
const AddaNewBooking = () => {
    const { users } = useAuth()
    const [added, setAdded] = useState('')
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://frightful-dracula-29721.herokuapp.com/booking_service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
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
                    <h4 className="text-center top-title"><strong>Add a new service booking </strong></h4>
                    <div className="col-lg-6 m-auto text-center">
                        <form onSubmit={handleSubmit(onSubmit)} className="box-booking">
                            <input type="text" placeholder="Property Name" {...register("propertyName", { required: true, min: 1 })} required />
                            <input type="text" placeholder="Property Address" {...register("propertyAddress", { required: true, min: 4 })} required />
                            <input type="number" placeholder="Guest Room ex:1,2,3,4..." {...register("guestRoom", { required: true, min: 1 })} required />
                            <input type="email" placeholder="Email" {...register("email", { required: true, min: 4 })} defaultValue={users?.email} required />

                            <input type="text" placeholder="Title" {...register("title", { required: true, min: 4 })} required />
                            <input type="text" placeholder="Image URL" {...register("imgURL", { required: true, min: 6 })} required />
                            <input type="number" placeholder="Price" {...register("price", { required: true, min: 1 })} required />
                            <input type="date" placeholder="Date" {...register("date", { required: true, min: 5 })} required />
                            <input type="number" placeholder="Days" {...register("days", { required: true, min: 1 })} required />
                            <textarea cols="30" rows="2" placeholder="Description" {...register("description", { required: true, min: 1 })} required />
                            <button type="submit" className="btn btn-primary"> Register Booking  Service </button>
                        </form>
                        {added && <div className="alert">
                            <span className="closebtn" onClick={handleClick}>&times;</span>
                            <strong>Booking Services! </strong> <br /> Successfully adding service status pending menually Checking to approved!
                        </div>}
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default AddaNewBooking;