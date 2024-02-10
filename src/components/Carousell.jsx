import { useState, useEffect } from 'react';
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero3.png";

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
      default:
        return hero1;
    }
  };

  return (
    <img
      src={getImagePath()}
      alt=""
      className="shadow-white w-full h-screen object-cover transition-opacity duration-1000 ease-in-out"
    />
  );
};

export default Gallery;
