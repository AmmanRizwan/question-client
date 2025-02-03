import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const isLogin = localStorage.getItem('userAuth');

    return isLogin ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute;