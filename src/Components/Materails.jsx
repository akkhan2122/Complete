import React, { useState, useRef, useEffect } from 'react';
import './output.css'; // Import your custom CSS

const Materials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const carouselTrackRef = useRef(null);

  const slides = [
    {
      leftImage: "https://img.freepik.com/premium-photo/white-marble-texture-background-high-resolution_38648-342.jpg",
      rightImage: "https://themodernbarn.build/wp-content/uploads/2018/05/The-Modern-Barn-Kitchen.jpg",
      toggleText: "QUARTZ - Durable and elegant, perfect for modern kitchens. Durable and elegant, perfect for modern kitchens"
    },
    {
      leftImage: "https://img.freepik.com/premium-photo/white-marble-texture-background-high-resolution_38648-342.jpg",
      rightImage: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/c8112b64428489.5ad1f5cede289.jpg",
      toggleText: "GRANITE - Known for its strength and natural beauty. Known for its strength and natural beauty"
    },
    {
      leftImage: "https://img.freepik.com/premium-photo/white-marble-texture-background-high-resolution_38648-342.jpg",
      rightImage: "https://i.pinimg.com/originals/fd/6b/fd/fd6bfdebb82e8e3fe1b08ea4ecd61f15.jpg",
      toggleText: "MARBLE - A timeless material with classic elegance. A timeless material with classic elegance."
    },
    {
      leftImage: "https://img.freepik.com/premium-photo/white-marble-texture-background-high-resolution_38648-342.jpg",
      rightImage: "https://themodernbarn.build/wp-content/uploads/2018/05/Dominy-Indoor_outdoor-space.jpg",
      toggleText: "ONYX - A luxurious stone that adds a unique touch. A luxurious stone that adds a unique touch"
    },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigateCarousel = (direction) => {
    const newIndex = (currentIndex + direction + slides.length) % slides.length;
    setCurrentIndex(newIndex);
    setShowText(false); // Reset the toggle text when changing slides
    updateSlidePosition(newIndex);
  };

  const updateSlidePosition = (index) => {
    const carouselWidth = carouselTrackRef.current.offsetWidth;
    const newPosition = -1 * index * carouselWidth;
    carouselTrackRef.current.style.transform = `translateX(${newPosition}px)`;
  };

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <div>
      <div className="head">
        <h1>SHOP YOUR COUNTERTOP BY MATERIAL AND FUNCTION</h1>
        <br />
        <p>Find the perfect stone and countertop for your home.</p>
      </div>

      <div role="region" aria-roledescription="carousel" aria-label="Photo Carousel" className="carousel-container">
        <div className={`carousel-track ${isMobile ? 'mobile' : ''}`} ref={carouselTrackRef}>
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-slide ${isMobile ? 'mobile-slide' : ''}`}>
              <div className="left-image">
                <img src={slide.leftImage} alt="Left Slide" />
                {showText && <div className="toggle-text">{slide.toggleText}</div>}
                <button className="toggle-arrow" onClick={toggleText}>→</button>
              </div>
              <div className="right-image">
                <img src={slide.rightImage} alt="Right Slide" />
                <button className="shop-material">SHOP MATERIAL</button>
              </div>
            </div>
          ))}
        </div>
        <button 
          className="carousel-control prev"
          onClick={() => navigateCarousel(-1)}>
          ◄
        </button>
        <button 
          className="carousel-control next"
          onClick={() => navigateCarousel(1)}>
          ►
        </button>
      </div>
    </div>
  );
};

export default Materials;
