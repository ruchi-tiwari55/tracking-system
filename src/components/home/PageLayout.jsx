import React from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from 'react-router-dom';


const PageLayout = () => {
    return (
        <div style={{ backgroundColor: "rgba(239, 238, 238, 0.71)", width: "100%", height: "100vh" }}>
            <div>
                <Navbar />
            </div>
            <div style={{ display: "flex" }}>
                <Sidebar />
                <Outlet />
            </div>

        </div>
    )
}

export default PageLayout;
