/* eslint-disable react/prop-types */
// import React from 'react';

import { useContext } from "react";
import { Authcontext } from "../Components/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(Authcontext);
    const location = useLocation();
    console.log(location.pathname);
    if(user){
        return children;
    }
    
    if(loading){
        return <progress className="progress w-56"></progress>;
    }
    return (
        <Navigate state={location.pathname} to='/login'>

        </Navigate>
    );
};

export default PrivateRoute;