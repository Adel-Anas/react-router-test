import React from 'react';
import { Link } from 'react-router-dom';
import './css/MoviePoster.css'; 

function MovieCard({ title, imageUrl, rating }) {
    return (
        <div className="movie-poster">
            <Link to={`/movie/${title}`}>
                <img className="poster-image" src={imageUrl} alt={`Picture of ${title}`} />
            </Link>
            <p className="movie-rating">Rating: {rating}</p>
        </div>
    );
}

export default MovieCard;
