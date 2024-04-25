import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchContext, SearchProvider, useSearch } from '../../contexts/SearchContext';
import MovieCard from '../../components/MovieCard';
import MovieModal from '../../components/MovieModal';
import notFound from '../../assets/no_movies.jpg'


const SearchPage = () => {
  const { searchResults, setSearchResults, performSearch } = useSearch(); 
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

  const handlePaginationClick = (pageNumber) => {
    performSearch(searchQuery, pageNumber); 
  };

  return (
    <>
      <div className={`w-100 d-block p-5 bg-black bg-gradient`}></div>
      <div className="container bg-dark py-5">
        <h3 className='text-white my-4 text-start fs-2'>Search results:</h3>
        <div className="row d-flex flex-wrap">
          {searchResults.length > 0 ? searchResults.map((movie, index) => (
            <div key={index} className="col-md-3 mb-3">
              <MovieCard movie={movie} onOpenModal={handleOpenModal} />
            </div>
          )) : <div className='d-flex justify-content-center align-center flex-column'>
            <p className='text-white my-4 text-start fs-4'>Nothing to show here... Try searching for another movie.</p>
                  <img src={notFound} className='w-100 m-auto' />
                  
               </div>}
        </div>
        

        <MovieModal movie={selectedMovie} onClose={handleCloseModal} isOpen={isModalOpen} />
      </div>
    </>
  );
};

export default SearchPage;
