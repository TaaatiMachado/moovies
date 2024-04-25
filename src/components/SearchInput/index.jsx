import { useState } from 'react';
import { searchMovies } from '../../services/tmdb.js';
import styles from './input.module.css'


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
      setQuery('');

    }
  };

  return (
    <form onSubmit={handleSubmit} style={{maxWidth: 350 }}className='p-2 w-100 w-sm-25 d-flex align-center justify-content-center justify-content-lg-end position-relative'>
      <input className='p-2 w-100 rounded-5 border-0'
        type="text"
        placeholder="Search here..."
        value={query}
        onChange={handleChange}
      />
      <button type="submit" className={`p-2 border-0 rounded-5 ${styles.btn} btn bg-primary bg-gradient bg-opacity-75 position-absolute`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </button>
    </form>
  );
};

export default SearchInput;