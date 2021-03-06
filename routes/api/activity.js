const router = require("express").Router();
const activityController = require("../../controllers/activityController");

// Matches with "/api/activity"
router.route("/")
  .get(activityController.findAll)
  .post(activityController.findOrCreate);

// Matches with "/api/activity/:id"
router
  .route("/:id")
  .get(activityController.findById)
  .put(activityController.update)
  .delete(activityController.remove);

module.exports = router;
