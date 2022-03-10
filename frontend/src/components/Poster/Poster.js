import './poster.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Poster({id, image, title, addToFavoriteMovies }) {
  // Hooks
	const location = useLocation();

  return (
    <div className='poster'>
      <div onClick={() => addToFavoriteMovies(id)} className="ribbon ribbon-top-left">
            {location.pathname !== '/favorites' && (
            <span>
                <p className="favButton"></p>
            </span>
            )}
      </div>
      <img src={image} className="poster" alt={title}/>
    </div>
    );
}