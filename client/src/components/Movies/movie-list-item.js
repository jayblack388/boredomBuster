import React from 'react';

const MovieListItem = ({movie, onMovieSelect}) => {
    const img = movie.poster_path;
    const imgUrl = `https://image.tmdb.org/t/p/w200${img}`;
        return (
        <li onClick={() => onMovieSelect(movie)} className="list-group-item">
            <div className="movie-list media">
                <div className="media-left">
                    <img className="media-object" src={imgUrl} alt={movie.title} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{movie.title}</div>
                </div>
            </div>
        </li>
    );
}

export default MovieListItem;