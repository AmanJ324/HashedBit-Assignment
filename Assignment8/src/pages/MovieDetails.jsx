import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './MovieDetails.css';

// Sample movie details (in a real app, you'd fetch this based on ID)
const movieDetails = {
  1: {
    title: 'Avengers: Endgame',
    genre: 'Action',
    image: 'https://imgs.search.brave.com/sQkcQ_UDKrXg1Uz_ejJDv0I2WIYbCTK4mgV06DBONKY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMC8wZC9B/dmVuZ2Vyc19FbmRn/YW1lX3Bvc3Rlci5q/cGc',
    description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.',
    duration: '181 min',
    rating: '8.4/10'
  },
  // Add details for other movies...
};

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movieDetails[id];

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-details">
      <div className="movie-poster">
        <img src={movie.image} alt={movie.title} />
      </div>
      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Duration:</strong> {movie.duration}</p>
        <p><strong>Rating:</strong> {movie.rating}</p>
        <p>{movie.description}</p>
        <Link to={`/book/${id}`} className="book-button">Book Tickets</Link>
      </div>
    </div>
  );
};

export default MovieDetails;