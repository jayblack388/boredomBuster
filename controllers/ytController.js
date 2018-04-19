require("dotenv").config();
const keys = require("../keys");
const YTSearch = require('youtube-api-search');
const API_KEY = keys.keys.yt;


// Defining methods for the ActivitysController
module.exports = {
  searchYT: function(req, res) {
    YTSearch({ key: API_KEY, term: req.body.term }, (videos) => {
        res.json(videos)
    })
  }
};

