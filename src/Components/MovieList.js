// MovieList.js
import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import sampleMovies from '../data/sampleMovies'; // Import the sample movie data

function MovieList() {
    return (
        <div>
            {sampleMovies.map((movie) => (
                <Link
                    to={`/movie/${(movie.title)}`}
                >
                    <MovieCard title={movie.title} posterUrl={movie.imageUrl} rating={movie.rating} description={movie.description}  />
                </Link>
            ))}
        </div>
    );
}

export default MovieList;
