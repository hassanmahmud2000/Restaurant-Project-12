import React, { useContext } from 'react';
import useAdmin from '../../Hook/useAdmin';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoutes = ({children}) => {
    const [isAdmin , isPending] = useAdmin();
    const {user , loading} = useContext(AuthContext);
    const location = useLocation()
    
    if(loading || isPending){
        return <progress className="progress progress-info w-56"></progress>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default AdminRoutes;