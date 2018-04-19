import _ from "lodash";
import React, { Component } from "react";
import Carousel from "../Carousel/movieCarousel";

import SearchBar from "../Videos/searchBar";

import "./movies.css";
import API from "../../utils/API";
import axios from "axios";

const API_KEY = process.env.MOVIEKEY || "665b9ee5cc64ad84ac40ff9bef4b5e47";

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
    this.newAndCurrentSearch();
  }

  handleMovieSelect(selectedMovie) {
    const img = selectedMovie.poster_path;
    const imgUrl = selectedMovie.poster_path
      ? `https://image.tmdb.org/t/p/w200${img}`
      : "./poster.png";
    const activity = {
      title: selectedMovie.title,
      link: `https://www.themoviedb.org/movie/${selectedMovie.id}`,
      img: imgUrl,
      description: selectedMovie.overview
    };
    API.postActivity(activity);
  }

  movieSearch(term) {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${term}&page=1&include_adult=false&region=US`
      )
      .then(response => {
        this.setState({
          movies: response.data.results
        });
      });
  }

  newAndCurrentSearch() {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&region=US&include_adult=false&include_video=false&page=1&primary_release_date.gte=2018-03-20&primary_release_date.lte=2018-05-20`
      )
      .then(response => {
        this.setState({
          movies: response.data.results
        });
      });
  }

  render() {
    const movieSearch = _.debounce(term => {
      this.movieSearch(term);
    }, 600);
    return (
      <div className="container-fluid">
        <SearchBar onSearchTermChange={movieSearch} />
        <Carousel
          onMovieSelect={this.handleMovieSelect.bind(this)}
          assets={this.state.movies}
        />
      </div>
    );
  }
}
