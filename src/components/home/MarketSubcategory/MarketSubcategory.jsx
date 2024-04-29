import React from "react";
import { Link } from "react-router-dom";

const MarketSubcategory = ({ categoryName, setShowMarketSidebar }) => {

  const goBack = () => {
    setShowMarketSidebar(true)
  };
  return (
    <>
      <div style={{ textAlign: 'center', fontWeight: "500", fontSize: "1.5rem", backgroundColor: 'white', display: 'flex', gap: "1.5rem", alignItems: 'center' }}>
        <i className="fas fa-arrow-left fa-1x" onClick={goBack} style={{ cursor: "pointer" }} ></i>
        <span>{categoryName}</span>

      </div>
      <div>
        <Link to="/marketplacePage">
          <img src="assets/images/response.png" alt="sub_cat" />
          <span>Grain</span>
        </Link>
      </div>
      <div>
        <Link to="/marketplacePage">
          <img src="assets/images/response.png" alt="sub_cat" />
          <span>Milk</span>
        </Link>
      </div>
      <div>
        <Link to="/marketplacePage">
          <img src="assets/images/response.png" alt="sub_cat" />
          <span>Fruits</span>
        </Link>
      </div>
      <div>
        <Link to="/marketplacePage">
          <img src="assets/images/response.png" alt="sub_cat" />
          <span>Fish</span>
        </Link>
      </div>
      <div>
        <Link to="/marketplacePage">
          <img src="assets/images/response.png" alt="sub_cat" />
          <span>Vegetables</span>
        </Link>
      </div>
    </>
  );
};

export default MarketSubcategory;
