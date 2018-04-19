const axios = require("axios");
const YTSearch = require('youtube-api-search');
const API_KEY = 'AIzaSyBEUzi6YYrEM-_QXi4Bvtef3hL0Cd9qB3w';


// Defining methods for the ActivitysController
module.exports = {
  searchYT: function(req, res) {
    YTSearch({ key: API_KEY, term: "Free Hobbies" }, (videos) => {
        res.json(videos)
    })
  }
};

