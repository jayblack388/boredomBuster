require("dotenv").config();
const keys = require("../keys");
const API_KEY = keys.keys.movie;

const MovieDB = require("moviedb-promise");
const moviedb = new MovieDB(API_KEY);


// Defining methods for the ActivitysController
module.exports = {
  searchMovie: function(req, res) {
    console.log(req.body.term)
    // console.log(moviedb)
    moviedb.searchMovie({"query": req.body.term}, (response) => {
        res.json()
        console.log(response)
    }, (err) => res.json({err}))
  },

};

