import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

import Home from "../pages/Home";


const ProtectedRoutes = () => {

    // const activeUser = user || JSON.parse(localStorage.getItem("user"));

    // console.log("Active User Status:", activeUser);


    // if (user) {
    //     localStorage.setItem("user", JSON.stringify(user));

    // }
    const token = localStorage.getItem("token");

    return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
