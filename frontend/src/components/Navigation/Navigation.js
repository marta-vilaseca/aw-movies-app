import {
    NavLink
} from 'react-router-dom';
import RequireAuth from "../../RequireAuth";
import './navigation.css';

function Navigation() {
  return (
    <ul className="nav-bar">
        <li><NavLink to="/">Latest Added</NavLink></li>
        <li><NavLink to="/allmovies">All Movies</NavLink></li>
        <RequireAuth><li><NavLink to="/favorites">Favorites</NavLink></li></RequireAuth>
        <li><NavLink to="/login">Login</NavLink></li>
    </ul>
  );
}

export default Navigation;