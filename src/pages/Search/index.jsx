import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  
  useEffect(() => {
    const { state } = location;
    if (state && state.movies) {
      setSearchResults(state.movies);
    }
  }, [location]);

  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {searchResults.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
