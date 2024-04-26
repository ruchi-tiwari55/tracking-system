import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MarketSidebar.css";
import MarketSubcategory from "../MarketSubcategory/MarketSubcategory"

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [categories, setCategories] = useState([]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

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
  

  return (
    <nav className={`navigation ${isCollapsed ? "collapsed" : ""}`}>
      <div className="nav-toggle" onClick={toggleSidebar}>
        <i className={`fa ${isCollapsed ? "fa-bars" : "fa-times"}`}></i>
      </div>
      <ul className="sidebar-list">
        <li>
          <h5>Categories</h5>  
        </li>
      </ul>
      <div className="nav-content">
        <div className="nav-wrap bg-transparent-card single-box">
          <ul className="sidebar-list">
           
            {categories.map((category) => (
              <li key={category._id}>
                <Link to="/market-Place/marketsubcategory" className="nav-content-bttn">
                  {category.Categoryname}
                </Link>
              </li>
            ))}
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






















// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./MarketSidebar.css";
// import MarketSubcategory from "../MarketSubcategory/MarketSubcategory"

// const Sidebar = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [categories, setCategories] = useState([]);

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://lzycrazy-backend.onrender.com/api/admins/all-category"
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const responseData = await response.json();
//         console.log("Fetched data:", responseData);
//         if (responseData.code === 200 && Array.isArray(responseData.data)) {
//           setCategories(responseData.data);
//         } else {
//           throw new Error("Invalid data format received from the server");
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);
  

//   return (
//     <nav className={`navigation ${isCollapsed ? "collapsed" : ""}`}>
//       <div className="nav-toggle" onClick={toggleSidebar}>
//         <i className={`fa ${isCollapsed ? "fa-bars" : "fa-times"}`}></i>
//       </div>
//       <ul className="sidebar-list">
//         <li>
//           <h5>Categories</h5>  
//         </li>
//       </ul>
//       <div className="nav-content">
//         <div className="nav-wrap bg-transparent-card single-box">
//           <ul className="sidebar-list">
           
//             {categories.map((category) => (
//               <li key={category._id}>
//                 <Link to={`/${category.slug}`} className="nav-content-bttn">
//                   {category.Categoryname}
//                 </Link>
//               </li>
//             ))}
//             <li>
//               <Link to="#" className="nav-content-bttn">
//                 Coming Soon
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Sidebar;