import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css'

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={movie.image} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>{movie.genre}</p>
      </Link>
    </div>
  );
};

export default MovieCard;