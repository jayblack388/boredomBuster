const router = require("express").Router();
const ytController = require("../../controllers/ytController");

// Matches with "/api/yt"
router.route("/")
  .post(ytController.searchYT)

module.exports = router;
