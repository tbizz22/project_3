const router = require('express').Router();
const passport = require('../../config/passport');

router.post('/', (req, res) => {
    if (req.user) {
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})



module.exports = router;


