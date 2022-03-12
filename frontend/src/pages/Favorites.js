import React, { useState, useEffect } from 'react';
import Listing from '../components/Listing/Listing';

const Favorites = () => {
    const [favMovies, setFavMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    
    // FAVORITES: fetching
    function fetchFavMovies() {
        setLoading(true);
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
                setLoading(false);
            });
    }

    useEffect(() => {
        fetchFavMovies();
    }, []);

    console.table(favMovies);
    
    return (
        <main>
            <h2>Favorites</h2>
            <Listing movies={favMovies} loading={loading}></Listing>
        </main>
    );
};

export default Favorites;