import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import './listing.css';
import Poster from '../Poster/Poster';

function Listing() {
  //const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);

  // Fetching movies
	function fetchMovies() {
		fetch('/api/movies')
			.then(response => response.json())
			.then(data => {
				setMovies(data.movies);
				setFilterMovies(data.movies);
			});
	}

	useEffect(() => {
		fetchMovies();
	}, []);

    return (
      <>
        <ul className="movie-list">
          {movies.map((movie) => (
            <Poster key={movie.title} poster={movie}></Poster>
          ))}
        </ul>
      </>
    );
}

export default Listing;