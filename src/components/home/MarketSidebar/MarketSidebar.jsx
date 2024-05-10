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
          "http://213.210.36.143:8000/categories/getAll"
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
    <div  >
      {isMobile ? (
        <MobileMarketSideBar />
      ) : (
        <div  >
          <div
            style={{
              textAlign: "center",
              fontWeight: "500",
              fontSize: "18px",
              // backgroundColor: "white",
              marginTop: 20,
              marginBottom:20,
              display: showMarketSidebar ? "block" : "none",
            }}
          >
            CATEGORIES
          </div>
          <div className="side-outer" id="nav-item" style={{ overflow: 'auto', height: 'calc(100vh - 80px)' }}>
            {showMarketSidebar &&
              categories.map((category) => (
                <div className="inner" key={category._id}>
                  <Link
                    to="#"
                    onClick={() => handleCategoryClick(category.categoryName)}
                  >
                    <div style={{
                     height: '30px',
                     width: '30px',
                     backgroundColor: 'rgb(225, 224, 222)',
                     borderRadius: '50%', /* This makes the div circular */
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center'
                    }}>

                      <img src="assets/images/response.png" alt="category" style={{ height: 20, width: 20, borderRadius: 40 }} />
                    </div>
                    <span style={{ fontSize: 16 }}>{category.categoryName}</span>
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


        </div>
      )}
    </div>
  );
};

export default Sidebar;
