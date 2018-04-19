const router = require("express").Router();
const movieController = require("../../controllers/movieController");

// Matches with "/api/movie"
router.route("/")
  .post(movieController.searchMovie)

module.exports = router;
