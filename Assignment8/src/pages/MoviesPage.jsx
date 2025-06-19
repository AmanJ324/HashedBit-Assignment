import React from 'react';
import MovieCard from '../components/MovieCard';
import './MoviesPage.css';

// Sample movie data
const movies = [
  { id: 1, title: 'Avengers: Endgame', genre: 'Action', image: 'https://imgs.search.brave.com/sQkcQ_UDKrXg1Uz_ejJDv0I2WIYbCTK4mgV06DBONKY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMC8wZC9B/dmVuZ2Vyc19FbmRn/YW1lX3Bvc3Rlci5q/cGc' },
  { id: 2, title: 'The Dark Knight', genre: 'Action', image: 'https://imgs.search.brave.com/hHMCjDq0nUWuULcYeQSIRT5pJXpf0O8yVZ8BS-o0LRU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMS8xYy9U/aGVfRGFya19Lbmln/aHRfJTI4MjAwOF9m/aWxtJTI5LmpwZw' },
  { id: 3, title: 'Inception', genre: 'Sci-Fi', image: 'https://imgs.search.brave.com/-q-NgHdU7XAVN2yHzyWd5u14Pl68q4x1KPy0arz2U48/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/cHYtdGFyZ2V0LWlt/YWdlcy9lODI2ZWJi/Y2M2OTJiNGQxOTA1/OWQyNDEyNWNmMjM2/OTkwNjdhYjYyMWM5/Nzk2MTJmZDBjYTEx/YWI0MmE2NWNiLmpw/Zw' },
  { id: 4, title: 'Interstellar', genre: 'Sci-Fi', image: 'https://imgs.search.brave.com/enYwyN5RxByBLiTgfx1g7fmuibg9GE3NOAC55JQ7pDw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzM2MzYyNjYyL3Iv/aWwvOTEwMDk2LzUz/NTE4MDk3MDEvaWxf/MzAweDMwMC41MzUx/ODA5NzAxX282ZW0u/anBn' },
  { id: 5, title: 'The Shawshank Redemption', genre: 'Drama', image: 'https://imgs.search.brave.com/WXAbwjHWC5juHTQRhHOEWYNUOqWuuE1C5W0YunOXwJ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1UQTFNakUw/TnprNE1EbGVRVEpl/UVdwd1oxNUJiV1U0/TURBME5qSXhNakF4/Ll9WMV9RTDc1X1VY/ODIwXy5qcGc' },
  { id: 6, title: 'Pulp Fiction', genre: 'Crime', image: 'https://imgs.search.brave.com/5T8gqwxDjsePscbP8ttVyXT-YBRN4UiJoX8PgjthTWU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcHVs/cC1maWN0aW9uLWp1/bGVzLXdpbm5maWVs/ZC1vaWwtcGFpbnRp/bmctODZ4eWJsam95/ZHVtZWV5ci5qcGc' },
  { id: 7, title: 'The Godfather', genre: 'Crime', image: 'https://imgs.search.brave.com/2r5UunKLiBq0ntbdR1Jk_b7_6o8QovBW37__cjle5QU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbWFy/bG9uLWJyYW5kby10/aGUtZ29kZmF0aGVy/LXBvc3Rlci12Mjg4/bjJoMnQzdTg1YXBj/LmpwZw' },
  { id: 8, title: 'Fight Club', genre: 'Drama', image: 'https://imgs.search.brave.com/nPMcovLpkqvnQIojV3ppz2KrQr9nYE-bPHtiH9wXmcs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/ZmlnaHQtY2x1Yi0x/OTk5LXYwLThwYW5l/c3h3czl1ZTEuanBl/Zz93aWR0aD0zMDI0/JmZvcm1hdD1wanBn/JmF1dG89d2VicCZz/PTJlMzkxMGYxN2E2/NGE4MWQ4MmQyOWYz/ZThlZDk1ZmE1NjZk/MGZkZmU' },

];

const MoviesPage = () => {
  return (
    <div className="movies-page">
      <h1>Now Showing</h1>
      <div className="movies-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;