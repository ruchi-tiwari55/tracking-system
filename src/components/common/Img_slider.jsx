import React, { useState } from 'react';
import styles from '../../styles/imgSlider.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function ImageSlider() {
  const images = [
    '/assets/about/dw6.png',
    '/assets/about/hiring_2.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.image_slider}>
      <button onClick={prevSlide}>
        <ArrowBackIosIcon />
      </button>
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
      />
      <button onClick={nextSlide}>
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
}

export default ImageSlider;
