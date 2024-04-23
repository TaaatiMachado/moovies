import React, { useEffect, useState } from 'react';
import MovieCard from '../../components/MovieCard';
import MovieModal from '../../components/MovieModal';
import { fetchTrendingMovies } from '../../services/tmdb';

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        const getTrendingMovies = async () => {
            try {
                const movies = await fetchTrendingMovies();
                setTrendingMovies(movies);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        getTrendingMovies();
    }, []);

    const handleOpenModal = (movie) => {
        setSelectedMovie(movie);
        setIsModalOpen(true);
        console.log(isModalOpen)
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <h1>Filmes em Destaque</h1>
            {loading ? (
                <p>Carregando...</p>
            ) : error ? (
                <p>Ocorreu um erro: {error}</p>
            ) : (
                <div className="movie-list">
                    {trendingMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} onButtonClick={handleOpenModal} />
                    ))}
                </div>
            )}
            <MovieModal isOpen={isModalOpen} onClose={handleCloseModal} movie={selectedMovie} />
        </div>
    );
};


export default Home;
