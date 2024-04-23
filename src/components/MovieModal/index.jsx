import React, { useRef } from 'react';

const MovieModal = ({ isOpen, onClose, movie }) => {
  const modalRef = useRef(null);

  const handleBackdropClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  const modalStyle = {
    display: isOpen ? 'block' : 'none',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 999,
  };

  const contentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '80%',
    maxHeight: '80%',
    overflowY: 'auto',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  };

  // Verifica se há um filme antes de acessar suas propriedades
  if (!movie) {
    return null; // Retorna null se não houver filme
  }

  return (
    <div>
      {isOpen && (
        <div style={modalStyle} onClick={handleBackdropClick}>
          <div ref={modalRef} style={contentStyle}>
            <h5 className="modal-title">{movie.title}</h5>
            <button type="button" className="close" aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="modal-body">
              <p><strong>Gênero:</strong> {movie.genre}</p>
              <p><strong>Ano de Lançamento:</strong> {movie.release_year}</p>
              <p><strong>Avaliação:</strong> {movie.vote_average}/10</p>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieModal;
