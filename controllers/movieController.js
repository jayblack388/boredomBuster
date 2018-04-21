require("dotenv").config();
const keys = require("../keys");
const API_KEY = keys.keys.movie;
const axios = require("axios");

// Defining methods for the ActivitysController
module.exports = {
  searchMovie: function(req, res) {
    console.log(req.body);
    const term = req.body.term;
    axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${term}&page=1&include_adult=false&region=US`
    ).then((response) => {
      console.log(response)
      res.json(response)
    })
  }
};
