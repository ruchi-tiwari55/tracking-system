import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

// import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import About from "../pages/About";
import Advertising from "../pages/Advertising";
import Hiring from "../pages/Hiring";
import Investor from "../pages/Investor";
import Help from "../pages/Help";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Postad from "../pages/Postad"
import Grain from "../pages/postadforms/Grain";
// import ProductDetails from "../pages/Home/ProductDetails";


import PageLayout from "../components/common/PageLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Response from "../pages/Response";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/" element={<PageLayout />}>
          <Route path="dashboard" element={<Home />} />
          <Route path="user-page" element={<Profile />} />
          <Route path="market-Place" element={<h1>Market Place</h1>} />
          <Route path="my-ads-response" element={<Response />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="advertising" element={<Advertising />} />
        <Route path="business-profile" element={<Investor />} />
        <Route path="investors" element={<Investor />} />
        <Route path="hiring" element={<Hiring />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="help-center" element={<Help />} />
        <Route path="my-ads" element={<Postad />} />
        <Route path="anaaj-grain" element={<Grain />} />

        {/* <Route path="home" element={<Home />} /> */}
        {/* <Route path="product-details" element={<ProductDetails />} /> */}

        {/* <Route path="/" element={<PageLayout />}>
          <Route path="user-page" element={<Profile />} />
          <Route path="market-Place" element={<Market />} />
          <Route path="my-ads" element={<MyAdd />} />
          <Route path="my-ads-response" element={<Response />} />
        </Route> */}



      </Routes>
    </Router>

  );
};

export default AppRoutes;
