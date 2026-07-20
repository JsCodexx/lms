import { Outlet, Navigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRoutes = ({ user }) => {

    const activeUser = user || JSON.parse(localStorage.getItem("user"));

    console.log("Active User Status:", activeUser);


    if (user) {
        localStorage.setItem("user", JSON.stringify(user));

    }

    return activeUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
