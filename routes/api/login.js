const router = require('express').Router();
const passport = require('../../config/passport');


router.route('/')
    .post(function (req, res, next) {
            console.log(req.body)
            next()
        },
        passport.authenticate('local'),
        (req, res) => {
            console.log('logged in', req.user);
            var userInfo = {
                username: req.user.username
            };
            res.send(userInfo);
        })


    

module.exports = router;