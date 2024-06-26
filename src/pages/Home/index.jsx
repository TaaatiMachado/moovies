import React, { useState, useEffect } from 'react';
import { fetchMovieGenres, fetchTrendingMovies, renderGenres } from '../../services/tmdb';
import styles from './home.module.css'

const HomePage = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const getTrendingMovies = async () => {
            try {
                const movies = await fetchTrendingMovies();
                setTrendingMovies(movies);
            } catch (error) {
                console.error('Error fetching trending movies:', error);
            }
        };

        const getMovieGenresData = async () => {
            try {
                const genresData = await fetchMovieGenres();
                setGenres(genresData);
            } catch (error) {
                console.error('Error fetching movie genres:', error);
            }
        };

        getTrendingMovies();
        getMovieGenresData();

    }, []);

    const handleThumbnailClick = (index) => {
        setCurrentSlide(index);
    };

    //console.log(trendingMovies);
    return (
        <div className="mw-100 d-flex max-vh-100" >
            <div id="carouselControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner max-vh-100">
                    {trendingMovies.map((movie, index) => (
                        <div key={movie.id} className={`carousel-item ${index === currentSlide ? 'active' : ''} vh-100`}>

                            <div className={`d-inline-block w-100 ${styles.info} text-white align-top px-5 position-absolute text-start vh-100 vw-100`}>
                                <h5 className='fs-1 text-left py-5 mt-5 mb-0 pb-3'>{movie.title}</h5>
                                <p>Release: {movie.release_date.split('-')[0]}</p>
                                <div className='d-flex align-baseline'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill my-1" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <p className='mx-2 my-1'>{movie.vote_average.toFixed(1)}</p>
                                </div>
                                <p>{movie.overview}</p>
                                <p>Genres: {renderGenres(movie.genre_ids, genres)}</p>

                            </div>
                            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="d-inline-block w-100 object-fit-cover vh-100 vw-100" alt={movie.title} />
                        </div>
                    ))}
                </div>
            </div>
            <div className={`row mt-3 mw-100 w-100 position-absolute bottom-0 mx-0 d-flex justify-content-xl-start align-start overflow-x-scroll flex-nowrap ${styles.thumbs} z-3`}>
                {trendingMovies.map((movie, index) => (
                    <div key={movie.id} className="col mh-75 mw-25">
                        <img
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            alt={movie.title}
                            className={`img-thumbnail ${index === currentSlide ? 'active' : ''} ${styles.thumbs_icon} `}
                            onClick={() => handleThumbnailClick(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
