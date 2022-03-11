import './poster.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Poster({id, image, title, addToFavoriteMovies }) {
  // Hooks
	const location = useLocation();

  return (
    <div className='movieData-poster'>
      <div className="ribbon">
            {location.pathname !== '/favorites' && (
            <p>
                <span onClick={() => addToFavoriteMovies(id)} className="favButton"></span>
            </p>
            )}
      </div>
      <img src={image} className="poster" alt={title}/>
    </div>
    );
}