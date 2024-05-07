import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MarketSidebar.css";
import MarketSubCategory from "../MarketSubcategory/MarketSubcategory";
import useMediaQuery from '@mui/material/useMediaQuery';
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
          "https://lzycrazy-tracking-backend.onrender.com/categories/getAll"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        console.log("Fetched data:", responseData);
        if (responseData && responseData.length > 0) {
          setCategories(responseData);
        } else {
          throw new Error("No categories found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setShowMarketSidebar(false);
  };

  return (
    <>
      {isMobile ? (
        <MobileMarketSideBar />
      ) : (
        <div className="side-outer">
          <div
            style={{
              textAlign: "center",
              fontWeight: "500",
              fontSize: "1.5rem",
              backgroundColor: "white",
              display: showMarketSidebar ? "block" : "none",
            }}
          >
            CATEGORIES
          </div>
          {showMarketSidebar &&
            categories.map((category) => (
              <div className="inner" key={category._id}>
                <Link
                  to="#"
                  onClick={() => handleCategoryClick(category.categoryName)}
                >
                  <img src="assets/images/response.png" alt="category" />
                  <span>{category.categoryName}</span>
                </Link>
              </div>
            ))}
          {!showMarketSidebar && (
            <MarketSubCategory
              categoryName={selectedCategory}
              setShowMarketSidebar={setShowMarketSidebar}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Sidebar;
