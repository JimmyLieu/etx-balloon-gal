import React from 'react';
import './About.css';
import mariaImage from '../assets/samplePics/bio.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Maria & ETX Balloon Gal</h1>
        
        <div className="founder-section">
          <div className="founder-image">
          <img 
              src={mariaImage} 
              alt="Maria Rodriguez - ETX Balloon Gal Founder"
              className="founder-img"
            />      
          </div>
          
          <div className="founder-story">
            <h2>Our Story</h2>
            <p>
              As a proud Latina, wife, and mother of five, Maria Rodriguez brings warmth, creativity, and dedication 
              to every project she undertakes. Her journey with ETX Balloon Gal, LLC began in January 2020, 
              when her passion for decorating events for friends and family blossomed into something bigger 
              than she ever imagined.
            </p>
            <p>
              What started as a creative outlet quickly transformed into a thriving business, serving the 
              Palestine, TX community and surrounding areas in East Texas. Maria's natural talent for design 
              and her eye for color combinations have made ETX Balloon Gal the go-to choice for 
              unforgettable balloon arrangements.
            </p>
          </div>
        </div>

        <div className="services-section">
          <h2>Our Expertise</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Organic Balloon Artistry</h3>
              <p>Specializing in creating flowing, natural-looking balloon installations that transform spaces</p>
            </div>
            <div className="service-card">
              <h3>Custom Designs</h3>
              <p>Bringing your vision to life with personalized balloon arrangements</p>
            </div>
            <div className="service-card">
              <h3>Creative Freedom</h3>
              <p>Trust our artistic expertise to create stunning displays that exceed expectations</p>
            </div>
            <div className="service-card">
              <h3>Mobile Service</h3>
              <p>Serving Palestine, TX and surrounding East Texas areas</p>
            </div>
          </div>
        </div>

        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>
            At ETX Balloon Gal, we believe every celebration deserves to be extraordinary. Whether we're 
            following your creative vision or given the freedom to design, we pour our hearts into creating 
            magical balloon arrangements that make your special moments unforgettable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 