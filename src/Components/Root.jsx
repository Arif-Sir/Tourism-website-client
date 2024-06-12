// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "./SharedPage/Navbar";
import Footer from "./SharedPage/Footer";


const Root = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;