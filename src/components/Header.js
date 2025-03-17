import React from 'react';      
import './Header.css';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa'; // You'll need to install react-icons

const Header = () => {
  return (
    <div className="top-header">
      <div className="header-left">
        <a href="tel:+1234567890" className="header-item">
          <FaPhone className="header-icon" />
          <span>+1 (903) 724-0084</span>
        </a>
        <a href="mailto:info@example.com" className="header-item">
          <FaEnvelope className="header-icon" />
          <span>info@example.com</span>
        </a>
      </div>
      <div className="header-right">
        <a href="https://www.facebook.com/asuzenas.decor/" target="_blank" rel="noopener noreferrer" className="header-social">
          <FaFacebook className="header-icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="header-social">
          <FaInstagram className="header-icon" />
        </a>
      </div>
    </div>
  );
};

export default Header;