import MovieCard from "../compoment/movieCard";
import { fetchMovies , SearchMovies } from "../services/api";
import { useState, useEffect } from "react";

function Home() {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getMovies = async () => {
            setIsLoading(true);
            try {
                const response = await fetchMovies();
                console.log(response);
                setMovies(response);
            } catch (error) {
                console.error("Error fetching movies:", error);
            } finally {
                setIsLoading(false);
            }
        }
        getMovies();
    }, []);
    
    const handleSearch = async (event) => {
        event.preventDefault();
        if (searchQuery.trim() === "") return;
        setIsLoading(true);
        try {
            const response = await SearchMovies(searchQuery);
            setMovies(response);
        } catch (error) {
            console.error("Error searching movies:", error);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <div className="min-h-screen bg-gray-900 py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 mb-4">
                        Discover Amazing Movies
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Find your next favorite film from our curated collection of top-rated movies.
                    </p>
                </div>
                
                {/* Search Form */}
                <div className="mb-8 max-w-md mx-auto">
                    <form onSubmit={handleSearch} className="flex shadow-lg rounded-lg overflow-hidden">
                        <input 
                            type="text" 
                            placeholder="Search for a movie..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-3 text-gray-800 bg-white focus:outline-none"
                        />
                        <button 
                            type="submit"
                            className="bg-gradient-to-r from-red-600 to-yellow-600 text-white px-6 py-3 hover:opacity-90 transition-opacity duration-300"
                        >
                            Search
                        </button>
                    </form>
                </div>
                
                {/* Movie Grid */}
                {isLoading ? (
                    <div className="text-center py-12">
                        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-yellow-500 border-r-transparent"></div>
                        <p className="mt-4 text-gray-400">Loading amazing movies...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {movies.length > 0 ? (
                            movies.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12">
                                <p className="text-gray-400">No movies found. Try another search term.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;