import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({user}) => {
    console.log(user)
    // const user = null; 
    localStorage.setItem("user",JSON.stringify(user))
    localStorage.getItem(user)
    return user ? <Outlet /> : <Navigate to="/login"/> 
}
export default ProtectedRoutes;