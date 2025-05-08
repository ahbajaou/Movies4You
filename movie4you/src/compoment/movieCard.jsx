
import { useMovieContext } from "../contex/MovieContext";

function movieCard({ movie }) {

    const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
    const favorite = isFavorite(movie.id);
    const handlefav = (e) => {
        alert("Added to favorites");
        e.preventDefault();
        if (favorite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    }
    return (
      <div className="movie-card">
          <div className="movie-card-content">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>{movie.release_date?.split("-")[0]}</p>
          </div>
          <button onClick={handlefav} className={`${favorite ? "acitve" : ""}`} >❤️</button>
      </div>
    );
  }

export default movieCard;