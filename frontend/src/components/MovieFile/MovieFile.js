// import { Link, useLocation} from 'react-router-dom';
import { useLocation} from 'react-router-dom';
import './moviefile.css';
import Poster from '../Poster/Poster';
import Tag from '../Tag/Tag';
import Director from '../Director/Director';
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

      {/* <Link to="#" activeClassName="active" className="poster__title">{movie.title}</Link> */}
      <div className="movieData">
        <h3 className="movieData-title">{movie.title}</h3>
        <div className="movieData-year">{movie.year}</div> 
      </div>
      
      <div className="movieData-director">
        {movie.director.map((dire) => (
        <Director key={dire} item={dire}></Director>
        ))}
      </div>
              
      <div className="movieData">
        <Rating rating={movie.rate}></Rating>
      </div>
          
      <div className="movieData-categories">
        {movie.categories.map((category) => (
          <Tag key={category} item={category}></Tag>
        ))}
      </div>
    </li>
    );
  }