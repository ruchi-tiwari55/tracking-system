import React, { useState } from 'react';
import styles from '../styles/postad.module.css'
import '../styles/globals.css';
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
            <div>EGGS</div>
            <div>FISH</div>
            <div>FRUITS</div>
            <div>MILK</div>
            <div>VEGETABLES</div>
          </>
        );
      case 'SELF MADE':
        return (
          <>
            <div>ARTIFICIAL JEWELLERY</div>
            <div>CLOTH/STITCHING</div>
            <div>HOME DECOR</div>
            <div>HOME MADE</div>
            <div>PLANT & POT</div>
          </>
        );
      case 'RENTAL ITEMS':
        return (
          <>
            <div>AC</div>
            <div>COMPUTER/LAPTOP</div>
            <div>COSTUME/CLOTH</div>
            <div>FRIDGE</div>
            <div>FURNITURE</div>
            <div>HOME APPLIANCE</div>
            <div>INVERTER</div>
          </>
        );
      case 'REAL ESTATE':
        return (
          <>
            <div>BUY</div>
            <div>COMMERCIALS</div>
            <div>RENT</div>
          </>
        );
      case 'VEHICLES':
        return (
          <>
            <div>BICYCLES</div>
            <div>BIKES</div>
            <div>CARS</div>
            <div>OTHER</div>
            <div>SCOOTERS</div>
            <div>SPARE PARTS</div>
          </>
        );
      case 'MOBILES':
        return (
          <>
            <div>ACCESSORIES</div>
            <div>MOBILE PHONES</div>
            <div>TABLETS</div>
          </>
        );
      case 'FURNITURE':
        return (
          <>
            <div>BEDS</div>
            <div>CHAIRS</div>
            <div>DINING TABLES</div>
            <div>KIDS FURNITURE</div>
            <div>OFFICE FURNITURE</div>
            <div>SOFA</div>
            <div>WARDROBES</div>
          </>
        );
      case 'FASHION':
        return (
          <>
            <div>KIDS</div>
            <div>MEN</div>
            <div>WOMEN</div>
          </>
        );
      case 'ELECTRONICS':
        return (
          <>
            <div>AC</div>
            <div>CAMERAS & LENSES</div>
            <div>COMPUTER/LAPTOP</div>
            <div>FRIDGE</div>
            <div>KITCHEN APPLIANCES</div>
            <div>PRINTERS</div>
            <div>TV</div>
            <div>WASHING MACHINES</div>
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