import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './BookingForm.css'

const BookingForm = ({ movie }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });
  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate random booking ID
    const bookingId = 'BK' + Math.floor(Math.random() * 1000000);
    // Save to localStorage
    localStorage.setItem('bookingDetails', JSON.stringify({
      ...formData,
      bookingId,
      movieId: id,
      movieTitle: movie.title
    }));
    navigate('/confirmation');
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2>Book Tickets for {movie.title}</h2>
      <div className="form-group">
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="form-group">
        <label>Mobile:</label>
        <input 
          type="tel" 
          name="mobile" 
          value={formData.mobile} 
          onChange={handleChange} 
          required 
        />
      </div>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;