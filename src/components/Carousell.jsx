import React, { useState, useEffect } from 'react';
import hero1 from "../assets/hero2.png";
import hero2 from "../assets/hero3.png";
import hero3 from "../assets/hero4.png";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage % 3) + 1);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const getImagePath = () => {
    switch (currentImage) {
      case 1:
        return hero1;
      case 2:
        return hero2;
      case 3:
        return hero3;
      default:
        return hero1;
    }
  };

  return (
    <img
      src={getImagePath()}
      alt=""
      className="shadow-white w-full h-screen object-cover"
    />
  );
};

export default Gallery;
