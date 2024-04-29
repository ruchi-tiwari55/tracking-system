import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/dashboard">
                    <img src="https://lzycrazy.com/assets/logo.86bdc6c8.png" alt="image" />
                </Link>
            </div>
            <div className="nav-links">
                <div>
                    <Link to="/dashboard">
                        <i className="fa fa-home fa-2x"></i>
                        Home
                    </Link>
                </div>
                <div>
                    <Link to="/market-Place">
                        <i className="fas fa-store fa-2x"></i>
                        Market Place
                    </Link>
                </div>
                <div>
                    <Link to="/my-ads">
                        <i className="fab fa-buysellads fa-2x"></i>
                        Post Ads
                    </Link>
                </div>
            </div>
            <div className="right-menu">
                <div>
                    <Link to="/my-ads-response">
                        <i className="fas fa-comments fa-2x"></i>
                        Response
                    </Link>
                </div>
                <div className="dropdown-menu-icon">
                    <Link onClick={toggleDropdown} style={{ cursor: "pointer" }}>
                        <i className="fas fa-cog fa-2x"></i>
                        Settings
                    </Link>
                    {showDropdown && (
                        <div className="dropdown-menu-settings ">
                            <h3>Arvind Bhandari</h3>
                            <div className="dropdown-bottom">
                                <div>
                                    <Link to="/user-page">Profile</Link>
                                </div>
                                <div>
                                    <Link to="/">Logout</Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
