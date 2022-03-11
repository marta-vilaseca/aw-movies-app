import './tag.css';

function Tag({ item }) {
  return (
    // <a href="#" className="tag">{item}</a>
    <span className="tag">{item}</span>
  );
}

export default Tag;