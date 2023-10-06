import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    console.log(loading);
    if(loading) return <h2 className="text-6xl">Loading...</h2>
    if(!user?.email) return <Navigate to={'/login'}></Navigate>
    return children;
};

export default PrivateRoute;