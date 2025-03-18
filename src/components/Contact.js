import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    location: '',
    guestCount: '',
    budget: '',
    services: [],
    additionalInfo: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' 
        ? checked 
          ? [...prevState.services, value]
          : prevState.services.filter(service => service !== value)
        : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // You'll get this from EmailJS
        'YOUR_TEMPLATE_ID', // You'll get this from EmailJS
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          event_date: formData.eventDate,
          event_type: formData.eventType,
          location: formData.location,
          budget: formData.budget,
          services: formData.services.join(', '),
          additional_info: formData.additionalInfo
        },
        'YOUR_PUBLIC_KEY' // You'll get this from EmailJS
      );

      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        eventType: '',
        location: '',
        guestCount: '',
        budget: '',
        services: [],
        additionalInfo: ''
      });

    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again.'
      });
    }
  };

  // Add this near your submit button
  const renderSubmitButton = () => {
    if (status.submitted) {
      return <div className="success-message">Thank you! We'll be in touch soon.</div>;
    }
    return (
      <button 
        type="submit" 
        className="submit-button"
        disabled={status.submitting}
      >
        {status.submitting ? 'Sending...' : 'Submit Inquiry'}
      </button>
    );
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p>Let's make your event unforgettable!</p>
        
        <div className="contact-details">
          <div className="contact-item">
            <h3>Location</h3>
            <p>Palestine, TX </p>
          </div>
          <div className="contact-item">
            <h3>Serving East Texas & Surrounding Areas</h3>
            
          </div>
          
          <div className="contact-item">
            <h3>Email</h3>
            <p>etxballoongal@gmail.com</p>
          </div>
          
          <div className="contact-item">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://instagram.com/etxballoongal" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://facebook.com/etxballoongal" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
        </div>
      </div>

      <div className="inquiry-section">
        <h2>Event Inquiry</h2>
        <form onSubmit={handleSubmit} className="inquiry-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="eventDate">Event Date *</label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="eventType">Event Type *</label>
            <select
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
            >
              <option value="">Select Event Type</option>
              <option value="birthday">Birthday Party</option>
              <option value="wedding">Wedding</option>
              <option value="corporate">Corporate Event</option>
              <option value="babyShower">Baby Shower</option>
              <option value="graduation">Graduation</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="location">Event Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Venue or Address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="budget">Budget Range</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="">Select Budget Range</option>
              <option value="0-250">$0 - $250</option>
              <option value="251-500">$251 - $500</option>
              <option value="501-1000">$501 - $1000</option>
              <option value="1001+">$1001+</option>
            </select>
          </div>

          <div className="form-group">
            <label>Services Needed</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="balloonGarland"
                  onChange={handleChange}
                />
                Balloon Garland
              </label>
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="balloonArch"
                  onChange={handleChange}
                />
                Balloon Arch
              </label>
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="customInstallation"
                  onChange={handleChange}
                />
                Custom Installation
              </label>
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="delivery"
                  onChange={handleChange}
                />
                Delivery Only
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="additionalInfo">Additional Information</label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us more about your vision for the event..."
            />
          </div>

          {renderSubmitButton()}
        </form>
      </div>
    </div>
  );
};

export default Contact;