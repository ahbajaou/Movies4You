import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY="ec1c15e59c56238d778e72dd2cec8518";

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