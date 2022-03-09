import React, { useState, useEffect } from 'react';
import Listing from '../components/Listing/Listing';
import Pagination from '../components/Pagination/Pagination';

const Movies = () => {
    //const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage] = useState(10);
    // const [filterMovies, setFilterMovies] = useState([]);

    // Fetching movies
        function fetchMovies() {
            setLoading(true);
            fetch('/api/movies')
                .then(response => response.json())
                .then(data => {
                    setMovies(data.movies);
                    setLoading(false);
                    // setFilterMovies(data.movies);
                });
        }

        useEffect(() => {
            fetchMovies();
        }, []);

    // get current movie
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
    console.log(currentMovies);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    return (
        <section>
            <h2>All Movies</h2>
            <Pagination moviesPerPage={moviesPerPage} totalMovies={movies.length} paginate={paginate} currentPage={currentPage} />
            <Listing movies={currentMovies} loading={loading}></Listing>
            <Pagination moviesPerPage={moviesPerPage} totalMovies={movies.length} paginate={paginate} currentPage={currentPage} />
        </section>
    );
};

export default Movies;