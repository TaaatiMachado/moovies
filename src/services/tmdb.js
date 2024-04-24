const API_KEY = '433eb16e5689f651f19d6e18474b2d96';
const API_URL = 'https://api.themoviedb.org/3'; 
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzNlYjE2ZTU2ODlmNjUxZjE5ZDZlMTg0NzRiMmQ5NiIsInN1YiI6IjY2MjdhZGU5MjIxYmE2MDE2MzE0YjIxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4bQ3S0l6-vW9Y5lFFh3_0vTaCjRHGJYDPGms73Banyo'
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );

    if (!response.ok) {
      throw new Error('Falha ao buscar filmes');
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    return [];
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(`${API_URL}/trending/movie/week
    `, options);
    if (!response.ok) {
      throw new Error('Erro ao buscar os filmes em destaque');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Erro ao buscar os filmes em destaque:', error);
    throw error;
  }
};

export const fetchMovieGenres = async () => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();
    return data.genres;
  } catch (error) {
    console.error('Erro ao buscar os gêneros dos filmes:', error);
    return [];
  }
};

export const renderGenres = (genreIds, genres) => {
  return genreIds.map((genreId) => {
    const genre = genres.find((genre) => genre.id === genreId);
    return genre ? genre.name : 'Unknown';
  }).join(', ');
};

