import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

import Home from "../pages/Home";


const ProtectedRoutes = () => {


    // }
    const token = localStorage.getItem("token");

    return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
