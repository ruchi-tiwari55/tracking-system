import React from 'react';
import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
import { Outlet } from 'react-router-dom';


const PageLayout = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <Navbar />
                </div>
            </div>
            <div className="row">
                {/* <div className="col-lg-3">
                    <Sidebar />
                </div> */}
                {/* <div className="col-lg-9" style={{marginTop:"75px", marginLeft: "20%"}}> */}
                 <Outlet/>
                {/* </div> */}
            </div>
        </div>
    )
}

export default PageLayout;
