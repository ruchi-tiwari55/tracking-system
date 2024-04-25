import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MarketSidebar.css';  

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className={`navigation ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="nav-toggle" onClick={toggleSidebar}>
        <i className={`fa ${isCollapsed ? 'fa-bars' : 'fa-times'}`}></i>
      </div>
      <div className="nav-content">
        <div className="nav-wrap bg-transparent-card single-box">
          <ul className="sidebar-list">
            <li>
              <h5>Categories</h5>
            </li>
            <li>
              <Link to="/directbyfarm" className="nav-content-bttn">
                Direct By Farm
              </Link>
            </li>
            <li>
              <Link to="/selfmade" className="nav-content-bttn">
                Self Made
              </Link>
            </li>
            <li>
              <Link to="/rentalitems" className="nav-content-bttn">
                Rental Items
              </Link>
            </li>
            <li>
              <Link to="/realestate" className="nav-content-bttn">
                Real Estate
              </Link>
            </li>
            <li>
              <Link to="/vehicles" className="nav-content-bttn">
                Vehicle
              </Link>
            </li>
            <li>
              <Link to="/mobiles" className="nav-content-bttn">
                Mobiles
              </Link>
            </li>
            <li>
              <Link to="/furniture" className="nav-content-bttn">
                Furniture
              </Link>
            </li>
            <li>
              <Link to="/fashion" className="nav-content-bttn">
                Fashion
              </Link>
            </li>
            <li>
              <Link to="/electronics" className="nav-content-bttn">
                Electronics
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-content-bttn">
                Coming Soon
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;


