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
import './MarketPlace.css'

import useMediaQuery from '@mui/material/useMediaQuery';

function VideoComponent() {
  const isMobile = useMediaQuery('(max-width:600px)');

  var slidersettings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="main-right" style={{ overflow: 'auto', height: 'calc(100vh - 80px)' , marginBottom:50}}>
        <div className="main-section">
          <div className="banner">
            <video className="video-size" controls poster={banner5}>
              <source src={video1} type="video/mp4" />
              <source src="" type="video/ogg" />
            </video>
          </div>
          <div className="banner">
            <video className="video-size" controls poster={banner3}>
              <source src={video2} type="video/mp4" />
              <source src="" type="video/ogg" />
            </video>
          </div>

          <div className="banner">
            <div id="carouselExampleInterval-1" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                <img src={banner1} className="banner-img" alt="Banner 1" />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <img src={banner1} className="banner-img" alt="Banner 1" />
                </div>
                <div className="carousel-item">
                <img src={banner1} className="banner-img" alt="Banner 1" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval-1" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval-1" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="banner">
            <div id="carouselExampleInterval-2" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                <img src={banner1} className="banner-img" alt="Banner 1" />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <img src={banner1} className="banner-img" alt="Banner 1" />
                </div>
                <div className="carousel-item">
                <img src={banner1} className="banner-img" alt="Banner 1" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval-2" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval-2" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="banner">
            <div id="carouselExampleInterval-3" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <img src={banner4} className="banner-img" alt="Banner 4" />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={banner5} className="banner-img" alt="Banner 5" />
                </div>
                <div className="carousel-item">
                  <img src={banner1} className="banner-img" alt="Banner 1" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval-3" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval-3" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="banner">
            <div id="carouselExampleInterval-1" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                <img src={banner1} className="banner-img" alt="Banner 1" />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <img src={banner1} className="banner-img" alt="Banner 1" />
                </div>
                <div className="carousel-item">
                <img src={banner1} className="banner-img" alt="Banner 1" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval-1" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval-1" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default VideoComponent;

