import { createContext, useContext, useState } from 'react';
import { searchMovies } from '../services/tmdb';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchResults, setSearchResults] = useState([]);

    const performSearch = async (query, page) => {
            const movies = await searchMovies(query, page); 
            setSearchResults(movies);
    };



    return (
        <SearchContext.Provider value={{ 
            searchResults, 
            setSearchResults,  
            performSearch }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
};
