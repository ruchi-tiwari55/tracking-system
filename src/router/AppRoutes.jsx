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

import AnaajGrain from "../pages/Home/postadforms/directByFarm/anaajGrain";
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

import AirConditionerRI from "../pages/Home/postadforms/rentalItems/ac";
import ComputerLaptopRI from "../pages/Home/postadforms/rentalItems/computerLaptop"
import Costume from "../pages/Home/postadforms/rentalItems/costume"
import FridgeRI from "../pages/Home/postadforms/rentalItems/fridge"
import Furniture from "../pages/Home/postadforms/rentalItems/furniture"
import HomeAppliance from "../pages/Home/postadforms/rentalItems/homeAppliance"
import Inverter from "../pages/Home/postadforms/rentalItems/inverter"

import MobilePhones from "../pages/Home/postadforms/mobiles/mobilePhones"
import Tablets from "../pages/Home/postadforms/mobiles/tablets"
import Accessories from "../pages/Home/postadforms/mobiles/accessories"

import Kids from "../pages/Home/postadforms/fashion/kids"
import Men from "../pages/Home/postadforms/fashion/men"
import Women from "../pages/Home/postadforms/fashion/women"

import Buy from "../pages/Home/postadforms/realEstate/buy"
import Commercials from "../pages/Home/postadforms/realEstate/commercials"
import Rent from "../pages/Home/postadforms/realEstate/rent"

import Bicycle from "../pages/Home/postadforms/vehicles/bicycle"
import Bikes from "../pages/Home/postadforms/vehicles/bikes"
import Scooters from "../pages/Home/postadforms/vehicles/scooters"
import Spareparts from "../pages/Home/postadforms/vehicles/spareparts"
import Cars from "../pages/Home/postadforms/vehicles/cars"

import AirConditionerE from "../pages/Home/postadforms/electronics/ac" 
import CameraLenses from "../pages/Home/postadforms/electronics/camera&lenses"
import ComputerLaptopE from "../pages/Home/postadforms/electronics/computerLaptop"
import FridgeE from "../pages/Home/postadforms/electronics/fridge"
import KitchenAppliance from "../pages/Home/postadforms/electronics/kitchenAppliance"
import Printers from "../pages/Home/postadforms/electronics/printers"
import Television from "../pages/Home/postadforms/electronics/tv"
import WashingMachines from "../pages/Home/postadforms/electronics/washingMachines"

import Beds from "../pages/Home/postadforms/furniture/beds"
import Chairs from "../pages/Home/postadforms/furniture/chairs"
import DiningTables from "../pages/Home/postadforms/furniture/diningTables"
import KidsFurniture from "../pages/Home/postadforms/furniture/kidsFurniture"
import OfficeFurniture from "../pages/Home/postadforms/furniture/officeFurniture"
import Sofa from "../pages/Home/postadforms/furniture/sofa"
import Wardrobes from "../pages/Home/postadforms/furniture/wardrobes"


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

        <Route path="anaaj-grain" element={<AnaajGrain />} />
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

        <Route path="ac" element={<AirConditionerRI />} />
        <Route path="computer-laptop" element={<ComputerLaptopRI />} />
        <Route path="costume" element={<Costume />} />
        <Route path="fridge" element={<FridgeRI />} />
        <Route path="furniture" element={<Furniture />} />
        <Route path="home-appliance" element={<HomeAppliance />} />
        <Route path="inverter" element={<Inverter />} />

        <Route path="air-conditioner" element={<AirConditionerE />} />
        <Route path="camera-lenses" element={<CameraLenses />} />
        <Route path="computerlaptop" element={<ComputerLaptopE />} />
        <Route path="fridgee" element={<FridgeE />} />
        <Route path="kitchen-appliance" element={<KitchenAppliance />} />
        <Route path="printers" element={<Printers />} />
        <Route path="television" element={<Television />} />
        <Route path="washing-machines" element={<WashingMachines />} />

        <Route path="accessories" element={<Accessories />} />
        <Route path="mobile-phones" element={<MobilePhones />} />
        <Route path="tablets" element={<Tablets />} />

        <Route path="buy" element={<Buy />} />
        <Route path="commercials" element={<Commercials />} />
        <Route path="rent" element={<Rent />} />

        <Route path="kids" element={<Kids />} />
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
        

        <Route path="beds" element={<Beds />} />
        <Route path="chairs" element={<Chairs />} />
        <Route path="dining-tables" element={<DiningTables />} />
        <Route path="kids-furniture" element={<KidsFurniture />} />
        <Route path="office-furniture" element={<OfficeFurniture />} />
        <Route path="sofa" element={<Sofa />} />
        <Route path="wardrobes" element={<Wardrobes />} />

        <Route path="bicycle" element={<Bicycle />} />
        <Route path="bikes" element={<Bikes />} />
        <Route path="scooters" element={<Scooters />} />
        <Route path="spareparts" element={<Spareparts />} />
        <Route path="cars" element={<Cars />} />



        {/* <Route path="payment" element={<Payment />} /> */}
      </Routes>
    </Router>

  );
};

export default AppRoutes;
