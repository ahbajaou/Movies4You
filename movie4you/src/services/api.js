import axios from 'axios';

// In Vite, use import.meta.env to access environment variables
const API_URL = import.meta.env.VITE_API_URL ;
const API_KEY = import.meta.env.VITE_API_KEY ;

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    params: {
        api_key: API_KEY,
    }
});

export const fetchMovies = async () => {
    try {
        const response = await api.get('/movie/popular', {
        });
        return response.data.results;
    } catch (error) {
        console.error("Error fetching movies:", error);
        throw error;
    }
};

export const SearchMovies = async (query) => {
    try {
        const response = await api.get('/search/movie', {
            params: {
                query: encodeURIComponent(query),
            }
        });
        return response.data.results;
    } catch (error) {
        console.error("Error searching movies:", error);
        throw error;
    }
}