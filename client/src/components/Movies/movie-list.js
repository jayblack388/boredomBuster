import React from "react";
import MovieListItem from "./movie-list-item";


const MovieList = props => {
  const movieItems = props.movies.map(movie => {
    return (
      <MovieListItem
        key={movie.title}
        onMovieSelect={props.onMovieSelect}
        movie={movie}
      />
    );
  });
  return (
    <div>
      <ul className="col-md-4 list-group">{movieItems}</ul>
    </div>
  );
};

export default MovieList;
