import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MarketSubcategory.css';

const Sidebar = ({ onCategoryClick }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleCategoryClick = (e, categoryName) => {
    e.preventDefault(); // Prevent the default behavior of navigation
    onCategoryClick(categoryName); // Call the callback to handle the click
  };

  return (
    <nav className={`navigation ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="nav-toggle" onClick={toggleSidebar}>
        <i className={`fa ${isCollapsed ? 'fa-bars' : 'fa-times'}`}></i>
      </div>
      <ul className="d-flex justify-content-center align-items-center h-10 mt-4">
        <li className="mx-3"> 
          <h6>Sub-Categories</h6>
        </li>
        <li className="mx-3"> 
          <Link to="/market-Place/marketSidebar">
            <i className="fa fa-arrow-left cursor-pointer"></i>
          </Link>
        </li>
      </ul>
      <div className="nav-content">
        <div className="nav-wrap bg-transparent-card">
          <ul className="sidebar-list">
            <li>
              <Link to="#" onClick={(e) => handleCategoryClick(e, 'Vegetables')} className="nav-content-bttn">
                <div className="icon-wrapper">
                  <i className="fa fa-carrot"></i> 
                </div>
                <span className="nav-text">Vegetables</span>
              </Link>
            </li>
            <li>
              <Link to="#" onClick={(e) => handleCategoryClick(e, 'Fruits')} className="nav-content-bttn">
                <div className="icon-wrapper">
                  <i className="fa fa-apple-alt"></i>
                </div>
                <span className="nav-text">Fruits</span>
              </Link>
            </li>
            <li>
              <Link to="#" onClick={(e) => handleCategoryClick(e, 'Anaaj/Grains')} className="nav-content-bttn">
                <div class="icon-wrapper">
                <i class="fa fa-seedling"></i> 
                </div>
                <span class="nav-text">Anaaj/Grains</span>
              </Link>
            </li>
            <li>
              <Link to="#" onClick={(e) => handleCategoryClick(e, 'Milk')} className="nav-content-bttn">
                <div className="icon-wrapper">
                <i className="fa fa-glass-whiskey"></i>
                </div>
                <span className="nav-text">Milk</span>
              </Link>
            </li>
            <li>
              <Link to="#" onClick={(e) => handleCategoryClick(e, 'Eggs')} className="nav-content-bttn">
                <div className="icon-wrapper">
                  <i class="fa fa-egg"></i> 
                </div>
                <span className="nav-text">Eggs</span>
              </Link>
            </li>
            <li>
              <Link to="#" onClick={(e) => handleCategoryClick(e, 'Fish')} className="nav-content-bttn">
                <div class="icon-wrapper">
                  <i class="fa fa-fish"></i> 
                </div>
                <span class="nav-text">Fish</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
