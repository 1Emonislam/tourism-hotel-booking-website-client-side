import React from 'react';
import AirLineTripCupon from '../AirLineTripCupon/AirLineTripCupon';
import Banner from '../Banner/Banner';
import BookingServices from '../bookingServices/BookingServices';
import BookingWithUsAbout from '../BookingWithUsAbout/BookingWithUsAbout';
import FlightStatus from '../FlightStatus/FlightStatus';
import NewsCover from '../NewsCover/NewsCover';
import Review from '../Review/Review';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FlightStatus></FlightStatus>
            <AirLineTripCupon></AirLineTripCupon>
            <BookingServices></BookingServices>
            <Review></Review>
            <BookingWithUsAbout></BookingWithUsAbout>
            <Subscribe></Subscribe>
            <NewsCover></NewsCover>
        </div>
    );
};

export default Home;