const router = require("express").Router();
const featureRoutes = require("./feature");
const feedbackRoutes = require("./feedback");
const userRoutes = require("./user");


// Book routes
router.use("/feature", featureRoutes);
router.use("/feedback", feedbackRoutes);
router.use("/user", userRoutes);


module.exports = router;
