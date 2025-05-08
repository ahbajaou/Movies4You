import { useMovieContext } from "../contex/MovieContext";
import MovieCard from "../compoment/movieCard";

function favorites() {
    const { favorites } = useMovieContext();
    if (favorites) {
        return (
            <div>
                {favorites.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        )
    }
    return (
        <div className="favorites">
            <h1>Favorites</h1>
            <p>Here you can find your favorite movies.</p>
        </div>
    );
}
export default favorites;