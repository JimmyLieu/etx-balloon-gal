import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">ETX Balloon Gal</h1>
        <p className="hero__subtitle">
          Creating Magical Moments with Custom Balloon Decorations
        </p>
        <button className="hero__cta-button">Get Started</button>
      </div>
      <div className="hero__overlay"></div>
    </section>
  );
};

export default Hero;