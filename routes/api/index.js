const router = require('express').Router();
const featureRoutes = require('./feature');
const feedbackRoutes = require('./feedback');
const userRoutes = require('./user');
const configRoutes = require('./config')


// routes
router.use('/feature', featureRoutes);
router.use('/feedback', feedbackRoutes);
router.use('/user', userRoutes);
router.use('/config', configRoutes);


module.exports = router;
