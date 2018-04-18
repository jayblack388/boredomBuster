const router = require("express").Router();
const activityRoutes = require("./activity");

// Book routes
router.use("/activity", activityRoutes);

module.exports = router;
