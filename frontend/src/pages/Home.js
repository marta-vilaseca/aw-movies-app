import React, { useState, useEffect } from 'react';
import Listing from '../components/Listing/Listing';
import Pagination from '../components/Pagination/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthentication } from '../AuthProvider';

const Home = () => {
	const { authData } = useAuthentication();
	const navigate = useNavigate();  
    const location = useLocation();

    const [movies, setMovies] = useState([]);
    const [favMovies, setFavMovies] = useState([]);
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

    // PAGINATION: get current page of movie list
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    // PAGINATION: change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // FAVORITES: fetching
    function fetchFavMovies() {
        fetch('/api/user/favorites', {
            method: 'GET',
            credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => {
                setFavMovies(data.favorites);
            });
    }

    useEffect(() => {
        fetchFavMovies();
    }, []);
    
    
    // FAVORITES: Add
    function addToFavoriteMovies(id) {
		if (!authData) {
			navigate('/login', { replace: true });
		}

        if (authData) {           
                // console.log(id);
                if(favMovies.some(item => item._id === id)) {
                    console.log('deleting movie')
                    fetch('/api/user/favorites/' + id, {
                        method: 'DELETE',
                        credentials: 'include',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                } else {
                    console.log('adding movie');
                    fetch('/api/user/favorites', {
                        method: 'POST',
                        credentials: 'include',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ _id: id }),
                    });
                }  
                fetchFavMovies();
        }
	}

    return (
        <section>
            <Pagination moviesPerPage={moviesPerPage} totalMovies={movies.length} paginate={paginate} currentPage={currentPage} />
            <Listing addToFavoriteMovies={addToFavoriteMovies} favMovies={favMovies} movies={currentMovies} loading={loading}></Listing>
            <Pagination moviesPerPage={moviesPerPage} totalMovies={movies.length} paginate={paginate} currentPage={currentPage} />
        </section>
    );
};

export default Home;