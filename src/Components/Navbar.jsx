import React, { useState } from 'react';
import './App.css';
import New from "../Images/logo.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img className='logo' src={New} alt="Logo" />
        </div>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#">Request a Quote</a>
          <a href="#">Visit Our Showroom</a>
          <div className="dropdown">
            <a href="#">Countertops ^</a>
          </div>
          <div className="dropdown">
            <a href="#">Architectural ^</a>
            <div className="dropdown-menu">
              <a href="#">Best Seller</a>
              <a href="#">Quartz</a>
              <a href="#">Natural Stone</a>
              <a href="#">Live Inventory</a>
            </div>
          </div>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={toggleMenu}>&times;</div>
        <a href="#">Request a Quote</a>
        <a href="#">Visit Our Showroom</a>
        <div className="dropdown">
          <a href="#">Countertops ^</a>
        </div>
        <div className="dropdown">
          <a href="#">Architectural ^</a>
          <div className="dropdown-menu">
            <a href="#">Best Seller</a>
            <a href="#">Quartz</a>
            <a href="#">Natural Stone</a>
            <a href="#">Live Inventory</a>
          </div>
        </div>
      </div>

      <div className="hero-section">
        <div className="hero-content">
          <h1>ENJOY EVERYDAY LUXURY</h1>
          <p>It's never been easier to design and achieve your ideal outcome.</p>
          <button>Request a Quote</button>
        </div>
      </div>
      <div className="heading">
        <h1>START YOUR JOURNEY</h1>
        <br />
        <p>What Type Of Project Do you have?</p>
      </div>
    </div>
  );
}

export default App;
