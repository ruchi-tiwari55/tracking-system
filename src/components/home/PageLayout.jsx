import React, { useState } from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MarketSidebar from "./MarketSidebar/MarketSidebar";
import { Outlet, useLocation } from 'react-router-dom';

const PageLayout = () => {
    const location = useLocation();
    // const [showMarketSidebar, setShowMarketSidebar] = useState(false);

    const isMarketSection = location.pathname.startsWith('/market');
    const sidebarComponent = isMarketSection ? <MarketSidebar /> : <Sidebar />;

    return (
        <div style={{ backgroundColor: "rgba(239, 238, 238, 0.71)", width: "100%", height: "100vh" }}>
            <div>
                <Navbar />
            </div>
            <div style={{ display: "flex" }}>
                {sidebarComponent}
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default PageLayout;