import { Link, useLocation} from 'react-router-dom';
import './moviefile.css';
import Poster from '../Poster/Poster';
import Tag from '../Tag/Tag';
import Rating from '../Rating/Rating';

  
export default function MovieFile({ favMovies, addToFavoriteMovies, movie }) {
  const location = useLocation();
  // console.log(favMovies.some(item => item._id === movie._id));

  return (
    <li className={location.pathname !== '/favorites' && favMovies.some(item => item._id === movie._id) ? 'moviecard favorite' : 'moviecard'}  key={movie.title}>
      <Poster
				id={movie._id}
				image={movie.image}
				addToFavoriteMovies={addToFavoriteMovies}
				title={movie.title}>
      </Poster>

      <Link to="#" activeClassName="active" className="poster__title">{movie.title}</Link>
      {movie.director}, {movie.year}         
      <Rating rating={movie.rate}></Rating>
          
      <div className="poster__categories">
        {movie.categories.map((category) => (
          <Tag key={category} item={category}></Tag>
        ))}
      </div>
    </li>
    );
  }