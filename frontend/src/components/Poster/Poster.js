import './poster.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Poster({id, image, title, addToFavoriteMovies }) {
  // Hooks
	const location = useLocation();

  return (
    <div className='movieData-poster'>
      <div onClick={() => addToFavoriteMovies(id)} className="ribbon">
            {location.pathname !== '/favorites' && (
            <p>
                <span className="favButton"></span>
            </p>
            )}
      </div>
      <img src={image} className="poster" alt={title}/>
    </div>
    );
}