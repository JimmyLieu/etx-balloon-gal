import React from 'react';
import './Gallery.css';

const Gallery = () => {
  // Import all images from the assets folder
  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context('../assets/samplePics', true, /\.(png|jpe?g|svg)$/));   

  const galleryData = images.map((image, index) => ({
    id: index + 1,
    image: image
  }));

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {galleryData.map(item => (
          <div key={item.id} className="gallery-item">
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;