const jwt = require('jsonwebtoken');
const passport = require('passport');
const config = require('../../config/environment.prod');

module.exports.loginAuthenticate = function (req, res) {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err) {
            return res.status(400).json({
                message: 'Something is not right',
                err: err
            });
        }
        if (!user) {
            return res.status(401).json({
                message: 'Unauthorized',
                user: user
            });
        }
        req.login(user, { session: false }, (err) => {
            if (err) {
                res.send(err);
            }
            const token = jwt.sign(user, config.jwtSecret);
            return res.status(200).json({ user, token });
        });
    })(req, res);
};