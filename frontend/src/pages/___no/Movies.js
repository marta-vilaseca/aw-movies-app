
import Listing from '../components/Listing/Listing';
/* import MovieList from '../components/Listing/MovieList'; */

const Movies = ({movies}) => {
    return (
        <section>
            <h2>Movies</h2>
            <Listing movies={movies}></Listing>
        </section>
    );
};

export default Movies;