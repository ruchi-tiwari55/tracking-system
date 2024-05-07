import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MarketSubcategory = ({ categoryName, setShowMarketSidebar }) => {
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        const response = await fetch(
          "https://lzycrazy-tracking-backend.onrender.com/subcategories/getAll"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch subcategories");
        }
        const data = await response.json();
        setSubcategories(data);
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      }
    };

    fetchSubcategories();
  }, []);

  const goBack = () => {
    setShowMarketSidebar(true);
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          fontWeight: "500",
          fontSize: "1.5rem",
          backgroundColor: "white",
          display: "flex",
          gap: "1.5rem",
          alignItems: "center",
        }}
      >
        <i className="fas fa-arrow-left fa-1x" onClick={goBack} style={{ cursor: "pointer" }} ></i>
        <span>{categoryName}</span>
      </div>
      {subcategories.map((subcategory) => (
        <div key={subcategory._id} className="subcategory-item">
          <Link to="/marketplacePage" className="subcategory-link">
            {subcategory.addIcon && <img src={subcategory.addIcon} alt="" className="subcategory-icon" style={{height:20, width:20, borderRadius:40}}/>}
            <span className="subcategory-name">{subcategory.subCategoryName}</span>
          </Link>
        </div>
      ))}
    </>
  );
};

export default MarketSubcategory;
