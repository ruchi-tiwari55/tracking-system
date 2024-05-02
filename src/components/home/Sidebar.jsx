import React from 'react';
import { Link } from 'react-router-dom';
import styles from './sidebar.module.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileSideBar from './MobileSideBar';

const Sidebar = ({showDrawer, onCloseDrawer}) => {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <>
            {isMobile ? 
            <MobileSideBar showDrawer={showDrawer} onClose={onCloseDrawer} /> :
                <div className={styles.side_outer}>
                    <div>
                        <Link to="/user-page">
                            <img src='assets/images/response.png' alt="user" />
                            <span>Arvind Bhandari</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/market-Place">
                            <img src='assets/images/marketplace.png' alt="Market" />
                            <span>Market</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/my-ads">
                            <img src='assets/images/myads.png' alt="My Ads" />
                            <span>My Ads</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/my-ads-response">
                            <img src='assets/images/response.png' alt="resp" />
                            <span>Response</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/">
                            <img src='assets/images/logout.png' alt="Log out" />
                            <span>Log out</span>
                        </Link>
                    </div>
                </div>}
        </>

    );
}

export default Sidebar;
