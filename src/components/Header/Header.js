import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../logo/logo-xl.png';
import './Header.css';
const Header = () => {
    const { users, logOut } = useAuth()
    return (
        <>
            <header>
                <Navbar expand="lg" fixed="top" className="bg-light">
                    <Container>
                        <Navbar.Brand>
                            <div className="logo">
                                <NavLink to="/home"> <img width="50px" src={logo} alt="" /></NavLink>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Link to="/home"> Home</Link>
                                <Link to="/my-orders"> My Orders</Link>
                                <Link to="/booking">Booking</Link>
                                <Link to="/manage-all-orders"> Manage All Orders</Link>
                                <Link to="/add-a-new-booking">Add New Service</Link>
                            </Nav>
                            <div className="button-header ms-auto d-felx">
                                {
                                    !users?.email ? <>
                                        <Link className="register mx-2" to="/login"> Login</Link> <Link className="login mx-2" to="/register"> Register</Link>
                                    </> : <>

                                        <div className="profile">
                                            <>
                                                <Link to="/">
                                                    <img src={users?.photoURL} alt="" />
                                                    <strong className="profile-name"> {users?.displayName} </strong>
                                                    <button onClick={logOut} className="logOut ms-3 "> LogOut</button>
                                                </Link>
                                            </>
                                            {/* <Link className="admin" to="/all-users"> All Users</Link> */}
                                        </div>

                                    </>
                                }
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};

export default Header;