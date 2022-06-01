import React from 'react';
import auth from '../../../firebase.init';
import {useAuthState} from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';


const RequireAuth = ({children}) => {
    const location = useLocation();
    const [user,loading] = useAuthState(auth);
   
    if(loading){
        <Loading></Loading>
    }

    else if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }

    return children;
   
};

export default RequireAuth;