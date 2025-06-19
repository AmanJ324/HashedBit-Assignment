import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesPage from './pages/MoviesPage';
import MovieDetails from './pages/MovieDetails';
import BookingPage from './pages/BookingPage';
import ConfirmationPage from './pages/ConfirmationPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/book/:id" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;