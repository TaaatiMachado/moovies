import { useState } from 'react';
import { searchMovies } from '../../services/tmdb.js';


const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (query.trim() !== '') {
      const movies = await searchMovies(query);
      onSearch(movies);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Pesquisar filmes..."
        value={query}
        onChange={handleChange}
      />
      <button type="submit">Pesquisar</button>
    </form>
  );
};

export default SearchInput;