import React from 'react';
import './Widgets.css';

function Widgets() {
    return (
            <footer className="footer">
              <div className="footer-container">
                <div className="footer-section">
                  <h2>PLUM BUILDERS</h2>
                  <p>The Modern Barn®</p>
                  <p>Call: 555-555-9855</p>
                  <p>Email: <a href="mailto:info@plumbuilders.com">info@plumbuilders.com</a></p>
                  <p>Main Slab Showroom:</p>
                  <p>106 Purdy Ave,</p>
                  <p>Port Chester, NY, 10573</p>
                  <p>Factory Location:</p>
                  <p>28 Nursery Lane,</p>
                  <p>Rye, NY, 10580</p>
                </div>
                <div className="footer-section">
                  <h2>DESIGN ASSISTANCE</h2>
                  <ul>
                    <li><a href="#">Measurements</a></li>
                    <li><a href="#">Free Design Guide</a></li>
                    <li><a href="#">Design Consultation</a></li>
                    <li><a href="#">Visualizer</a></li>
                  </ul>
                </div>
                <div className="footer-section">
                  <h2>ABOUT US</h2>
                  <ul>
                    <li><a href="#">Who We Are</a></li>
                    <li><a href="#">What We Do</a></li>
                    <li><a href="#">How We Do It</a></li>
                    <li><a href="#">Showroom</a></li>
                    <li><a href="#">Trade Professionals</a></li>
                  </ul>
                </div>
                <div className="footer-section">
                  <h2>COMPANY INFO</h2>
                  <ul>
                    <li><a href="#">Financing</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Made in USA</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Resources</a></li>
                  </ul>
                </div>
              </div>
              <div className="footer-bottom">
                <p>&copy; 2023 Plum Builders. All Rights Reserved. Powered by XYZ</p>
                <p>
                  <a href="#">Privacy Policy</a> | <a href="#">Terms and Conditions</a>
                </p>
                <p>
                  <a href="#">Facebook</a> | <a href="#">Instagram</a>
                </p>
              </div>
            </footer>
    );
}

export default Widgets;
