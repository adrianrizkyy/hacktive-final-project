const {user} = require('../../models');
const Sequelize = require('sequelize');

class userController {

    static get_users(req, res) {
        user.findAll()
            .then((data) => {
                res.send(data);
            })
            .catch((err) => console.log(err));
    }
}

module.exports = userController;