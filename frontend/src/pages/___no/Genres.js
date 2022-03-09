import Listing from '../components/Listing/Listing';
import MovieList from '../components/Listing/MovieList';

const Genres = () => {
    return (
        <section>
            <h2>Genres</h2>
            <Listing movies={MovieList}></Listing>
        </section>
    );
};

export default Genres;