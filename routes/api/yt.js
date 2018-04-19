const router = require("express").Router();
const ytController = require("../../controllers/ytController");

// Matches with "/api/yt"
router.route("/")
  .post(ytController.searchYT)

/* // Matches with "/api/yt/:id"
router
  .route("/:id")
  .get(ytController.findById)
  .put(ytController.update)
  .delete(ytController.remove);
 */
module.exports = router;
