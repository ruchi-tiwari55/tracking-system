import React from 'react';
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
import MarketPlace from "../../../pages/Home/MarketPlace/MarketPlace"
import { Outlet } from 'react-router-dom';


const PageLayout = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                 <Outlet/>
            </div>
            <div className="row">
               <MarketPlace/>
            </div>
        </div>
    )
}

export default PageLayout;
