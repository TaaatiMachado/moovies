import React, { useEffect, useRef, useState } from 'react';
import { renderGenres, fetchMovieGenres } from '../../services/tmdb';

const MovieModal = ({ isOpen, onClose, movie }) => {
  const modalRef = useRef(null);
  const [genres, setGenres] = useState([]);

  const handleBackdropClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    const getMovieGenresData = async () => {
      try {
        const genresData = await fetchMovieGenres();
        setGenres(genresData);
      } catch (error) {
        console.error('Error fetching movie genres:', error);
      }
    };
    getMovieGenresData();
  }, []);

  const modalStyle = isOpen ? 'modal d-block' : 'modal d-none';

  if (!movie) {
    return null;
  }

  return (
    <div className={`modal-backdrop ${modalStyle}`} style={{ backdropFilter: 'blur(20px)', backgroundColor: 'rgba(0, 0, 0, 0.5)'}} onClick={handleBackdropClick}>
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content bg-dark text-white' ref={modalRef}>
          <div className='modal-body'>
            <h5 className="modal-title fs-2">{movie.title}</h5>
            <div className='d-flex justify-content-center align-center flex-wrap gap-0 mb-0 mt-3'>
              <p className='mx-2'><strong>Genre:</strong> {movie.genre_ids ? renderGenres(movie.genre_ids, genres) : 'Unknown'}</p>
              <p><strong>Release:</strong> {movie.release_date ? movie.release_date.split('-')[0] : 'Unknown'}</p>
            </div>
            <div className='d-flex align-baseline justify-content-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill my-1" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <p className='mx-2 my-1'>{movie.vote_average ? movie.vote_average.toFixed(1) : '?'}</p>
            </div>
            <p>{movie.overview}</p>
          </div>
          <button type="button" className="btn text-white bg-primary bg-gradient bg-opacity-75 rounded-top-0" aria-label="Close" onClick={onClose}>Close</button>

        </div>
      </div>
    </div>
  );
};

export default MovieModal;
