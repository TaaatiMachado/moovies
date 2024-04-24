import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieCard from '../../components/MovieCard'; 
import MovieModal from '../../components/MovieModal'; 

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const location = useLocation();

  useEffect(() => {
    const { state } = location;
    if (state && state.movies) {
      setSearchResults(state.movies);
    }
  }, [location]);

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={`w-100 d-block p-5 bg-black bg-gradient`}></div>
      <div className="container bg-dark p-3">
        <h3 className='text-white my-4 text-start'>Search results</h3>
        <div className="row d-flex flex-wrap">
          {searchResults.map((movie, index) => (
            <div key={index} className="col-md-3 mb-3">
              <MovieCard movie={movie} onOpenModal={handleOpenModal} />
            </div>
          ))}
        </div>

        <MovieModal movie={selectedMovie} onClose={handleCloseModal} isOpen={isModalOpen} />
      </div>
    </>
  );
};

export default SearchPage;
