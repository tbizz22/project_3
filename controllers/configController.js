const config = require('../config/loopfeedConfig');

module.exports = {
    findAll: function(req, res) {
       res.json(config);
    }
}