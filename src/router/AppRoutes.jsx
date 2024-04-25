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
import SoftwareTechnology from "../pages/main/SoftwareTechnology"

import PageLayout from "../components/home/PageLayout";
import Home from "../pages/Home/Home";
import Profile from "../pages/Home/Profile";
import Response from "../pages/Home/Response";
import MarketPlace from "../pages/Home/MarketPlace/MarketPlace";
import Postad from "../pages/Home/Postad"

import Grain from "../pages/Home/postadforms/directByFarm/Grain";
import Eggs from "../pages/Home/postadforms/directByFarm/eggs";
import Fish from "../pages/Home/postadforms/directByFarm/fish"
import Fruits from "../pages/Home/postadforms/directByFarm/fruits"
import Milk from "../pages/Home/postadforms/directByFarm/milk"
import Vegetables from "../pages/Home/postadforms/directByFarm/vegetables"

import ArtificialJewellery from "../pages/Home/postadforms/selfMade/artificialJewellery";
import Cloth from "../pages/Home/postadforms/selfMade/cloth"
import HomeDecor from "../pages/Home/postadforms/selfMade/homeDecor"
import HomeMade from "../pages/Home/postadforms/selfMade/homeMade"
import PlantPot from "../pages/Home/postadforms/selfMade/plant&pot"

import AC from "../pages/Home/postadforms/rentalItems/ac";
import ComputerLaptop from "../pages/Home/postadforms/rentalItems/computerLaptop"
import Costume from "../pages/Home/postadforms/rentalItems/costume"
import Fridge from "../pages/Home/postadforms/rentalItems/fridge"
import Furniture from "../pages/Home/postadforms/rentalItems/furniture"
import HomeAppliance from "../pages/Home/postadforms/rentalItems/homeAppliance"
import Inverter from "../pages/Home/postadforms/rentalItems/inverter"

import MobilePhones from "../pages/Home/postadforms/mobiles/mobilePhones"
import Tablets from "../pages/Home/postadforms/mobiles/tablets"
import Accessories from "../pages/Home/postadforms/mobiles/accessories"

import HouseAndAppartments from "../pages/Home/postadforms/realEstate/saleH&A"


import Bicycles from "../pages/Home/postadforms/vehicles/bicycleform"

// import Payment from "../components/common/payment/PaymentForm"

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/" element={<PageLayout />}>
          <Route path="dashboard" element={<Home />} />
          <Route path="user-page" element={<Profile />} />
          <Route path="market-Place" element={<MarketPlace />} />
          <Route path="my-ads-response" element={<Response />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="advertising" element={<Advertising />} />
        <Route path="business-profile" element={<Business />} />
        <Route path="software-technology" element={<SoftwareTechnology />} />
        <Route path="investors" element={<Investor />} />
        <Route path="hiring" element={<Hiring />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="help-center" element={<Help />} />

        <Route path="my-ads" element={<Postad />} />

        <Route path="anaaj-grain" element={<Grain />} />
        <Route path="eggs" element={<Eggs />} />
        <Route path="fish" element={<Fish />} />
        <Route path="fruits" element={<Fruits />} />
        <Route path="milk" element={<Milk />} />
        <Route path="vegetables" element={<Vegetables />} />

        <Route path="artificial-jewellery" element={<ArtificialJewellery />} />
        <Route path="cloth" element={<Cloth />} />
        <Route path="home-decor" element={<HomeDecor />} />
        <Route path="home-made" element={<HomeMade />} />
        <Route path="plant-pot" element={<PlantPot />} />

        <Route path="ac" element={<AC />} />
        <Route path="computer-laptop" element={<ComputerLaptop />} />
        <Route path="costume" element={<Costume />} />
        <Route path="fridge" element={<Fridge />} />
        <Route path="furniture" element={<Furniture />} />
        <Route path="home-appliance" element={<HomeAppliance />} />
        <Route path="inverter" element={<Inverter />} />

        <Route path="accessories" element={<Accessories />} />
        <Route path="mobile-phones" element={<MobilePhones />} />
        <Route path="tablets" element={<Tablets />} />
        

        <Route path="house-and-appartments" element={<HouseAndAppartments />} />





        <Route path="bicycles" element={<Bicycles />} />

        
        {/* <Route path="payment" element={<Payment />} /> */}
      </Routes>
    </Router>

  );
};

export default AppRoutes;
