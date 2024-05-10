import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import Login from "../pages/Login";
import About from "../pages/main/About";
import Advertising from "../pages/main/Advertising";
import Hiring from "../pages/main/Hiring";
import Investor from "../pages/main/Investor";
import Business from "../pages/main/Business";
import Help from "../pages/main/Help";
import PrivacyPolicy from "../pages/main/PrivacyPolicy";
import Postad from "../pages/Home/Postad";
// import Grain from "../pages/Home/postadforms/Grain";
import SoftwareTechnology from "../pages/main/SoftwareTechnology";

import PageLayout from "../components/home/PageLayout";
import Home from "../pages/Home/Home";
import Profile from "../pages/Home/Profile";
import Response from "../pages/Home/Response";
import MarketPlace from "../pages/Home/MarketPlace/MarketPlace";

import MarketplacePage from "../pages/MarketplacePage/MarketplacePage";





import FormsLayout from "../pages/Home/postAddForms/FormLayout";
import MarketplacePageDetails from "../pages/MarketplacePageDetails/MarketplacePageDetails";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route index exact path="/" element={<Login />} />
        <Route exact path="/" element={<PageLayout />}>
          <Route path="dashboard" element={<Home />} />
          <Route path="user-page" element={<Profile />} />
          <Route path="market-Place" element={<MarketPlace />} />
          <Route path="marketplacePage" element={<MarketplacePage />} />
     
          <Route path="my-ads-response" element={<Response />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="advertising" element={<Advertising />} />
        <Route path="business-profile" element={<Business />} />
        <Route path="investors" element={<Investor />} />
        <Route path="hiring" element={<Hiring />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="help-center" element={<Help />} />
        <Route path="software-technology" element={<SoftwareTechnology />} />
        {/* <Route path="payment" element={<Payment />} /> */}


        <Route path="my-ads" element={<Postad />} />

       
        <Route path="mainForms" element={<FormsLayout />} />
        {/* <Route path="MarketplacePageDetails" element={<MarketplacePageDetails />} /> */}
        <Route path="marketplacePage/:productId" element={<MarketplacePageDetails />} />


      </Routes>
    </Router>
  );
};

export default AppRoutes;