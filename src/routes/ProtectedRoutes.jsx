import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// this is a component that will be used to protect routes and redirect to login page if user is not logged
const ProtectedRoutes = ({ children }) => {
    const logged = useSelector((state) => state.user.isLogged)

    return !logged ?  <Navigate to="/login" /> : children
}

export default ProtectedRoutes;