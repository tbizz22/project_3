const router = require('express').Router();
const featureRoutes = require('./feature');
const feedbackRoutes = require('./feedback');
const userRoutes = require('./user');
const configRoutes = require('./config')
const loginRoutes = require('./login')


// routes
router.use('/feature', featureRoutes);
router.use('/feedback', feedbackRoutes);
router.use('/user', userRoutes);
router.use('/config', configRoutes);
router.use('/login', loginRoutes)


module.exports = router;
