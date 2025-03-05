import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  // Import all images from the assets folder
  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context('../assets/samplePics', true, /\.(png|jpe?g|svg)$/));   

  const galleryData = images.map((image, index) => ({
    id: index + 1,
    image: image
  }));

  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {galleryData.map(item => (
          <div key={item.id} className="gallery-item">
            <div className="image-skeleton"></div>
            <img 
              src={item.image} 
              alt="" 
              loading="lazy"
              onLoad={handleImageLoad}
              style={{ opacity: imagesLoaded ? 1 : 0 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;