import React from "react";

const MovieDetail = ({movie}) => {
    if (!movie) {
        return <div>Loading....</div>;
    }

    const img = movie.poster_path;
    console.log(img)
    const imgUrl = `https://image.tmdb.org/t/p/w200${img}`;

    return (
        <div className="movie-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
            <img src={imgUrl} />
            </div>
        </div>
    );
}

export default MovieDetail;