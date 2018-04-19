const router = require("express").Router();
const activityRoutes = require("./activity");
const ytRouter = require("./yt");
const movieRouter = require("./movie");


// Activity routes
router.use("/activity", activityRoutes);
router.use("/yt", ytRouter);
router.use("/movie", movieRouter);


module.exports = router;
