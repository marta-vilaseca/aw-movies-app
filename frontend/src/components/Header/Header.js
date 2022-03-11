import logo from './logo.svg';
import './header.css';

function Header() {
  return (
    <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1>Movierama</h1>
    </header>
  );
}

export default Header;