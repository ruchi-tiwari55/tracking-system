import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import Login from "../pages/Login";
import About from "../pages/main/About";
import Advertising from "../pages/main/Advertising";
import Hiring from "../pages/main/Hiring";
import Investor from "../pages/main/Investor";
import Help from "../pages/main/Help";
import PrivacyPolicy from "../pages/main/PrivacyPolicy";
import Postad from "../pages/home/Postad"
import Grain from "../pages/home/postadforms/Grain";

import PageLayout from "../components/home/PageLayout";
import Home from "../pages/home/Home";
import Profile from "../pages/home/Profile";
import Response from "../pages/home/Response";

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
      </Routes>
    </Router>

  );
};

export default AppRoutes;
