import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/ETXLogo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link to="/" className="navbar__link">Home</Link>
        <Link to="/about" className="navbar__link">About</Link>
        <Link to="/services" className="navbar__link">Services</Link>
      </div>

      <div className="navbar__brand">
        <Link to="/">
          <img src={logo} alt="ETX Logo" className="navbar__logo" />
        </Link>
      </div>

      <div className="navbar__right">
        <Link to="/pricing" className="navbar__link">Pricing</Link>
        <Link to="/gallery" className="navbar__link">Gallery</Link>
        <Link to="/contact" className="navbar__link">Contact</Link>
      </div>

      <button className="navbar__toggle" onClick={toggleMenu}>
        <span className="navbar__toggle-icon"></span>
      </button>

      <div className={`navbar__mobile-menu ${isOpen ? 'active' : ''}`}>
        <Link to="/" className="navbar__link">Home</Link>
        <Link to="/about" className="navbar__link">About</Link>
        <Link to="/services" className="navbar__link">Services</Link>
        <Link to="/pricing" className="navbar__link">Pricing</Link>
        <Link to="/gallery" className="navbar__link">Gallery</Link>
        <Link to="/contact" className="navbar__link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;