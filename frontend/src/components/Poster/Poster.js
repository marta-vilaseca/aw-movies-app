import {
  Link
} from 'react-router-dom';
import './poster.css';
import Tag from '../Tag/Tag';
import Rating from '../Rating/Rating';
import Favorite from '../Favorite/Favorite';

function Poster({ poster }) {
  return (
    <li className="poster">
        <Favorite movie={poster}></Favorite>
        <img src={poster.image} className="poster__image" alt="logo" />
        <Link to="#" activeClassName="active" className="poster__title">{poster.title}</Link>
        {poster.director}, {poster.year}
        <Rating rating={poster.rate}></Rating>
        
      <div className="poster__categories">
        {poster.categories.map((category) => (
          <Tag key={category} item={category}></Tag>
        ))}
      </div>
    </li>
  );
}

export default Poster;