import React from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import './BookingPage.css';

// Sample movie data
const movies = {
  1: { id: 1, title: 'Avengers: Endgame' },
  // Add other movies...
};

const BookingPage = () => {
  const { id } = useParams();
  const movie = movies[id];

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="booking-page">
      <BookingForm movie={movie} />
    </div>
  );
};

export default BookingPage;