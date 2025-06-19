import React from 'react';
import './ConfirmationPage.css';

const ConfirmationPage = () => {
  const bookingDetails = JSON.parse(localStorage.getItem('bookingDetails'));

  if (!bookingDetails) {
    return <div>No booking found</div>;
  }

  return (
    <div className="confirmation-page">
      <h1>Booking Confirmed!</h1>
      <div className="confirmation-details">
        <p><strong>Booking ID:</strong> {bookingDetails.bookingId}</p>
        <p><strong>Movie:</strong> {bookingDetails.movieTitle}</p>
        <p><strong>Name:</strong> {bookingDetails.name}</p>
        <p><strong>Email:</strong> {bookingDetails.email}</p>
        <p><strong>Mobile:</strong> {bookingDetails.mobile}</p>
      </div>
      <p className="thank-you">Thank you for your booking!</p>
    </div>
  );
};

export default ConfirmationPage;