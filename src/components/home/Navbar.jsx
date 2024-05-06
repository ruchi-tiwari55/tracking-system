import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import PostAdsModal from '../../pages/Home/postAddForms/postAddModal';
import { useModal } from '../../pages/Home/postAddForms/ModalContext';


const Navbar = ({ toggleDrawer }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const { toggleModal, isModalOpen } = useModal();

    const dropdownRef = useRef(null);
    const isMobile = useMediaQuery('(max-width:600px)');


    const handleOpenAddModal = () => {
        toggleModal()

    };

    
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };


    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


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
                <div onClick={handleOpenAddModal} style={{ cursor: 'pointer' }}>
                    <i className="fab fa-buysellads fa-2x"></i>
                    Post Ads
                </div>
            </div>

            <div className="right-menu">
                <div>
                    {!isMobile ?
                        <Link to="/my-ads-response">
                            <i className="fas fa-comments fa-2x"></i>
                            Response
                        </Link> : <Link to="/my-ads-response">
                            <i className="fab fa-buysellads fa-2x"></i>
                            My Ads
                        </Link>}
                </div>
                <div className="dropdown-menu-icon" ref={dropdownRef}>
                    {!isMobile ?
                        <Link onClick={toggleDropdown} style={{ cursor: "pointer" }}>
                            <i className="fas fa-cog fa-2x"></i>
                            Settings
                        </Link> : <>
                            <div onClick={handleOpenAddModal} style={{ cursor: 'pointer' }}>
                                <i className="fab fa-buysellads fa-2x"></i>
                                Post Ads
                            </div>

                        </>

                    }


                    {showDropdown && (
                        <div className="dropdown-menu-settings">
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

                {isMobile && <Link onClick={toggleDrawer}>
                    <i className="fas fa-bars fa-lg 1x"></i>
                </Link>}
            </div>

            {isMobile && <div className="bottom-tab" >
                <Link to="/dashboard" style={{ color: 'white', fontSize: '0.80rem' }}>
                    <i className="fa fa-home fa-lg" ></i>
                    <span>Home</span>
                </Link>
                <Link to="/market-Place" style={{ color: 'white', fontSize: '0.80rem' }}>
                    <i className="fas fa-store fa-lg" ></i>
                    <span>Marketplace</span>
                </Link>
                <Link to="/my-ads-response" style={{ color: 'white', fontSize: '0.80rem' }} >
                    <i className="fas fa-comments fa-lg"></i>
                    <span>Response</span>
                </Link>
                <Link to="/user-page" style={{ color: 'white', fontSize: '0.80rem' }}>
                    <i className="fas fa-user fa-lg"></i>
                    <span>Profile</span>
                </Link>
            </div>}

            <PostAdsModal open={isModalOpen} handleClose={toggleModal} />
        </div>
    );


}

export default Navbar;



