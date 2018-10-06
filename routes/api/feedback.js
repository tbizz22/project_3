const router = require('express').Router();
const feedbackController = require('../../controllers/feedbackController');

//matches with /api/feedback
router.route('/')
    .get(feedbackController.findAll)
    .post(feedbackController.create);

//matches with /api/feedback/:id
router.route('/:id')
    .get(feedbackController.findById)
    .put(feedbackController.update)
    .delete(feedbackController.remove);

module.exports = router;

