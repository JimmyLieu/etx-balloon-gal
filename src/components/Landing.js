import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Landing.css';
// Import your images
import heroImage from '../assets/samplePics/bio.jpg';


// Service data
const services = [
  {
    title: "Custom Installations",
    description: "Bespoke balloon designs delivered and installed by us",
    alt: "Custom balloon installation"
  },
  {
    title: "Helium Balloons",
    description: "Bouquets, centerpieces, and custom jumbo balloons",
    alt: "Helium balloon display"
  },
  {
    title: "Event Decorations",
    description: "Complete event decoration services",
    alt: "Event decoration setup"
  }
];

const Landing = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="landing-container">
      {/* Hero Section with Background Image */}
      <motion.section 
        className="hero"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-overlay"> {/* Add this for better text readability */}
          <motion.h1 
            className="hero-title"
            variants={fadeIn}
          >
            ETX Balloon Gal
          </motion.h1>
          <motion.h3 
            className="hero-subtitle"
            variants={fadeIn}
          >
            Custom balloon decor to make your event unforgettable
          </motion.h3>
          <motion.div
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact" className="cta-button">BOOK YOUR NEXT EVENT NOW</Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid with Images */}
      <motion.section 
        className="services-showcase"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            className="service-card"
            variants={scaleIn}
            whileHover={{ y: -10 }}
          >
            <div className="service-image-container">
              <img src={service.image} alt={service.alt} className="service-image" />
            </div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <Link to="/services" className="learn-more">learn more</Link>
          </motion.div>
        ))}
      </motion.section>

      {/* Portfolio Preview with Image */}
      <motion.section 
        className="portfolio-preview"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="portfolio-image-container">
         {/* <img src={portfolioPreview} alt="Portfolio preview" className="portfolio-image" /> */}
        </div>
        <h2>View Our Work</h2>
        <p>Explore our gallery of unforgettable designs that have transformed events into extraordinary celebrations</p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/gallery" className="view-portfolio">view our portfolio</Link>
        </motion.div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        className="testimonials"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          {[1, 2, 3].map((_, index) => (
            <motion.div 
              key={index}
              className="testimonial-card"
              variants={fadeIn}
            >
              <p className="quote">"Maria brought our vision to life perfectly! Her attention to detail made our event truly special."</p>
              <p className="client-name">- Sarah M.</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="final-cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <h2>Ready to Create Something Amazing?</h2>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/contact" className="cta-button">Let's Do This</Link>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Landing;
