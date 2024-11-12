import React from 'react';
import './Footer.css'; 
import img from '../assets/images_1/website_logo.png';

const Footer = () => {
  return (
    <div id="contact" className="footer">
      <div className="main_footer">
        {/* Logo Section */}
        <div className="web_logo_footer">
          <img src = {img} alt="logo" />
          <h3>The Healthy Bowl!!</h3>
          <p>Thank you for visiting The Healthy Bowl! Your journey to a healthier you starts here.</p>
        </div>

        {/* Additional Details Section */}
        <div className="additional_details">
          <div className="download">
            <h3>DOWNLOAD</h3>
            <h4>Windows App</h4>
            <h4>Mac App</h4>
            <h4>Desktop App</h4>
          </div>
          <div className="services">
            <h3>SERVICES</h3>
            <h4>Catering</h4>
            <h4>Delivery</h4>
          </div>
        </div>

        {/* More Details Section */}
        <div className="additional_details1">
          <div className="products">
            <h3>PRODUCTS</h3>
            <h4>Web</h4>
            <h4>App</h4>
            <h4>Software</h4>
            <h4>E-commerce</h4>
          </div>
          <div className="company">
            <h3>COMPANY</h3>
            <h4>Terms & Conditions</h4>
            <h4>Privacy Policy</h4>
          </div>
        </div>

        {/* Social Connect Section */}
        <div className="social_connect">
          <div className="social_icons">
            <h3>GET IN TOUCH</h3>
            <div className="icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>

          {/* Subscription Section */}
          <div className="subscription">
            <h3>SUBSCRIBE</h3>
            <input type="email" placeholder="Enter Email Address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <span className="copyright">
        &copy; 2024 The Healthy Bowl. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;

