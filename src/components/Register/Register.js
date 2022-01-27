import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import google from '../logo/google.png';
import logo from '../logo/logo-xl.png';
import './Register.css';
const Register = () => {
    const { users, setUsers, error, setError, signInUsingGoogle, setIsloading } = useAuth();
    const history = useHistory()
    const location = useLocation()
    const redirectURL = location?.state?.from || '/home';
    const handleSignInUsingGoogle = () => {
        signInUsingGoogle()
            .then(result => {
                setError('')
                fetch('https://frightful-dracula-29721.herokuapp.com/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(result.user)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                    })
                setUsers(result.user)
                history.push(redirectURL)
            })
            .finally(() => setIsloading(false))
    }
    return (
        <>
            <div className="container">
                <Link to="/home"> <img width="100" className="d-block m-auto" src={logo} alt="" /></Link>
            </div>
            <>
                <div className="container">

                    <div className="box-google">

                        <h5 className="title pb-4 text-center">Register With</h5>
                        <button onClick={handleSignInUsingGoogle} className="google-btn d-flex justify-content-between align-items-center text-center m-auto py-1">
                            <span className="px-4"> <img className="google" src={google} alt="" /> </span>
                            <span className="px-4"> Continue With Google</span></button>
                        <div className="text-center">
                            <p className="text-danger px-4"> {error && error} </p>
                            <p className="text-success px-4"> {users?.email && 'already registerd exists'} {users?.email && <Link to="/home"> Back to Home</Link>}</p>
                        </div>
                        <p className="px-4 text-center text-muted">Already have an account?<Link to="/login"> Sign In</Link></p>
                    </div>
                </div>

            </>


        </>
    );
};

export default Register;