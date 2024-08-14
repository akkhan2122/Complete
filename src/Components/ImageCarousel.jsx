import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

const ImageCarousel = () => {
  const images = [
    "https://housing-images.n7net.in/01c16c28/afc234721959804516152d1bd0db5c4f/v0/large/1_bhk_villa-for-rent-phusgarh_part-Karnal-bathroom.jpg",
    "https://yashenterprise.biz/wp-content/uploads/2021/06/sanitory.jpg",
    "https://st.hzcdn.com/fimgs/b951c22603c88695_2147-w400-h400-b0-p0--.jpg",
    "https://st.hzcdn.com/fimgs/pictures/bathrooms/a-waterside-inspired-cottage-in-the-trails-ventura-homes-img~19b1471706311f0f_4434-1-917c2f0-w400-h400-b0-p0.jpg",
    "https://kostynickplumbing.com/wp-content/uploads/2022/04/kosty-pex-tiles.jpg",
    "https://images.pexels.com/photos/6782343/pexels-photo-6782343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://www.home-designing.com/wp-content/uploads/2019/06/white-marble-bathroom.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imagesToShow = windowWidth <= 768 ? 1 : 4; // Show 1 image on mobile, 4 on larger screens

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - imagesToShow + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length - imagesToShow + 1) % (images.length - imagesToShow + 1)
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevImage}>
        &#10094;
      </button>
      <div className="carousel-images" style={{ transform: `translateX(-${(currentIndex / imagesToShow) * 100}%)` }}>
        {images.map((img, index) => (
          <img key={index} src={img} alt={`carousel ${index}`} />
        ))}
      </div>
      <button className="carousel-button next" onClick={nextImage}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageCarousel;
