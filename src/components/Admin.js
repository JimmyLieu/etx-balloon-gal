import React, { useState, useEffect } from 'react';

import './Admin.css';
// Add this near the top of your component
console.log('Cloud name:', process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
console.log('Upload preset:', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);
const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [uploadData, setUploadData] = useState({
    category: '',
    images: []
  });
  const [uploadStatus, setUploadStatus] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState('');
  const [allImages, setAllImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [uploadError, setUploadError] = useState(null);

  const categories = [
    'Birthday Parties',
    'Graduation',
    'Local Businesses',
    'Baby Showers',
    'Weddings',
    'Corporate Events'
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.username === process.env.REACT_APP_ADMIN_USERNAME && 
        loginData.password === process.env.REACT_APP_ADMIN_PASSWORD) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleFileSelect = (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      setUploadError('No file selected');
      return;
    }

    // Clear any previous errors
    setUploadError(null);
    
    // Start upload
    handleUpload(file);
  };

  const handleUpload = async (file) => {
    if (!process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || !process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET) {
      setUploadError('Missing Cloudinary configuration');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);

      const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/upload`, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error?.message || 'Upload failed');
      }

      // Add new image to state
      setGalleryImages(prev => [...prev, {
        url: data.secure_url,
        public_id: data.public_id,
        created_at: new Date().toISOString()
      }]);

    } catch (error) {
      console.error('Upload error:', error);
      setUploadError(error.message);
    }
  };

  const fetchAllImages = async () => {
    setIsLoading(true);
    try {
      // Get the list of images from your upload success handler
      // This assumes you're storing URLs after successful uploads
      const imageUrls = JSON.parse(localStorage.getItem('uploadedImages') || '[]');
      setAllImages(imageUrls);
    } catch (error) {
      console.error('Error fetching images:', error);
      alert('Failed to load images');
    } finally {
      setIsLoading(false);
    }
  };

  // Add this to your existing handleUpload success callback
  const addNewImage = (url, publicId) => {
    setAllImages(prev => [...prev, {
      url: url,
      public_id: publicId,
      created_at: new Date().toISOString()
    }]);
  };

  const handleDelete = async (publicId) => {
    if (!window.confirm('Are you sure you want to delete this image?')) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append('public_id', publicId);
      formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);

      await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/destroy`, {
        method: 'POST',
        body: formData
      });

      // Remove from state
      setAllImages(prev => prev.filter(img => img.public_id !== publicId));
      alert('Image deleted successfully');
    } catch (error) {
      console.error('Error deleting image:', error);
      alert('Failed to delete image');
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchAllImages();
    }
  }, [isLoggedIn]);

  // Fetch existing images when component mounts
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/resources/image`, {
        headers: {
          'Authorization': `Basic ${btoa(process.env.REACT_APP_CLOUDINARY_API_KEY + ':' + process.env.REACT_APP_CLOUDINARY_API_SECRET)}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }

      const data = await response.json();
      const images = data.resources.map(resource => ({
        url: resource.secure_url,
        public_id: resource.public_id,
        created_at: resource.created_at
      }));

      setGalleryImages(images);
    } catch (error) {
      console.error('Error fetching images:', error);
      setUploadError('Failed to load existing images');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="admin-login">
        <h1>Admin Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={loginData.username}
              onChange={(e) => setLoginData({...loginData, username: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={loginData.password}
              onChange={(e) => setLoginData({...loginData, password: e.target.value})}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      
      <section className="upload-section">
        <h2>Upload Images</h2>
        <div className="upload-section">
          <input 
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="file-input"
          />
          {uploadError && (
            <div className="error-message">
              Error: {uploadError}
            </div>
          )}
        </div>
      </section>

      {isLoading ? (
        <div className="loading">Loading images...</div>
      ) : (
        <>
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div key={image.public_id} className="image-container">
                <img 
                  src={image.url} 
                  alt={image.public_id} 
                  className="gallery-image" 
                />
                <div className="image-overlay">
                  <button 
                    onClick={() => handleDelete(image.public_id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                  <div className="image-info">
                    <span>Uploaded: {new Date(image.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {galleryImages.length === 0 && !isLoading && (
            <div className="no-images">No images found</div>
          )}
        </>
      )}
      
      <button 
        className="logout-button"
        onClick={() => {
          // Replace with actual logout logic
          setIsLoggedIn(false);
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Admin;