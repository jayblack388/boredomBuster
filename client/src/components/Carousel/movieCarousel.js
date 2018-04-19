import React, { Component } from "react";
import Slider from "react-slick";
import CustomSlide from "./movieSlide";

export default class SimpleSlider extends Component {
  renderItems() {
    const movies = this.props.assets;
    if (!movies) {
      return <div>Loading...</div>;
    }
    return movies.map(movie => {
      const img = movie.poster_path;
      const imgUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w200${img}` : "./poster.png";
      return (
        <CustomSlide
          key={movie.id}
          link={`https://www.themoviedb.org/movie/${movie.id}`}
          title={movie.title}
          img={imgUrl}
          index={movie.id}
          description={movie.overview}
          release={movie.release_date}
          onClick={()=>this.props.onMovieSelect(movie)}
        />
      );
    });
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div width="100%">
        <Slider {...settings}>{this.renderItems()}</Slider>
      </div>
    );
  }
}
