// import React from 'react'
// import styles from '../../styles/outerPages/login.module.css'
// import banner from '/assets/about/banner_main.jpeg'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


//   var slidersettings = {
//     dots: true,
//     infinite: true,
//     speed: 1500,
//     autoplay: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };


// const Banner = () => {
//   return (
//     <div className={styles.banner}>
//       <img src={banner} alt="lazycrazy logo" className={styles.banner_img} />
//     </div>
//   )
// }
// export default Banner

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Banner from '../../assets/updatedBanners/BANNER 1.jpg';
import Banner2 from '../../assets/updatedBanners/dw6.png';
import Banner3 from '../../assets/updatedBanners/INviting india.jpg';


// INviting india
import useMediaQuery from '@mui/material/useMediaQuery';

function VideoComponent() {
  // const media= useMediaQuery()
  const isMobile = useMediaQuery('(max-width:600px)');
  const slidersettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const enlargedHeight = isMobile?'200px':'100%'; 
  const enlargedWidth = '100%'; 
  
  const ImageWithFixedSize = ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      style={{
        height: enlargedHeight,
        width: enlargedWidth,
        objectFit: 'scale-down',
        borderRadius: 20,
      }}
    />
  );
  
  return (
    <div className="container" style={{ textAlign: "center", borderRadius:"50px", marginTop:10 }}>
      <div className="row justify-content-center"> 
        <div className="col-lg-8">  
          <Slider {...slidersettings} style={{height:160}}>
            <div>
              <ImageWithFixedSize src={Banner} alt="Banner 77" />
            </div>
            <div>
              <ImageWithFixedSize src={Banner2} alt="Banner 33" />
            </div>
            <div>
              <ImageWithFixedSize src={Banner3} alt="Banner 44" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default VideoComponent;
