import React from 'react';

const MovieCard = ({ movie, onButtonClick }) => {
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <button onClick={() => onButtonClick(movie)}>Ver Detalhes</button>
      </div>
    </div>
  );
};

export default MovieCard;
