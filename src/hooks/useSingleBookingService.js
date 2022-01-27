/* eslint-disable react-hooks/exhaustive-deps */
//Using useSingleBookingService fetch
import { useEffect, useState } from "react";
const useSingleBookingService = (id) => {
    const [bookingService, setBookingService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/booking-services/${id}`)
            .then(res => res.json())
            .then(data => setBookingService(data))
    }, [])
    return [bookingService, setBookingService]
}

export { useSingleBookingService };

