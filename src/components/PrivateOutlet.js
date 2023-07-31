import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useTokenVerification from '../hooks/useTokenVerification';
import Loader from "./Loader";

function PrivateOutlet() {
    const { isAuthenticated, loading } = useTokenVerification();
    console.log("isAuthenticated → ", isAuthenticated)
    if (loading) {
        return <Loader />;
    }
    return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
}

export default PrivateOutlet;