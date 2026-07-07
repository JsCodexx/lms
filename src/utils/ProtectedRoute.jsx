import { Navigate } from "react-router-dom";
import { useEffect } from "react";

import Home from "../pages/Home";


const ProtectedRoutes = ({ user }) => {

    const activeUser = user || JSON.parse(localStorage.getItem("user"));

    console.log("Active User Status:", activeUser);


    if (user) {
        localStorage.setItem("user", JSON.stringify(user));

    }

    return activeUser ? <Home to="/" /> : <Navigate to="/login"  />;
};

export default ProtectedRoutes;
