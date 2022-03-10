import logo from './logo.svg';
import './header.css';
import UserInfo from "../../UserInfo";

function Header() {
  return (
    <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1>Movierama</h1>
        {/* <UserInfo></UserInfo> */}
    </header>
  );
}

export default Header;