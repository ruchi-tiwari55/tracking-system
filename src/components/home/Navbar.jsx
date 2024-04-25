import React from 'react';
import './navbar.css'; // Import the CSS file

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <a href="/dashboard">
                    <img src="https://lzycrazy.com/assets/logo.86bdc6c8.png" alt="image" />
                </a>
            </div>
            <div className="nav-links">
                <div>
                    <a href="/dashboard">
                        <i className="fas fa-home"></i>
                        Home
                    </a>
                </div>
                <div>
                    <a href="/market-Place">
                        <i className="fas fa-store"></i>
                        Market Place
                    </a>
                </div>
                <div>
                    <a href="/my-ads">
                        <i className="fab fa-buysellads"></i>
                        Post Ads
                    </a>
                </div>
            </div>
            <div className="right-menu">
                <div>
                    <a href="/my-ads-response">
                        <span className="dot-count bg-warning"></span>
                        <i className="bx bxs-message-dots"></i>
                        Response
                    </a>
                </div>
                <div className="dropdown-menu-icon">
                    <a href="/home#">
                        <i className="bx bxs-cog header-icon"></i>
                        Setting
                    </a>
                    <div className="dropdown-menu-settings switchcolor-wrap">
                        <div>
                            <h4>Arvind Bhandari</h4>
                            <div>
                                <a href="/userpage">Profile</a>
                            </div>
                            <div>
                                <a href="#">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
