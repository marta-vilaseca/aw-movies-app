import './footer.css';

function Footer() {
  const name="Marta Vilaseca";
  let today = new Date();
  let year = today.getFullYear();
  return (
    <footer className="app-footer">
        <p>Created by {name}</p>
        <p>&copy; {year}</p>
    </footer>
  );
};

export default Footer;