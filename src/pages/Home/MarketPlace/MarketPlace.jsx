import React from "react";
import video1 from "../../../assets/video1.mp4";
import video2 from "../../../assets/video2.mp4";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner77 from "../../../assets/banner77.png";
import banner22 from "../../../assets/banner22.jpg";
import banner33 from "../../../assets/banner33.jpg";
import banner55 from "../../../assets/banner55.jpg";
import banner44 from "../../../assets/banner44.jpg";
import banner1 from "../../../assets/banner1.jpg";
import banner3 from "../../../assets/banner3.jpg";
import banner4 from "../../../assets/banner4.jpg";
import banner5 from "../../../assets/banner5.jpg";
import MarketSidebar from "../../../components/home/MarketSidebar/MarketSidebar"
function VideoComponent() {
  var slidersettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    var slidersetting = {
      dots: true,
      infinite: true,
      speed: 2500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    var slidersettingt = {
      dots: true,
      infinite: true,
      speed: 3500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    var slidersettingu = {
      dots: true,
      infinite: true,
      speed: 5500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };


  const fixedHeight = '200px'; 
const fixedWidth = '100%';   
const ImageWithFixedSize = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    style={{
      height: fixedHeight,  
      width: fixedWidth,   
      objectFit: 'cover', 
      borderRadius: '10px', 
    }}
  />
);
  return (
    <>
    <div className="col-lg-3">
    <MarketSidebar />
</div>
    <div className="container col-lg-12 col-md-2" style={{marginTop:"75px",width:"80%", marginLeft:"19%"}}>
      <div className="row" style={{ justifyContent: "flex-start" }}>
        <div className="col-lg-6" style={{ textAlign: "left" }}>
          <div
            className="video-wrapper"
            style={{ borderRadius: "15px", overflow: "hidden" }}
          >
            <video
              className="video-size"
              preload="metadata"
              controls
              style={{ width: "100%", height: "210px" }}
              poster={banner1}
            >
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="col-lg-6" style={{ textAlign: "left" }}>
          <div
            className="video-wrapper"
            style={{ borderRadius: "15px", overflow: "hidden" }}
          >
            <video
              className="video-size"
              preload="metadata"
              controls
              style={{ width: "100%", height: "210px" }}
              poster={banner3}
            >
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      {/* FIRST IMAGE SLIDER */}
      <div className="row">
      <div className="col-lg-6">
  <Slider {...slidersettings}>
    <div>
      <ImageWithFixedSize src={banner77} alt="Banner 77" />
    </div>
    <div>
      <ImageWithFixedSize src={banner22} alt="banner 22" />
    </div>
    <div>
      <ImageWithFixedSize src={banner33} alt="banner 33" />
    </div>
  </Slider>
</div>
       

        <div className="col-lg-6">
          <Slider {...slidersetting}>
            <div>
              <ImageWithFixedSize
                src={banner55}
                alt="Banner 55"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px"
                }}
              />
            </div>
            <div>
              <ImageWithFixedSize
                src={banner44}
                alt="banner 33"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px"
                }}
              />
            </div>
            <div>
              <ImageWithFixedSize
                src={banner33}
                alt="banner 44"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px"
                }}
              />
            </div>
          </Slider>
        </div>
      </div>

      {/* SECOND IMAGE SLIDER */}
      <div className="row">
        <div className="col-lg-6">
          <Slider {...slidersettingt}>
            <div>
              <ImageWithFixedSize
                src={banner1}
                alt="Banner 1"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px"
                }}
              />
            </div>
            <div>
              <ImageWithFixedSize
                src={banner5}
                alt="banner 5"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px"
                }}
              />
            </div>
            <div>
              <ImageWithFixedSize
                src={banner3}
                alt="banner 3"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px"
                }}
              />
            </div>
          </Slider>
        </div>

        <div className="col-lg-6">
          <Slider {...slidersettingu}>
            <div>
              <ImageWithFixedSize
                src={banner3}
                alt="Banner 3"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px"
                }}
              />
            </div>
            <div>
              <ImageWithFixedSize
                src={banner4}
                alt="banner 4"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px"
                }}
              />
            </div>
            <div>
              <ImageWithFixedSize
                src={banner5}
                alt="banner 5"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px"
                }}
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
    </>
  );
}

export default VideoComponent;
