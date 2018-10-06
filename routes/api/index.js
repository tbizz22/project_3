const router = require("express").Router();
const featureRoutes = require("./feature");

// Book routes
router.use("/feature", featureRoutes);

module.exports = router;
