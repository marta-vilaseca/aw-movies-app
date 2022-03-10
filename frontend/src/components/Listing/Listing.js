import './listing.css';
import MovieFile from '../MovieFile/MovieFile';

function Listing({ movies, favMovies, loading, addToFavoriteMovies }) {
    return (
        <div className={loading ? 'loader' : 'movieGrid'}>
          <ul className="movie-list">
            {movies.map(movie => (
              <MovieFile 
                key={movie.title} 
                movie={movie} 
                addToFavoriteMovies={addToFavoriteMovies}
                favMovies={favMovies}
              ></MovieFile>
            ))}
          </ul>
        </div>
    );
}

export default Listing;