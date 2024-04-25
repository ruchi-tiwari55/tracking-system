import React from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from 'react-router-dom';


const PageLayout = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div style={{display:"flex"}}>
                <div style={{ width: "max-content" }}>
                    <Sidebar />
                </div>
                <div style={{marginTop:"1%", marginLeft: "1%" }}>
                    <Outlet />
                </div>
            </div>

        </div>
    )
}

export default PageLayout;
