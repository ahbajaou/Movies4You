import { useMovieContext } from "../contex/MovieContext";
import { useNavigate } from "react-router-dom";

function movieCard({ movie }) {
    const navigate = useNavigate();
    const handleClick = () => {
        console.log("movies id : " , movie.id);
        navigate(`/watch/${movie.id}`);
    }
    const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
    const favorite = isFavorite(movie.id);
    
    const handlefav = (e) => {
        e.preventDefault();
        if (favorite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    }
    
    // Base64 encoded simple gray placeholder image
    const placeholderImg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9Ijc1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9Ijc1MCIgZmlsbD0iIzM3NDE1MCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiNmZmZmZmYiPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==";
    
    return (
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <div className="relative">
              <img 
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : placeholderImg} 
                alt={movie.title}
                className="w-full h-80 object-cover"
                onError={(e) => {
                  // Prevent infinite error loop by checking if already using placeholder
                  if (e.target.src !== placeholderImg) {
                    e.target.src = placeholderImg;
                  }
                }}
              />
              <div className="absolute top-0 right-0 p-2">
                <button 
                  onClick={handlefav} 
                  className={`p-2 rounded-full ${favorite ? "bg-red-600" : "bg-gray-700 hover:bg-gray-600"} transition-colors duration-300`}
                >
                  <span className="text-xl">{favorite ? "❤️" : "🤍"}</span>
                </button>
              </div>
          </div>
          <div className="p-4">
              <h3 className="text-lg font-semibold text-white truncate">{movie.title}</h3>
              <div className="flex justify-between items-center mt-2">
                <p className="text-gray-400">{movie.release_date?.split("-")[0]}</p>
                <span className="bg-yellow-600 text-xs text-white px-2 py-1 rounded-full">{movie.vote_average?.toFixed(1)}</span>
              </div>
              <div className="mt-4">
                <a 
                //   href={`/watch/${movie.id}`}
                    href={`https://vidsrc.xyz/embed/movie/${movie.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    // onClick={handleClick}
                  className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition duration-300 ease-in-out"
                >
                  <span className="mr-2">▶</span>Watch Movie
                </a>
              </div>
          </div>
      </div>
    );
  }

export default movieCard;