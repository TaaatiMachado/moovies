import style from './card.module.css'
import notFound from '../../assets/not_found.jpg'

const MovieCard = ({ movie, onOpenModal }) => {
  return (
    <div className="card w-100 border-0 rounded-25">
      <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : notFound} className={`card-img-top ${style.poster} object-fit-cover`} alt={movie.title} />
      <div className="card-body bg-dark-subtle rounded-25">
        <p className="card-title w-100 m-auto mb-3 text-truncate mw-100">{movie.title}</p>
        <button onClick={() => onOpenModal(movie)} className="btn btn-primary w-100 mb-0 bg-primary bg-gradient bg-opacity-75">More</button>
      </div>
    </div>
  );
};

export default MovieCard;
