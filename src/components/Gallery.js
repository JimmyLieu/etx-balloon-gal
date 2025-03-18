import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [images, setImages] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    'Birthday Parties',
    'Graduation',
    'Local Businesses',
    'Baby Showers',
    'Weddings',
    'Corporate Events'
  ];

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      // Using the list endpoint with API Key
      const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/resources/image`, {
        headers: {
          'Authorization': `Basic ${btoa(process.env.REACT_APP_CLOUDINARY_API_KEY + ':' + process.env.REACT_APP_CLOUDINARY_API_SECRET)}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }

      const data = await response.json();
      
      // Organize images by category
      const organizedImages = {};
      categories.forEach(category => {
        organizedImages[category] = [];
      });

      // Sort images into categories based on their folder path
      data.resources.forEach(resource => {
        const path = resource.folder || '';
        const category = categories.find(cat => 
          path.includes(cat.replace(' ', '_')) || 
          path.includes(cat.replace(' ', '%20')) || 
          path.includes(cat)
        );
        
        if (category && organizedImages[category]) {
          organizedImages[category].push({
            url: resource.secure_url,
            public_id: resource.public_id
          });
        }
      });

      setImages(organizedImages);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div className="loading">Loading gallery...</div>;
  }

  return (
    <div className="gallery-container">
      <h1>Our Gallery</h1>
      
      <div className="category-filter">
        <button 
          className={selectedCategory === 'all' ? 'active' : ''} 
          onClick={() => setSelectedCategory('all')}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {selectedCategory === 'all' ? (
          Object.entries(images).map(([category, categoryImages]) => (
            categoryImages.length > 0 && (
              <div key={category} className="category-section">
                <h2>{category}</h2>
                <div className="images-grid">
                  {categoryImages.map((image) => (
                    <div key={image.public_id} className="image-card">
                      <img src={image.url} alt={`Gallery item from ${category}`} />
                    </div>
                  ))}
                </div>
              </div>
            )
          ))
        ) : (
          <div className="images-grid">
            {images[selectedCategory]?.map((image) => (
              <div key={image.public_id} className="image-card">
                <img src={image.url} alt={`Gallery item from ${selectedCategory}`} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;