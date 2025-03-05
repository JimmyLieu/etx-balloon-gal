import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/ETXLogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <a href="#home" className="navbar__link">Home</a>
        <a href="#about" className="navbar__link">About</a>
        <a href="#services" className="navbar__link">Services</a>
      </div>

      <div className="navbar__brand">
        <a href="/">
        <img src = {logo} alt = "ETX Logo" className="navbar__logo" />
        </a>
      </div>

      <div className="navbar__right">
        <a href="#pricing" className="navbar__link">Pricing</a>
        <a href="/gallery" className="navbar__link">Gallery</a>
        <a href="#contact" className="navbar__link">Contact</a>
      </div>

      <button className="navbar__toggle" onClick={toggleMenu}>
        <span className="navbar__toggle-icon"></span>
      </button>

      <div className={`navbar__mobile-menu ${isOpen ? 'active' : ''}`}>
        <a href="#home" className="navbar__link">Home</a>
        <a href="#about" className="navbar__link">About</a>
        <a href="#services" className="navbar__link">Services</a>
        <a href="#pricing" className="navbar__link">Pricing</a>
        <a href="#gallery" className="navbar__link">Gallery</a>
        <a href="#contact" className="navbar__link">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;