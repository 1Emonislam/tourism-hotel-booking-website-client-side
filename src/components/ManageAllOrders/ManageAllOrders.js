/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import './ManageAllOrders.css';
const ManageAllOrders = () => {
    const [manageAllOrders, setManageAllOrders] = useState();
    const [status, setStatus] = useState('');
    const hanleOrderAprove = id => {
        // console.log(id)
        const url = `https://frightful-dracula-29721.herokuapp.com/order-approved/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    setStatus('Approved')
                    // console.log(data)
                }
            })
    }

    console.log(status)
    useEffect(() => {
        fetch('https://frightful-dracula-29721.herokuapp.com/manage-all-orders')
            .then(res => res.json())
            .then(data => setManageAllOrders(data?.bookingOrderPlace))
    }, [])
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure,you want to Delete?');
        if (proceed) {
            const url = `https://frightful-dracula-29721.herokuapp.com/booking-services/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = manageAllOrders?.filter(rm => rm._id !== id);
                        setManageAllOrders(remaining)
                        // console.log(data)
                    }
                })
        }
    }

    return (
        <>
            <div className="mt-5 pt-5">
                <Container>

                    <Row>
                        {
                            manageAllOrders?.length === 0 ? <div className="container text-center my-5"> <Spinner animation="border" /> </div> : <h2 className="text-center my-3"><strong> Manage All Orders {manageAllOrders?.length}</strong></h2>

                        }
                        {
                            manageAllOrders?.map(order => <div className="col-lg-8 d-block m-auto" key={order._id}>
                                <div className="box-Order">
                                    <h4 className="">Order Id:{order.orderId}</h4>
                                    <h4>Name: {order.name} </h4>
                                    <h4>Email: {order.email}</h4>
                                    <h4 className="d-flex justify-content-between">
                                        <span>Order Status: <small className="bg-primary px-2 mb-3 pb-1 rounded-pill text-white">{status || order.orderStatus}</small> </span>
                                        <button onClick={() => hanleOrderAprove(order?._id)} className="btn btn-success">Order Approve</button>
                                    </h4>
                                    <h4>Order Paying: <small> <strong> ${order.paying}</strong> </small></h4>
                                    <h4><span>Travaling Date: {order.travelDate}</span></h4>
                                    <h4>Address: {order.address}</h4>
                                    <button onClick={() => handleDelete(order?._id)} className="btn btn-danger d-block ms-auto me-3"> Delete Order</button>

                                </div>
                            </div>)
                        }
                    </Row>
                </Container>
            </div >

        </>
    );
};

export default ManageAllOrders;