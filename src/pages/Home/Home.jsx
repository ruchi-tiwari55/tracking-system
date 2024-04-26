import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'

const Sidebar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/user-page">
                        <img src='assets/images/favicon.png' alt="user" />
                        <span>Arvind Bhandari</span>
                    </Link>
                </li>
                <li>
                    <Link to="/market-Place">
                        <img src='assets/images/marketplace.png' alt="Market" />
                        <span>Market</span>
                    </Link>
                </li>
                <li>
                    <Link to="/my-ads">
                        <img src='assets/images/myads.png' alt="My Ads" />
                        <span>My Ads</span>
                    </Link>
                </li>
                <li>
                    <Link to="/my-ads-response">
                        <img src='assets/images/response.png' alt="resp" />
                        <span>Response</span>
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <img src='assets/images/logout.png' alt="Log out" />
                        <span>Log out</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;