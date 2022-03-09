import './rating.css';

function Rating({ rating }) {

    const StarStyles = () => {
        return {
            width: rating*10 + "%"
        };
    };

    return (
        <div className="poster_rating">
            <p className="poster_num-rating">{rating}</p>
            <div className="poster_star-rating">
                <div className="stars-off">
                    <div className="stars-on" style={StarStyles()}></div>
                </div>
            </div>
        </div>
    );
}

export default Rating;