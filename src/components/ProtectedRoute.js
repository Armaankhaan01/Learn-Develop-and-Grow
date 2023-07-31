import React from 'react';
import { Navigate } from 'react-router-dom';
import useTokenVerification from '../hooks/useTokenVerification';
import Loader from "./Loader";

function PrivateRoute({ children }) {
    const { isAuthenticated, loading } = useTokenVerification();
    console.log("isAuthenticated → ", isAuthenticated)
    if (loading) {
        return <Loader />;
    }
    return isAuthenticated ? children : <Navigate to="/signin" />;
}


export default PrivateRoute;

