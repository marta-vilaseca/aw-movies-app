import './listing.css';
import Poster from '../Poster/Poster';

function Listing({ movies, loading }) {
    if(loading) {
      return '<h2>loading...</h2>';
    }
    return (
        <ul className="movie-list">
          {movies.map(movie => (
            <Poster key={movie.title} poster={movie}></Poster>
          ))}
        </ul>
    );
}

export default Listing;