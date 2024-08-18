import React, { useState, useEffect } from "react";
import "./Slider.css"; 

const images = [
  "/images/68287.webp",
  "/images/Banner-home-decor-escandinavo4.webp",
  "images/renovar-los-muebles-sala.webp", 
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <img src={images[currentIndex]} alt="slider image" className="slider-img" />
    </div>
  );
};

export default Slider;
