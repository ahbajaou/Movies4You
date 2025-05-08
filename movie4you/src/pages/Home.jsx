
import MovieCard from "../compoment/movieCard";
import { fetchMovies , SearchMovies } from "../services/api";
import { useState, useEffect } from "react";

function Home() {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await fetchMovies();
                console.log(response);
                setMovies(response);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        }
        getMovies();
    }, []);
    const handleSearch = async (event) => {
        event.preventDefault();
        if (searchQuery.trim() === "") return;
        try {
            const response = await SearchMovies(searchQuery);
            setMovies(response);
        } catch (error) {
            console.error("Error searching movies:", error);
        }
    };
    return (
        <div>
            <form onSubmit={handleSearch} action="" className="text-black">
                <input 
                type="text" 
                placeholder="Search for a movie..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} 
                />
                <button type="submit">Search</button>
            </form>
            <div>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Home;