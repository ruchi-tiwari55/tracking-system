import React, { useState } from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MarketSidebar from "./MarketSidebar/MarketSidebar";
import { Outlet, useLocation } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';


const PageLayout = () => {
    const location = useLocation();
    // const [showMarketSidebar, setShowMarketSidebar] = useState(false);
    const [showDrawer, setshowDrawer] = useState(false);

    const isMobile = useMediaQuery('(max-width:600px)');
    const toggleDrawer = () => {
        setshowDrawer(!showDrawer);
    };
    const onCloseDrawer = () => {
        setshowDrawer(false)
    }

    const isMarketSection = location.pathname.startsWith('/market');
    const sidebarComponent = isMarketSection ? <MarketSidebar /> : <Sidebar showDrawer={showDrawer} onCloseDrawer={onCloseDrawer} />;

    return (
        <div style={{ backgroundColor: "rgba(239, 238, 238, 0.71)", width: "100%", height: "100vh" , overflow:'hidden'}}>
            <div>
                <Navbar toggleDrawer={toggleDrawer} onCloseDrawer={onCloseDrawer} />
            </div>
            {isMobile ?
                <div >
                    {sidebarComponent}
                    <div>
                        <Outlet />
                    </div>
                </div> : <div style={{ display: "flex" }}>
                    {sidebarComponent}
                    <div>
                        <Outlet />
                    </div>
                </div>}
        </div>
    );
}

export default PageLayout;
