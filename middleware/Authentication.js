const { user } = require('../models');
const Sequelize = require('sequelize');
const { verifyToken } = require('../auth/jwt');

class Authentication {
    static verifyToken(req, res, next) {
        let token = req.headers.token;
        let result = false;
        if (token) {
            const userDecoded = verifyToken(token);

            if (userDecoded) {
                user.findOne({ where: { email: userDecoded.data.email } })
                .then((data) => {
                    req.token = userDecoded.data;
                    next();
                })
                .catch((err) => {
                    res.status(400).json({ status: false, message: 'Authentication Error!', err: err, id: userDecoded.data.id});
                });
            }
            else {
                res.status(400).json({ status: false, message: 'Token tidak valid!' });
            }
        }
    }
}

module.exports = Authentication;