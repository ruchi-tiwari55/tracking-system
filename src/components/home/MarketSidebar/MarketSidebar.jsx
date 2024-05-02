import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MarketSidebar.css";
import MarketSubCategory from "../MarketSubcategory/MarketSubcategory";
import useMediaQuery from '@mui/material/useMediaQuery';
// import MobileMarketSideBar from "./MobileMarketSidebar";
import MobileMarketSideBar from "./MobileMarketSidebar";


const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showMarketSidebar, setShowMarketSidebar] = useState(true);
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://lzycrazy-backend.onrender.com/api/admins/all-category"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        console.log("Fetched data:", responseData);
        if (responseData.code === 200 && Array.isArray(responseData.data)) {
          setCategories(responseData.data);
        } else {
          throw new Error("Invalid data format received from the server");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const handleCategoryClick = async (categoryName) => {
    setSelectedCategory(categoryName);
    setShowMarketSidebar(false);
  }

  return (
    <>
      {
        isMobile ? <MobileMarketSideBar /> :
          <div className="side-outer">
            <div style={{ textAlign: 'center', fontWeight: "500", fontSize: "1.5rem", backgroundColor: 'white', display: showMarketSidebar ? 'block' : 'none' }}>CATEGORIES</div>
            {showMarketSidebar &&
              categories.map((category) => (
                <div className="inner" key={category._id}>
                  <Link onClick={() => handleCategoryClick(category.Categoryname)}>
                    <img src="assets/images/response.png" alt="category" />
                    <span>{category.Categoryname}</span>
                  </Link>
                </div>
              ))}
            {!showMarketSidebar && <MarketSubCategory categoryName={selectedCategory} setShowMarketSidebar={setShowMarketSidebar} />}
          </div>}

    </>

  );
};

export default Sidebar;
