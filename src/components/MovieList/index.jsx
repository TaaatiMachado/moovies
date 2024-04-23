import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <div>
      <h2>Resultados da Pesquisa</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
