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
                const response = user.findOne({ where: { id: userDecoded.id } });

                if (response) {
                    result = true;
                }
            }
            else {
                res.status(400).json({ status: false, message: 'Token tidak valid!' });
            }
        }

        if (result) {
            next();
        }
        else {
            res.status(400).json({ status: false, message: 'Token tidak valid!' });
        }
    }
}

module.exports = Authentication;