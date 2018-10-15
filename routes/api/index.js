const router = require('express').Router();
const featureRoutes = require('./feature');
const feedbackRoutes = require('./feedback');
const userRoutes = require('./user');
const configRoutes = require('./config');
const loginRoutes = require('./login');
const logoutRoutes = require('./logout');
const imageRoutes = require('./image');


// routes matches /api/...
router.use('/feature', featureRoutes);
router.use('/feedback', feedbackRoutes);
router.use('/user', userRoutes);
router.use('/config', configRoutes);
router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);
router.use('/image', imageRoutes);


module.exports = router;
