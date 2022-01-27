import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { BsCalendarMinus } from "react-icons/bs";
import { MdMeetingRoom, MdRoom } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import './booking.css';

const Booking = () => {
    const [service, setService] = useState([])
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0);
    const size = 15;
    useEffect(() => {
        const url = `https://frightful-dracula-29721.herokuapp.com/services?page=${page}&&size=${size}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setService(data?.services);
                const count = data?.count;
                const newCount = Math.ceil(count / size);
                setPageCount(newCount);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])
    // console.log(service)
    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    {
                        service?.length === 0 ? <div className="container text-center my-5"> <Spinner animation="border" /> </div> : <h2 className="text-center my-3"><strong>Booking Services</strong></h2>

                    }

                    {
                        service?.map(bs => <div key={bs._id} className="col-lg-4 mb-5">
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
                    <div className="pagination">

                        {
                            [...Array(pageCount).keys()].map((number => <button key={number}
                                className={number === page ? 'activeSelect' : ''}
                                onClick={() => setPage(number)}
                            >{number + 1}
                            </button>))
                        }
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Booking;