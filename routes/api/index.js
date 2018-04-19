const router = require("express").Router();
const activityRoutes = require("./activity");
const apiRouter = require("./yt");

// Activity routes
router.use("/activity", activityRoutes);
router.use("/yt", apiRouter);

module.exports = router;
