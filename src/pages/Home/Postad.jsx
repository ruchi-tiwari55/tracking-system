import React, { useState } from 'react';
import styles from '../../styles/home/postad.module.css'
import '../../styles/globals.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import VehiclesIcon from '@mui/icons-material/DriveEtaOutlined';
import RealEstateIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import MobilesIcon from '@mui/icons-material/PhoneIphoneOutlined';
import FurnitureIcon from '@mui/icons-material/ChairOutlined';
import FashionIcon from '@mui/icons-material/WomanOutlined';
import ElectronicsIcon from '@mui/icons-material/CableOutlined';
import TourAndTravelsIcon from '@mui/icons-material/PublicOutlined';
import RentalItemsIcon from '@mui/icons-material/ShoppingCartOutlined';
import SelfMadeIcon from '@mui/icons-material/Inventory2Outlined';
import DirectByFarmIcon from '@mui/icons-material/Agriculture';
import { Link } from 'react-router-dom';


function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const generateOptions = () => {
    switch (selectedCategory) {
      case 'DIRECT BY FARM':
        return (
          <>
            <Link to="/anaaj-grain" style={{ color: "inherit", textDecoration: "none" }}><div>ANAAJ/GRAIN</div></Link>
            <Link to="/eggs" style={{ color: "inherit", textDecoration: "none" }}><div>EGGS</div></Link>
            <Link to="/fish" style={{ color: "inherit", textDecoration: "none" }}><div>FISH</div></Link>
            <Link to="/fruits" style={{ color: "inherit", textDecoration: "none" }}><div>FRUITS</div></Link>
            <Link to="/milk" style={{ color: "inherit", textDecoration: "none" }}><div>MILK</div></Link>
            <Link to="/vegetables" style={{ color: "inherit", textDecoration: "none" }}><div>VEGETABLES</div></Link>
          </>
        );
      case 'SELF MADE':
        return (
          <>
            <Link to="/artificial-jewellery" style={{ color: "inherit", textDecoration: "none" }}><div>ARTIFICIAL JEWELLERY</div></Link>
            <Link to="/cloth" style={{ color: "inherit", textDecoration: "none" }}><div>CLOTH/STITCHING</div></Link>
            <Link to="/home-decor" style={{ color: "inherit", textDecoration: "none" }}><div>HOME DECOR</div></Link>
            <Link to="/home-made" style={{ color: "inherit", textDecoration: "none" }}><div>HOME MADE</div></Link>
            <Link to="/plant-pot" style={{ color: "inherit", textDecoration: "none" }}><div>PLANT & POT</div></Link>
          </>
        );
      case 'RENTAL ITEMS':
        return (
          <>
            <Link to="/ac" style={{ color: "inherit", textDecoration: "none" }}><div>AC</div></Link>
            <Link to="/computer-laptop" style={{ color: "inherit", textDecoration: "none" }}><div>COMPUTER/LAPTOP</div></Link>
            <Link to="/costume" style={{ color: "inherit", textDecoration: "none" }}><div>COSTUME/CLOTH</div></Link>
            <Link to="/fridge" style={{ color: "inherit", textDecoration: "none" }}><div>FRIDGE</div></Link>
            <Link to="/furniture" style={{ color: "inherit", textDecoration: "none" }}><div>FURNITURE</div></Link>
            <Link to="/home-appliance" style={{ color: "inherit", textDecoration: "none" }}><div>HOME APPLIANCE</div></Link>
            <Link to="/inverter" style={{ color: "inherit", textDecoration: "none" }}><div>INVERTER</div></Link>
          </>
        );
      case 'REAL ESTATE':
        return (
          <>
            <Link to="/buy" style={{ color: "inherit", textDecoration: "none" }}><div>BUY</div></Link>
            <Link to="/commercials" style={{ color: "inherit", textDecoration: "none" }}><div>COMMERCIALS</div></Link>
            <Link to="/rent" style={{ color: "inherit", textDecoration: "none" }}><div>RENT</div></Link>
          </>
        );
      case 'VEHICLES':
        return (
          <>
            <Link to="/bicycle" style={{ color: "inherit", textDecoration: "none" }}><div>BICYCLES</div></Link>
            <Link to="/bikes" style={{ color: "inherit", textDecoration: "none" }}><div>BIKES</div></Link>
            <Link to="/cars" style={{ color: "inherit", textDecoration: "none" }}><div>CARS</div></Link>
            <Link to="/scooters" style={{ color: "inherit", textDecoration: "none" }}><div>SCOOTERS</div></Link>
            <Link to="/spareparts" style={{ color: "inherit", textDecoration: "none" }}><div>SPARE PARTS</div></Link>
          </>
        );
      case 'MOBILES':
        return (
          <>
            <Link to="/accessories" style={{ color: "inherit", textDecoration: "none" }}><div>ACCESSORIES</div></Link>
            <Link to="/mobile-phones" style={{ color: "inherit", textDecoration: "none" }}><div>MOBILE PHONES</div></Link>
            <Link to="/tablets" style={{ color: "inherit", textDecoration: "none" }}><div>TABLETS</div></Link>
          </>
        );
      case 'FURNITURE':
        return (
          <>
            <Link to="/beds" style={{ color: "inherit", textDecoration: "none" }}><div>BEDS</div></Link>
            <Link to="/chairs" style={{ color: "inherit", textDecoration: "none" }}><div>CHAIRS</div></Link>
            <Link to="/dining-tables" style={{ color: "inherit", textDecoration: "none" }}><div>DINING TABLES</div></Link>
            <Link to="/kids-furniture" style={{ color: "inherit", textDecoration: "none" }}><div>KIDS FURNITURE</div></Link>
            <Link to="/office-furniture" style={{ color: "inherit", textDecoration: "none" }}><div>OFFICE FURNITURE</div></Link>
            <Link to="/sofa" style={{ color: "inherit", textDecoration: "none" }}><div>SOFA</div></Link>
            <Link to="/wardrobes" style={{ color: "inherit", textDecoration: "none" }}><div>WARDROBES</div></Link>
          </>
        );
      case 'FASHION':
        return (
          <>
            <Link to="/kids" style={{ color: "inherit", textDecoration: "none" }}><div>KIDS</div></Link>
            <Link to="/men" style={{ color: "inherit", textDecoration: "none" }}><div>MEN</div></Link>
            <Link to="/women" style={{ color: "inherit", textDecoration: "none" }}><div>WOMEN</div></Link>
          </>
        );
      case 'ELECTRONICS':
        return (
          <>
            <Link to="/air-conditioner" style={{ color: "inherit", textDecoration: "none" }}><div>AC</div></Link>
            <Link to="/camera-lenses" style={{ color: "inherit", textDecoration: "none" }}><div>CAMERAS & LENSES</div></Link>
            <Link to="/computerlaptop" style={{ color: "inherit", textDecoration: "none" }}><div>COMPUTER/LAPTOP</div></Link>
            <Link to="/fridgee" style={{ color: "inherit", textDecoration: "none" }}><div>FRIDGE</div></Link>
            <Link to="/kitchen-appliance" style={{ color: "inherit", textDecoration: "none" }}><div>KITCHEN APPLIANCES</div></Link>
            <Link to="/printers" style={{ color: "inherit", textDecoration: "none" }}><div>PRINTERS</div></Link>
            <Link to="/television" style={{ color: "inherit", textDecoration: "none" }}><div>TV</div></Link>
            <Link to="/washing-machines" style={{ color: "inherit", textDecoration: "none" }}><div>WASHING MACHINES</div></Link>
          </>
        );
      case 'TOUR & TRAVELS':
        return (
          <>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className={styles.navbar}></div>
      <h1 className={styles.head1}>POST YOUR AD</h1>
      <div className={styles.inner}>
        <div className={styles.top}>
          <h3>CHOOSE A CATEGORY</h3>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={selectedCategory === 'DIRECT BY FARM' ? styles.clicked : ''} onClick={() => handleCategoryClick('DIRECT BY FARM')}>
              <DirectByFarmIcon />
              <p>DIRECT BY FARM</p>
              <ArrowForwardIosIcon />
            </div>

            <div className={selectedCategory === 'SELF MADE' ? styles.clicked : ''} onClick={() => handleCategoryClick('SELF MADE')}>
              <SelfMadeIcon />
              <p>SELF MADE</p>
              <ArrowForwardIosIcon />
            </div>

            <div className={selectedCategory === 'RENTAL ITEMS' ? styles.clicked : ''} onClick={() => handleCategoryClick('RENTAL ITEMS')}>
              <RentalItemsIcon />
              <p>RENTAL ITEMS</p>
              <ArrowForwardIosIcon />
            </div>

            <div className={selectedCategory === 'REAL ESTATE' ? styles.clicked : ''} onClick={() => handleCategoryClick('REAL ESTATE')}>
              <RealEstateIcon />
              <p>REAL ESTATE</p>
              <ArrowForwardIosIcon />
            </div>

            <div className={selectedCategory === 'VEHICLES' ? styles.clicked : ''} onClick={() => handleCategoryClick('VEHICLES')}>
              <VehiclesIcon />
              <p>VEHICLES</p>
              <ArrowForwardIosIcon />
            </div>

            <div className={selectedCategory === 'MOBILES' ? styles.clicked : ''} onClick={() => handleCategoryClick('MOBILES')}>
              <MobilesIcon />
              <p>MOBILES</p>
              <ArrowForwardIosIcon />
            </div>

            <div className={selectedCategory === 'FURNITURE' ? styles.clicked : ''} onClick={() => handleCategoryClick('FURNITURE')}>
              <FurnitureIcon />
              <p>FURNITURE</p>
              <ArrowForwardIosIcon />
            </div>

            <div className={selectedCategory === 'FASHION' ? styles.clicked : ''} onClick={() => handleCategoryClick('FASHION')}>
              <FashionIcon />
              <p>FASHION</p>
              <ArrowForwardIosIcon />
            </div>

            <div className={selectedCategory === 'ELECTRONICS' ? styles.clicked : ''} onClick={() => handleCategoryClick('ELECTRONICS')}>
              <ElectronicsIcon />
              <p>ELECTRONICS</p>
              <ArrowForwardIosIcon />
            </div>

            <div className={selectedCategory === 'TOUR & TRAVELS' ? styles.clicked : ''} onClick={() => handleCategoryClick('TOUR & TRAVELS')}>
              <TourAndTravelsIcon />
              <p>TOUR & TRAVELS</p>
              <ArrowForwardIosIcon />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.right_inner}>
              {selectedCategory && generateOptions()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;