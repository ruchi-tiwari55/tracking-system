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
import banner77 from "../../assets/banner77.png";
import banner22 from "../../assets/banner22.jpg";
import banner33 from "../../assets/banner33.jpg";
import banner55 from "../../assets/banner55.jpg";
import banner44 from "../../assets/banner44.jpg";
import banner1 from "../../assets/banner1.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";
import banner5 from "../../assets/banner5.jpg";
import banner from '/assets/about/banner_main.jpeg'
import useMediaQuery from '@mui/material/useMediaQuery';

function VideoComponent() {
  // const media= useMediaQuery()
  const isMobile = useMediaQuery('(max-width:600px)');
  const slidersettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const enlargedHeight = isMobile?'200px':'300px'; 
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
    <div className="container" style={{ textAlign: "center", borderRadius:"10px", marginBottom:10 }}>
      <div className="row justify-content-center"> 
        <div className="col-lg-8">  
          <Slider {...slidersettings} style={{height:170}}>
            <div>
              <ImageWithFixedSize src={banner77} alt="Banner 77" />
            </div>
            <div>
              <ImageWithFixedSize src={banner33} alt="Banner 33" />
            </div>
            <div>
              <ImageWithFixedSize src={banner44} alt="Banner 44" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default VideoComponent;
