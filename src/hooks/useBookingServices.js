import { useEffect, useState } from "react";

const useBookingServices = (id) => {
    const [bookingService, setBookingService] = useState([]);
    useEffect(() => {
        fetch(`https://frightful-dracula-29721.herokuapp.com/booking-services/${id}`)
            .then(res => res.json())
            .then(data => setBookingService(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return [bookingService, setBookingService]
};
const useBookingService = () => {
    const [bookingService, setBookingService] = useState([]);
    useEffect(() => {
        fetch('https://frightful-dracula-29721.herokuapp.com/booking-services/')
            .then(res => res.json())
            .then(data => {
                setBookingService(data.bookingServices);
            })
    }, [])
    return [bookingService, setBookingService]
};
export { useBookingServices, useBookingService };
