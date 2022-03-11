import './rating.css';

function Rating({ rating }) {

    const StarStyles = () => {
        return {
            width: rating*10 + "%"
        };
    };

    return (
        <div className="movieData_rating">
            <span className="movieData_num-rating">{rating}</span>
            <div className="movieData_star-rating">
                <div className="stars-off">
                    <div className="stars-on" style={StarStyles()}></div>
                </div>
            </div>
        </div>
    );
}

export default Rating;