import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const { users } = useAuth();
    const [myOrders, setMyOrders] = useState([])
    useEffect(() => {
        const url = `https://frightful-dracula-29721.herokuapp.com/my-orders/${users?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data.myOrders)
                // console.log(data)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <div className="mt-5 pt-5">
                <Container>

                    <Row>
                        {
                            myOrders?.length === 0 ? <div className="container text-center my-5"> <Spinner animation="border" /> </div> : <h2 className="text-center my-3"><strong> My Orders {myOrders?.length}</strong></h2>

                        }
                        {
                            myOrders?.map(order => <div className="col-lg-8 d-block m-auto" key={order._id}>
                                <div className="box-Order">
                                    <h4 className="">Order Id:{order.orderId}</h4>
                                    <h4>Name: {order.name} </h4>
                                    <h4>Email: {order.email}</h4>
                                    <h4 className="d-flex justify-content-between">
                                        <span>Order Status: <small className="bg-primary px-2 mb-3 pb-1 rounded-pill text-white">{order.orderStatus}</small> </span>
                                    </h4>
                                    <h4>Order Paying: <small> <strong> ${order.paying}</strong> </small></h4>
                                    <h4><span>Travaling Date: {order.travelDate}</span></h4>
                                    <h4>Address: {order.address}</h4>
                                </div>

                            </div>)
                        }
                    </Row>
                </Container>
            </div >

        </>
    );
};

export default MyOrders;