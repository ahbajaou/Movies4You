import { useMovieContext } from "../contex/MovieContext";
import MovieCard from "../compoment/movieCard";

function favorites() {
    const { favorites } = useMovieContext();
    
    return (
        <div className="min-h-screen bg-gray-900 py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 mb-4">
                        Your Favorite Movies
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A collection of movies you've saved for later.
                    </p>
                </div>
                
                {/* Favorites Grid */}
                {favorites && favorites.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {favorites.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-gray-800 rounded-lg shadow-lg">
                        <div className="text-yellow-500 mb-4 text-5xl">❤️</div>
                        <h2 className="text-xl font-bold text-white mb-2">No favorites yet</h2>
                        <p className="text-gray-400 max-w-md mx-auto">
                            Explore movies and click the heart icon to add them to your favorites.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
export default favorites;