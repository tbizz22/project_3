const router = require('express').Router();
const featureController = require('../../controllers/featureController');

//matches with /api/feature
router.route('/')
    .get(featureController.findAll)
    // .post(featureController.create);

//matches with /api/feature/:id
// router.route('/:id')
//     .get(featureController.findById)
//     .put(featureController.update)
//     .delete(featureController.remove);

module.exports = router;

