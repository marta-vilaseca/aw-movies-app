import React, { useState, useEffect } from 'react';
import Listing from '../components/Listing/Listing';

const Home = () => {
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
    
    return (
        <section>
            <h2>Latest Added</h2>
            <Listing movies={currentMovies} loading={loading}></Listing>
        </section>
    );
};

export default Home;