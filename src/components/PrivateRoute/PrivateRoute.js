import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { users, isLoading } = useAuth();
    // console.log(isLoading)
    if (isLoading) {
        return <div className="container text-center my-5">
            <Spinner animation="border" />
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => users?.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            > </Redirect>}
        >
        </Route>
    );
};

export default PrivateRoute;