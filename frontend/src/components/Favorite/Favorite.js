import { useState } from "react";
import './favorite.css';

function Favorite(movie) {
    const [isActive, setActive] = useState("false");
    const favoriteMovies = [];

    const handleToggle = () => {
        setActive(!isActive);
        if(isActive && !(favoriteMovies.includes(movie))) {
            favoriteMovies.push(movie);
        }
        if (!isActive) {
            // TODO: find in favoriteMovies and delete it
        }
        console.log(favoriteMovies);
    };
    
    return (
        <div class="ribbon ribbon-top-left">
            <span className={isActive ? "" : "favMovie"} >
                <button onClick={handleToggle} className={isActive ? "favButton" : "favButton favMovie"} title={movie.title}></button>
            </span>
        </div>
    );
}

export default Favorite;