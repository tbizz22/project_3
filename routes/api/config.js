const router = require('express').Router();
const configController = require('../../controllers/configController');

router.route('/')
    .get(configController.findAll);

module.exports = router;