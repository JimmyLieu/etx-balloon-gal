import React from 'react';
import './LoadingScreen.css';
import logo from '../assets/ETXLogoTransparent.png'; 

const LoadingScreen = ({ isLoading }) => {
    console.log("Loading state:", isLoading); // Add this to debug
  
    return (
      <div className={`loading-screen ${!isLoading ? 'hidden' : ''}`}>
        <div className={`logo-container ${!isLoading ? 'zoom-out' : ''}`}>
          <img src={logo} alt="ETX Logo" className="loading-logo" />
        </div>
      </div>
    );
  };

export default LoadingScreen;