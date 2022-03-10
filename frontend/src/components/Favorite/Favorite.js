import React from 'react';
import { useLocation } from 'react-router-dom';
import './favorite.css';

function Favorite(title, id, addToFavoriteMovies) {
    // const [isActive, setActive] = useState("false");
    // Hooks
	const location = useLocation();
    
    return (
        <div class="ribbon ribbon-top-left">
            {location.pathname !== '/favorites' && (
            <span>
                <p onClick={() => addToFavoriteMovies(id)} className="favButton" title={title}></p>
            </span>
            )}
        </div>
    );
}

export default Favorite;