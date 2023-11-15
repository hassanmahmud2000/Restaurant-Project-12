import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user } = useContext(AuthContext)
    const location = useLocation()
    
    if(!user){
        return <Navigate to='/signup' state={{from: location}} replace></Navigate>
    }
    else{
        return children;
    }
    
};

export default PrivateRoute;