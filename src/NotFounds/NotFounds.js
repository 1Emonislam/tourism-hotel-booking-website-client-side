import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../components/logo/logo-xl.png';
import notFound from './404-error-template-3.png';
const NotFounds = () => {
    return (
        <div className="container">
            <div className="row">
                <Link to="/home"> <img width="100" className="d-block m-auto" src={logo} alt="" /></Link>
                <img style={{ width: '100%', margin: '0 auto', display: 'block' }} src={notFound} alt="" />
            </div>
        </div>
    );
};

export default NotFounds;